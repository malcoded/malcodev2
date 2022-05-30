import {ChangeEvent, useState} from 'react'
import {onSearchAlgolia} from 'utils/config'
import Link from 'next/link'


type Props = {
    showSearch: boolean
    toggleOnSearch: () => void
}

const SearchBox = (props: Props) => {
    const {showSearch, toggleOnSearch} = props
    const [suggestions, setSuggestions] = useState<any>([])
    const [loading, setLoading] = useState(false)

    const findMatches = (wordToMatch: string, data: [] | any) => {
        const list = data.allMdx.edges
        return list.filter((item: any) => {
            const regex = new RegExp(wordToMatch, "gi")
            return (
                (item && item.node.frontmatter.title.match(regex)) ||
                (item && item.node.frontmatter.description.match(regex))
            )
        })
    }

    const handleOnSearch = async (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        if(value.length > 1) {
            const response = await onSearchAlgolia(value, 'posts', setLoading)
            setSuggestions(response)
        } else {
            setSuggestions([])
        }
    }

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
                        onChange={handleOnSearch}
                    />
                    <button
                        className="gv-btn gv-btn-sm gv-btn-red gv-buscador-close gv-remove-style"
                        onClick={toggleOnSearch}
                    >
                        {loading ? 'Buscando...' : 'Cerrar'}
                    </button>
                </div>
                {suggestions.map((item: any) => (
                    <Link
                        href={`/posts/${item.url}`}
                    >
                        <span className="gv-buscador-hit gx-poi gx-pointer">
                            <h4>
                                <span
                                    className="gv-hit-title"
                                    dangerouslySetInnerHTML={{__html: item?._highlightResult?.name?.value}}
                                />
                            </h4>
                            <p
                                className="hit-description"
                            >
                                {item?.descriptions}
                            </p>
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchBox