import { useState } from 'react'
import Logo from '../../public/assets/Logo.svg'
import Image from 'next/image'
import styles from './Header.module.css'
import { BsList } from "react-icons/bs";

export default function Header() {
    const [mobileNav, setMobileNav] = useState(false)

    return (
        <header id={styles.header}>
            <Image src={Logo} alt="Logo" />
            <ul className={mobileNav ? `${styles.left.expanded}` : `${styles.left}`}>
                <li><h4>See Open Jobs</h4> </li>
                <li><button>Contact us</button></li>
            </ul>
            <div className={styles.menu_icon}>
                <BsList color="#3A4C66" size={40} onClick={() => {
                    setMobileNav(!mobileNav)
                }} />
            </div>
        </header >
    )
}