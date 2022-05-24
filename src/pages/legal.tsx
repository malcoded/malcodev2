import Layout from "../components/layout"
import Pagetitle from "../components/page.title"

const Legal = () => {
  return (
    <Layout title="Legal">
      <Pagetitle title="Sobre este sitio web" />
      <div className="gv-about-section">
        <h3 style={{padding: 0, margin: 0}}>Contacto</h3>
        <span>E-Mail: </span>
        <a href="mailto:contacto@malcode.dev" target="_blank" rel="noreferrer">
          contacto@malcode.dev
        </a>
      </div>
    </Layout>
  )
}

export default Legal
