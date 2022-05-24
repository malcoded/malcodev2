import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from "../components/layout"
import CardPost from "../components/card.post"
import Pagetitle from "../components/page.title"

const Post = ({posts}: {posts: any}) => {
  return (
    <Layout title="Todas las publicaciones">
      <Pagetitle title="Todas las publicaciones" />
      <div className="gv-row-max-1">
        {posts.map(({frontMatter, slug}: {frontMatter: any, slug: string}, index: number) => (
          <CardPost
            key={index}
            slug={slug}
            title={frontMatter.title}
            description={frontMatter.description}
            date={frontMatter.date}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Post

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename), 'utf8')
    const {data: frontMatter} = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })

  posts.sort((a: any, b: any) => {
    return (new Date(b.frontMatter.date) as any) - (new Date(a.frontMatter.date) as any)
  })

  return {
    props: {
      posts
    }
  }
}
