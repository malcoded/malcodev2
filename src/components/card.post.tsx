import Link from 'next/link'

type CardPostProps = {
    title: string
    slug: string
    date: string
    description: string

}

const CardPost = ({slug, title, date, description}: CardPostProps) => {
    return (
        <article className="gv-card-post">
            <Link href={slug}>
                <a>
                    <header>
                        <h3>{title}</h3>
                        <small>{date}</small>
                    </header>
                    <section>
                        <p
                            className="gv-subtext"
                            dangerouslySetInnerHTML={{__html: description, }}
                        />
                    </section>
                </a>
            </Link>
        </article>
    )
}

export default CardPost