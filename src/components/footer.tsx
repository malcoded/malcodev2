import Link from 'next/link'

import reactIcon from "assets/images/react.svg"
import firebaseIcon from "assets/images/firebase.svg"
import vercelIcon from "assets/images/vercel.svg"

type Props = {
    menuLinks: Array<{
        name: string
        url: string
    }>
}

const Footer = ({menuLinks}: Props) => {
    return (
        <footer>
            <div className="gv-copyright">
                <div className="gv-copyright-item">
                    Copyright &copy; {new Date().getFullYear()} malcode <br />
                </div>
                <div className="gv-copyright-item">
                    Created with
                    <img src={reactIcon.src} alt="react" className="gv-pl-4" />
                    <img src={firebaseIcon.src} alt="firebase" />
                    <img src={vercelIcon.src} alt="vercel" /> by
                    <Link
                        href="/about"
                    >
                        <a className="gv-pl-4">malcode</a>
                    </Link>
                </div>
                <hr className="gv-hr" />
            </div>
            <ul className="gv-menu-footer">
                {
                    menuLinks.map(menu => (
                        <li key={menu.name}>
                            <Link href={menu.url}>{menu.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <hr className="gv-hr" />
        </footer>
    )
}

export default Footer