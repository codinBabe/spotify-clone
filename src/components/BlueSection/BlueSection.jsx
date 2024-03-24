import { ButtonsBlueSection } from "../ButtonBlueSection";
import styles from './BlueSection.module.css'
function BlueSection() {
    return (
        <section className={styles.bluesection}>
            <h1>Get Premium free For 1 month</h1>
            <p>
                Just ₹119/month after. Debit and Credit Cards are accepted. Cancel
                anytime.
            </p>
            <div className={styles.button}>
                <ButtonsBlueSection backgroundColor="black" text="GET STARTED" />
                <ButtonsBlueSection
                    backgroundColor="#1c75de"
                    text="SEE OTHER PLANS"
                    border="2px solid white"
                    width="200px"
                />
            </div>
            <p className={styles.terms}>
                <span>Terms and Condtions Apply</span>. 1month free not available for
                users who already have premium
            </p>
        </section>
    );
}
export default BlueSection;