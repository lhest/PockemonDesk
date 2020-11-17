import React from 'react';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";
import {LinkEnum} from "../../routes";
import {navigate} from "hookrouter";

import s from "./Home.module.scss";

const HomePage = () => {
    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading size = "l" className = {s.heading}>
                        <b>Find</b> all your favourite <b>Pokemon</b>
                    </Heading>
                    <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <div className={s.buttonRow}>
                        <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See Pokemons</Button>
                    </div>
                </div>
                <div className={s.contentParallax}>
                    <Parallax  />
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;