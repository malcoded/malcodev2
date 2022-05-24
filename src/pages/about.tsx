import React from "react"
import Layout from "../components/layout"
import Pagetitle from './../components/page.title'

const About = () => {
    return (
        <Layout title='Acerca de'>
            <Pagetitle title="De qué se trata malcode 🤷‍♂️" />
            <div className="gv-about-section">
                <h2>
                    ¡Tutoriales detallados que contienen todo lo que necesita para
                    comenzar! 🚀
                </h2>
                Mi objetivo es proporcionar tutoriales ricos y detallados, que realmente
                lo ayuden a tener éxito. ¡Es por eso que todos mis artículos
                proporcionan ejemplos completos, que dan como resultado una aplicación
                en ejecución! En este blog, comparto todos los errores y descubrimientos
                que he cometido, ¡para que tú también puedas beneficiarte de mis
                aprendizajes!
                <h3>
                    ¡Objetivo! ✍
                </h3>
                Para documentar mi viaje de codificación (🐱‍💻) para mí y para otros. Al
                ingresar al mundo del desarrollo frontend con JavaScript vainilla,
                rápidamente me enamoré de los marcos de aplicación de una sola página,
                como React. Desde entonces, ¡estoy explorando continuamente las
                profundidades de React, compartiendo mis hallazgos más emocionantes aquí
                contigo!
            </div>
        </Layout>
    )
}

export default About
