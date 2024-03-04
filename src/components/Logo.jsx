import BlackLogo  from '../assets/BlackLogo.svg';
import WhiteLogo from '../assets/WhiteLogo.svg';

export default function Logo({ blackBg }) {
    if (blackBg) {
        return <a href='/'>
            <img src={WhiteLogo} alt="Logo" />
            
        </a>
    } else {
        return <a href='/'>
            <img src={BlackLogo} alt="Logo" />
        </a>
    }
}