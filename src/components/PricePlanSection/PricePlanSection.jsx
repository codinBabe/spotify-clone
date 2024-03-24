import Lipi from '../../assets/lipi (1).svg';
import Paytm from "../../assets/paytm(2).svg";
import Visa from "../../assets/visa.svg";
import MasterCard from "../../assets/mastercard.svg";
import Amex from "../../assets/amex.svg";
import DinersClub from "../../assets/dinersclub.svg";
import styles from './PricePlanSection.module.css';
import PricePlanCard from './PricePlanCard';
import PriceTerms from "../PriceTerms/PriceTerms";


function PricePlanSection() {
    return (
        <section className={styles.priceplan}>
            <h1 className={styles.pick}>Pick your Premium</h1>
            <p>Listen without limits on your phone, speaker, and other devices.</p>
            <div>
                <img src={Lipi} alt='icon' />
                <img src={Paytm} alt='icon' />
                <img src={Visa} alt='icon' />
                <img src={MasterCard} alt='icon' />
                <img src={Amex} alt='icon' />
                <img src={DinersClub} alt='icon' />
            </div>
            <div>
                <PricePlanCard />
                <PriceTerms/>
            </div>
        </section>
    );
}
export default PricePlanSection;