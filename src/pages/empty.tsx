import Link from 'next/link'
import Image from 'next/image'
import empty_page from "assets/images/empty_page.svg"

const EmptyPage = ({
  button = {label: "Ver Posts"},
  description = "Estamos trabajando para traer el mejor contenido en video 📺, para ti.",
  url = "/posts",
  title = "¡CREANDO CONTENIDO... ✍!"
}) => (
  <>
    <div className="gv-row-max-1">
      <div className="gv-container-not-found">
        <h3>{title}</h3>
        <div className="gv-img_portada_not_found">
          <Image src={empty_page} alt="pagina no encontrada" />
        </div>
        <p>
          {description}
        </p>
        <Link href={url}>
          <a className="gv-btn gv-btn-green">
            {button.label}
          </a>
        </Link>
      </div>
    </div>
  </>
)

export default EmptyPage
