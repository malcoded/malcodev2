import {menuLinks} from '../utils/config'

import Nav from './nav'
import Header from './header'
import Footer from './footer'
import AuthProvider from 'utils/AuthProvider'
import Head from 'next/head'



type Props = {
    title?: string
    description?: string
    keywords?: string
    url?: string
    image?: string
    site_name?: string
    children?: React.ReactNode
}

const Layout = (props: Props) => {
    const {
        title = 'Inicio',
        description = 'malcode es un ecosistema de recursos prácticos para desarrolladores que desean construir aplicaciones web y móviles modernas de alta calidad.',
        keywords = 'Javascript, React.js, Next.js, firebase, html, css',
        url = 'https://malcode.dev',
        image = 'https://rebrand.ly/zn6m0um',
        site_name = 'malcode',
        children
    } = props

    return (
        <AuthProvider>
            <Head>
                <meta charSet="utf-8" />
                <title>{title} | malcode</title>
                <meta http-equiv="X-UA-Compatible" content="IE=7" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="google-site-verification" content='GHsNI-Vz_wpgvLa4b9tgVzSx_tiS09URxJN60PB2_fw' />
                <meta name="og:type" content='website' />
                <meta name="og:url" content={url} />
                <meta name="og:image" content={image} />
                <meta name="og:site_name" content={site_name} />
                <meta name="twitter:card" content='summary' />
                <meta name="twitter:creator" content='@malcode' />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:site" content='@malcode' />
            </Head>
            <Header />
            <Nav />
            <div className="gv-main-container">
                <main>{children}</main>
                <Footer menuLinks={menuLinks} />
            </div>
        </AuthProvider>
    )
}

export default Layout