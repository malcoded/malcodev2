import Link from 'next/link'

const AuthorTitle = ({url = "/about", name = "malcode"}) => {
  return (
    <em>
      By <Link href={url}>{name}</Link>
    </em>
  )
}

export default AuthorTitle
