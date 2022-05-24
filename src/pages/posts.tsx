import Layout from "../components/layout"
import CardPost from "../components/card.post"
import Pagetitle from "../components/page.title"

const Post = () => {
  return (
    <Layout title="Todas las publicaciones">
      <Pagetitle title="Todas las publicaciones" />
      <div className="gv-row-max-1">
        {/*   {posts.map((node, index) => (
          <CardPost
            key={index}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            date={node.frontmatter.date}
          />
        ))} */}
      </div>
    </Layout>
  )
}

export default Post
