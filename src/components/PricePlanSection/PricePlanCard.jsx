import Tick from '../../assets/tick.svg';
import styles from './PricePlanSection.module.css';
import { ButtonsBlueSection } from '../ButtonBlueSection';

function PricePlanCard() {
    return (
        <div className={styles.pricecards}>
            <div className={styles.pricecard}>
                <h4 className={styles.top}>One-time plans available</h4>
                <h2 className={styles.title}>Mini</h2>
                <p className={styles.top}>
                    From ₹7/day <br></br>1 account on mobile only
                </p>
                <hr className={styles.hr1} id="onlyhr"></hr>
                <div className={styles.info1}>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Ad-free music listening on mobile</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Group Session</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Download 30 songs on 1 mobile device</p>
                    </div>
                    <ButtonsBlueSection
                        backgroundColor="black"
                        text="VIEW PLANS"
                        width="250px"
                    />
                    <div className={styles.terms2}>
                        <span> Terms and conditions apply.</span>
                    </div>
                </div>
            </div>
            <div className={styles.pricecard}>
                <h3 className={styles.duration}>1 month free</h3>
                <h4 className={styles.top}>One-time plans available</h4>
                <h2 className={styles.title}>Individual</h2>
                <p className={styles.top}>
                    ₹119/month after offer period <br></br>1 account
                </p>
                <hr className={styles.hr1}></hr>
                <div className={styles.info2}>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Ad-free music listening</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Group Session</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>
                            Download 10k songs/device on 5 devices
                        </p>
                    </div>
                    <ButtonsBlueSection
                        backgroundColor="black"
                        text="VIEW PLANS"
                        width="250px"
                    />
                    <div className={styles.terms2}>
                        <p className={styles.termsandconditions}>
                            <span> Terms and conditions apply.</span>1 month free not
                            available for users who have already tried Premium.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.pricecard}>
                <h3 className={styles.duration}>1 month free</h3>
                <h4 className={styles.top}>One-time plans available</h4>
                <h2 className={styles.title}>Duo</h2>
                <p className={styles.top}>
                    ₹149/month after offer period <br></br>2 accounts
                </p>
                <hr className={styles.hr1}></hr>
                <div className={styles.info3}>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>For couples who live together</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Ad-free music listening</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Group Session</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>
                            Download 10k songs/device, on 5 devices per account
                        </p>
                    </div>
                    <ButtonsBlueSection
                        backgroundColor="black"
                        text="VIEW PLANS"
                        width="250px"
                    />
                    <div className={styles.terms2}>
                        <p className={styles.termsandconditions}>
                            <span> Terms and conditions apply.</span>1 month free not
                            available for users who have already tried Premium.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.pricecard}>
                <h3 className={styles.duration}>1 month free</h3>
                <h4 className={styles.top}>One-time plans available</h4>
                <h2 className={styles.title}>Family</h2>
                <p className={styles.top}>
                    ₹179/month after offer period <br></br>Up to 6 accounts
                </p>
                <hr className={styles.hr1}></hr>
                <div className={styles.info4}>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>For family who live together</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Block explicit music</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Ad-free music listening</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>Group Session</p>
                    </div>
                    <div className={styles.tick}>
                        <img src={Tick} />
                        <p className={styles.description}>
                            Download 10k songs/device on 5 devices
                        </p>
                    </div>
                    <ButtonsBlueSection
                        backgroundColor="black"
                        text="VIEW PLANS"
                        width="250px"
                    />
                    <div className={styles.terms2}>
                        <p className={styles.termsandconditions}>
                            <span> Terms and conditions apply.</span>1 month free not
                            available for users who have already tried Premium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PricePlanCard;