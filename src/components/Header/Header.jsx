import Logo from "../Logo";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <Logo blackBg={true} />
            <nav>
                <ul className={styles.flex}>
                    <li><a href='#'>Premium</a></li>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Download</a></li>
                    <li>|</li>
                    <li><a href='/signup'>Sign up</a></li>
                    <li><a href='/login'>Log in</a></li>
                </ul>
            </nav>
        </header>
    )
}