import Layout from 'components/layout'
import Link from 'next/link'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

import CardPost from './../components/card.post'
import home_image from 'assets/images/home-pep.svg'

const Home = ({posts}: {posts: any}) => {
  return (<Layout title="Aprenda a crear aplicaciones web modernas 🔥">
    <div className="gv-row">
      <div className="gv-img_portada">
        <img src={home_image.src} alt="home" />
      </div>
      <div>
        <h1>
          ¿Quieres desarrollar aplicaciones
          🔥 increíbles más
          ⚡ rapido?
        </h1>
        <p>¡Has venido al lugar correcto!</p>
        <p>
          malcode es un ecosistema de recursos prácticos para desarrolladores
          que desean crear aplicaciones de alta calidad .<br /> ¡Lleva tus
          habilidades de programación al siguiente nivel!
        </p>
        <Link href="/posts">
          <a className="gv-btn gv-btn-orange-outline">
            Explorar
          </a>
        </Link>
      </div>
    </div>
    <hr className="gv-hr" />
    <header className="gv-container-center-title">
      <h2>Mira las últimas publicaciones</h2>
      <small>NUEVO CONTENIDO CADA POCOS DÍAS</small>
    </header>
    <div className="gv-row-max-3">
      {
        posts.map(({frontMatter, slug}: {frontMatter: any, slug: string}, index: number) => (
          <CardPost
            key={index}
            slug={slug}
            title={frontMatter.title}
            description={frontMatter.description}
            date={frontMatter.date}
          />
        ))
      }
    </div>
  </Layout>)
}

export default Home


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

  return {
    props: {
      posts
    }
  }
}
