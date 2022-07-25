import Image from 'next/image'
import styles from './Footer.module.css'
import Logo from '../../public/assets/Logo.svg'
import Icon from '../../public/assets/Icon.svg'
import Heart from '../../public/assets/Heart.svg'

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Image src={Logo} alt="Logo" />
                    <h3>Build a modern and creative website with crealand</h3>
                    <div className={styles.icon}>
                        <Image src={Icon} alt="Icon" />
                        <Image src={Icon} alt="Icon" />
                        <Image src={Icon} alt="Icon" />
                        <Image src={Icon} alt="Icon" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.list_container}>
                        <h4>Product</h4>
                        <ul>
                            <li>Landingpage</li>
                            <li>Features</li>
                            <li>Documentation</li>
                            <li>Referral Program</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className={styles.list_container}>
                        <h4>Services</h4>
                        <ul>
                            <li>Documentation</li>
                            <li>Design</li>
                            <li>Themes</li>
                            <li>Illustration</li>
                            <li>Ui Kit</li>
                        </ul>
                    </div>
                    <div className={styles.list_container}>
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>Carrers</li>
                        </ul>
                    </div>
                    <div className={styles.list_container}>
                        <h4>More</h4>
                        <ul>
                            <li>Documentation</li>
                            <li>License</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <Image src={Heart} alt="heart" />
                <p>Copyright © 2019. Crafted with love.</p>
            </div>
        </footer>
    )
}