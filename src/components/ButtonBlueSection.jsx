import "./BlueSection/BlueSection.module.css";
import style from './Login/Login.module.css'
export function ButtonsBlueSection({
    backgroundColor,
    text,
    border,
    className,
    margin,
    width,
    img: path,
    svgClass,
}) {
    return (
        <button
            style={{
                backgroundColor: backgroundColor,
                border: border,
                margin: margin,
                width: width,
            }}
            className={className}
        >
            {text}
            <img src={path} className={`${style.loginpagelogos} ${svgClass}`} />
        </button>
    );
}