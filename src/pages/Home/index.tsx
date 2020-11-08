import React from 'react';
import Header from '../../components/Header';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
          <div className={s.contentText}>
              <h1>
                  <b>Find</b> all your favorite <b>Pockemon</b>
              </h1>
              <p>You can know the type of Pockemon, its strengths, disadvantages and abilities</p>
              <Button onClick={() => console.log('Click Button!')}>
                  See pockemons
              </Button>
          </div>
          <Parallax className={s.contentParallax}>We&apos;ll see Parallax here soon...</Parallax>
      </Layout>
    </div>
  );
};

export default HomePage;
