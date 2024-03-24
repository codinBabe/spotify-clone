import React from "react";
import Header from '../Header/Header';
import BlueSection from '../BlueSection/BlueSection';
import SubSectionWhite from '../SubSectionWhite/SubSectionWhite';
import cards from '../utils/Cards';
import styles from './LandingPage.module.css'
import PricePlanSection from '../PricePlanSection/PricePlanSection';
import Footer from '../Footer/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <BlueSection />
            <h1>The Power of Premium</h1>
            <div className={styles.herosection}>
                <SubSectionWhite
                    img={cards[0].img}
                    h3={cards[0].h3}
                    p={cards[0].p}
                    className={styles.subsectionwhite}
                />
                <SubSectionWhite img={cards[1].img} h3={cards[1].h3} p={cards[1].p} />
                <SubSectionWhite img={cards[2].img} h3={cards[2].h3} p={cards[2].p} />
                <SubSectionWhite img={cards[3].img} h3={cards[3].h3} p={cards[3].p} />
            </div>
            <PricePlanSection />
            <Footer />
        </>
    );
};

export default LandingPage;