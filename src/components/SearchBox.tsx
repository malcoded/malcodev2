import {useState} from 'react'

// import Link from 'next/link'

type Props = {
    showSearch: boolean
    toggleOnSearch: () => void
}

const SearchBox = (props: Props) => {

    const {showSearch, toggleOnSearch} = props
    const [suggestions, /* setSuggestions */] = useState([])
    /*     const dataSource: any = []
     */
    /* const findMatches = (wordToMatch: string, data: [] | any) => {
        const list = data.allMdx.edges
        return list.filter((item: any) => {
            const regex = new RegExp(wordToMatch, "gi")
            return (
                (item && item.node.frontmatter.title.match(regex)) ||
                (item && item.node.frontmatter.description.match(regex))
            )
        })
    } */

    /* const handleOnSearch = (event: HTMLInputElement) => {
        const {value} = event.target
        if(value.length > 2) {

            const regex = new RegExp(value, "gi")
            const title = frontmatter.title.replace(regex, `<em>${value}</em>`)
            const description = frontmatter.description.replace(regex, `<em>${value}</em>`)

            return (
                <Link
                    className="gv-buscador-hit"
                    href={fields.slug}
                    onClick={toggleOnSearch}
                >
                    <h4>
                        <span
                            className="gv-hit-title"
                            dangerouslySetInnerHTML={{__html: title}}
                        />
                    </h4>
                    <p
                        className="hit-description"
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                </Link>
            )

            setSuggestions([])
        } else {
            setSuggestions([])
        }
    } */

    return (
        <div
            className={
                showSearch === true
                    ? "gv-buscador-container gv-modal-show"
                    : "gv-buscador-container"
            }
        >
            <div className="gv-buscador-hits">
                <div className="gv-buscador-form-wrap">
                    <input
                        type="search"
                        placeholder="Buscar..."
                        className="gv-buscador-input"
                    // onChange={handleOnSearch}
                    />
                    <button
                        className="gv-btn gv-btn-sm gv-btn-red gv-buscador-close gv-remove-style"
                        onClick={toggleOnSearch}
                    >
                        Cerrar
                    </button>
                </div>
                {suggestions}
            </div>
        </div>
    )
}

export default SearchBox