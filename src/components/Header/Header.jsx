import Logo from "../Logo";
import './Header.css';

export default function Header() {
    return (
        <header>
            <Logo blackBg={true} />
            <nav>
                <ul className="flex">
                    <li><a href='#'>Premium</a></li>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Download</a></li>
                    <li>|</li>
                    <li><a href='#'>Sign up</a></li>
                    <li><a href='#'>Log in</a></li>
                </ul>
            </nav>
        </header>
    )
}