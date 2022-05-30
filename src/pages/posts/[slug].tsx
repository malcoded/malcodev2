import {useState, useEffect} from 'react'
import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import {auth, onAuthGoogle, db, doc, getDoc, setDoc} from 'utils/firebase.config'
import SyntaxHighlighter from 'react-syntax-highlighter'

import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import Layout from 'components/layout'
import Pagetitle from 'components/page.title'
import Link from 'next/link'
import Modal from 'components/modal'
import AuthorTitle from 'components/author.title'
import Rating from 'components/rating'


type PostPageProps = {
  frontMatter: any,
  slug: string,
  mdxSource: any
  previous: any,
  next: any
}

const Code = ({children, language}: {children: any, language: string}) => {
  return <SyntaxHighlighter language={language}>
    {children}
  </SyntaxHighlighter>
}

const components = {Code}

const PostPage = ({frontMatter, slug, mdxSource, previous, next, }: PostPageProps) => {

  const [visible, setVisibile] = useState(false)
  const [post, setPost] = useState<any>(null)

  const handleOnClick = async () => {
    try {
      const currentUser = auth.currentUser
      if(currentUser) {
        const currentClap = post && post.claps ? post.claps : 0
        await setDoc(doc(db, 'posts', slug), {claps: currentClap + 1})
        getClaps(slug)
      } else {
        setVisibile(true)
      }
    } catch(error) {
      console.log('🚀 ~ file: [slug].tsx ~ line 36 ~ handleOnClick ~ error', error)
    }
  }

  const authGoogleAcount = async () => {
    try {
      await onAuthGoogle()
      setVisibile(false)
    } catch(error) {
      console.log('🚀 ~ file: [slug].tsx ~ line 45 ~ authGoogleAcount ~ error', error)
    }
  }

  const handleOnCloseModal = () => {
    setVisibile(false)
  }

  const getClaps = async (id: string | undefined | null) => {
    try {
      if(id) {
        const docRef = doc(db, 'posts', id)
        const docSnap = await getDoc(docRef)
        const data = docSnap.data()
        data && setPost(data)
      }
    } catch(error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    slug && getClaps(slug)
  }, [slug])

  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.description}
    >

      <Rating handleOnClick={handleOnClick} post={post} />
      <div className="gv-post-container">
        <Pagetitle title={frontMatter.title} className="gv-snippet-title" />
        <AuthorTitle />
        <MDXRemote {...mdxSource} components={components} />
        <nav className="gv-chapter-nav">
          {previous && (
            <div className="chapter-prev">
              <Link href={previous.fields.slug} rel="prev" >
                <a className="gv-btn">
                  👈
                  <span className="gv-truncate">
                    {previous.frontMatter.title}
                  </span>
                </a>
              </Link>
            </div>
          )}

          {next && (
            <div className="gv-chapter-next">
              <Link href={next.fields.slug} rel="next">
                <a className="gv-btn">
                  <span className="gv-truncate">{next.frontmatter.title}</span>
                  👉
                </a>
              </Link>
            </div>
          )}
        </nav>
      </div>
      <Modal
        visible={visible}
        handleOnCloseModal={handleOnCloseModal}
        authGoogleAcount={authGoogleAcount}
      />
    </Layout>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(/\.mdx$/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}


const getStaticProps = async ({params: {slug}}: {params: {slug: string}}) => {
  const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', `${slug}.mdx`), 'utf8')
  const {data: frontMatter, content} = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export {getStaticPaths, getStaticProps}
export default PostPage