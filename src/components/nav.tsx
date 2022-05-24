import Link from 'next/link'
import {useState, useContext} from 'react'
import {auth, signOut, onAuthGoogle} from '../utils/firebase.config'
import {AuthContext} from './../utils/AuthProvider'

import GoogleIcon from '../assets/images/google.svg'
import SearchBox from './SearchBox'

type Props = {}

// activeClassName="gv-active-link"
const Nav = (props: Props) => {

    const {currentUser} = useContext(AuthContext)
    const [showSearch, setShowSearch] = useState(false)

    const toggleOnSearch = () => {
        setShowSearch(!showSearch)
    }

    const onLogin = () => {
        onAuthGoogle()
    }

    const onCloseSession = () => {
        signOut(auth)
    }

    return (
        <nav className="gv-sidenav">
            <Link
                href="/"
            >
                <a className="gv-item gv-show-on-movile">
                    <i className="fad fa-home" />
                    <span className="gv-item-label">Inicio</span>
                </a>
            </Link>
            <button className="gv-item gv-remove-style" onClick={toggleOnSearch}>
                <i className="fad fa-search" />
                <span className="gv-item-label">Buscar</span>
            </button>
            <Link href="/posts">
                <a className="gv-item">
                    <i className="fad fa-code-commit" />
                    <span className="gv-item-label">Posts</span>
                </a>
            </Link>
            <Link href="/lessons">
                <a className="gv-item">
                    <i className="fad fa-tv-retro" />
                    <span className="gv-item-label">Videos</span>
                </a>
            </Link>

            <Link
                href="/about"
            >
                <a className="gv-item gv-hide-on-movile">
                    <i className="fad fa-qrcode" />
                    <span className="gv-item-label">malcode</span>
                </a>
            </Link>
            {currentUser ? (
                <button className="gv-item gv-remove-style" onClick={onCloseSession}>
                    <img src={currentUser.photoURL} alt={currentUser?.displayName} />
                    <span className="gv-tag-green gv-tag-sm  gx-mt-2">Salir</span>
                </button>
            ) : (
                <button className="gv-item gv-remove-style" onClick={onLogin}>
                    <img src={GoogleIcon.src} alt="google-login" />
                    <span className="gv-tag gv-tag-sm ">Login</span>
                </button>
            )}

            <SearchBox showSearch={showSearch} toggleOnSearch={toggleOnSearch} />
        </nav>
    )
}

export default Nav