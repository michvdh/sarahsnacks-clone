import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Category from "../components/home-page/category/Category";
import Favorites from "../components/home-page/favorites/Favorites";
import EmblaCarousel from "../components/ui/FavoritesCarouselEmbla/EmblaCarouselFave";

import Hero from "../components/home-page/hero/Hero";
import Quote from "../components/home-page/quote/Quote";
import Snacks from "../components/home-page/snacks/Snacks";

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { ioActions } from "../store/intersectionObserver";

// this will be served for "domain.com/" - no sub pages
const Home: React.FC = () => {

  return (
    <Fragment>
      <Head>
        <title>Sarah&apos;s Snacks - Healthy Vegan Snacks | York PA
        </title>
        <link rel="shortcut icon" href="/sarahsnacks-fav.png" />
      </Head>
      <main className={`main`}>
        <Hero />
        <Category />
        <Favorites />
        <Quote />
        <Snacks />
      </main>
    </Fragment>
  );
};

export default Home;
