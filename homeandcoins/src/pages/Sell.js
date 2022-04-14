import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Sell from '../components/Sell';
const sell = () => {
  return (
    <>
      <Hero>
        <Banner title="HOME & COINS" subtitle="Buy or Sell Home With Crypto">
          <Link to="/rooms" className="btn-primary">
            our houses
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default sell;
