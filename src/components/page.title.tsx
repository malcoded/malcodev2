interface PagetitleProps {
    title: string
    className?: string
}

const Pagetitle = ({title, className = "gv-border-bottom"}: PagetitleProps) => {
    return (
        <header>
            <h1 className={className}>{title}</h1>
        </header>
    )
}
export default Pagetitle
