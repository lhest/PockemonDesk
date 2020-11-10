import React from 'react';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";

import s from "./Home.module.scss";

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <h1>
                        <b>Find</b> all your favourite <b>Pokemon</b>
                    </h1>
                    <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Button onClick={() => console.log("this button pushed")}>See Pokemons</Button>
                </div>
                <div className={s.contentParallax}>
                    <Parallax  />
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;