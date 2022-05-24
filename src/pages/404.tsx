
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import not_found_page from "assets/images/not_found.svg"

const NotFoundPage = () => (
  <Layout title="404: Pagina no encontrada">
    <div className="gv-row-max-1">
      <div className="gv-container-not-found">
        <h3>PAGINA NO ENCONTRADA</h3>
        <div className="gv-img_portada_not_found">
          <Image src={not_found_page} alt="pagina no encontrada" />
        </div>
        <p>
          Acabas de llegar a una ruta que no existe ... la tristeza.
          😭
        </p>
        <Link href="/posts">
          <a className="gv-btn gv-btn-green">
            Ver otras publicaciones
          </a>
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
