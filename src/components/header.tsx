import Link from 'next/link'
import Image from 'next/image'
import malcodeIcon from 'assets/images/logo.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="gv-header">
            <Link href="/">
                <a className="gv-logo">
                    <Image src={malcodeIcon} alt='malcode' layout="responsive" />
                </a>
            </Link>
        </header>
    )
}

export default Header