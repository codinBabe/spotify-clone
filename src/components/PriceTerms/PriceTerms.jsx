import { ButtonsBlueSection } from '../ButtonBlueSection';
import styles from './PriceTerms.module.css';
function PriceTerms() {
    return (
        <div className={styles.discount}>
            <h2>Special discount for eligible students in university</h2>
            <ButtonsBlueSection
                className={styles.buttondiscount}
                backgroundColor="white"
                text="LEARN MORE"
                border="2px solid black"
                width="200px"
            />
        </div>
    );
}
export default PriceTerms;