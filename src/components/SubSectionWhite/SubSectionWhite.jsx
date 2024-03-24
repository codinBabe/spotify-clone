import styles from './SubSectionWhite.module.css';

function SubSectionWhite(props) {
    return (
        <div className={styles.cards}>
            <img src={props.img} alt="icon"></img>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
        </div>
    );
}
export default SubSectionWhite;