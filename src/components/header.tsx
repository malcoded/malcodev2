import Link from 'next/link'
import malcodeIcon from 'assets/images/logo.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="gv-header">
            <Link href="/">
                <a>
                    <img className="gv-logo" src={malcodeIcon.src} alt='malcode' />
                </a>
            </Link>
        </header>
    )
}

export default Header