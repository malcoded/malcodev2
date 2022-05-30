import algoliasearch from 'algoliasearch'

const menuLinks = [
    {name: "Acerca", url: "/about"},
    {name: "Privacidad", url: "/privacity"},
    {name: "Aviso Legal", url: "/legal"},
]

const client = algoliasearch('J56LJHUCR7', 'b0484f443a30ba09914abd6d7cb9f847')

const onSearchAlgolia = async (query: string, index: string, setLoading: any) => {
    try {
        setLoading(true)
        const algoliaApp = client.initIndex(index)
        const {hits} = await algoliaApp.search(query, {
            hitsPerPage: 4,
            cacheable: false
        })
        setLoading(false)
        return hits
    } catch(error) {
        setLoading(false)
        return []
    }
}

export {menuLinks, onSearchAlgolia}