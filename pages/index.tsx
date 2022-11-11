import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Category from "../components/home-page/category/Category";
import Favorites from "../components/home-page/favorites/Favorites";
import EmblaCarousel from "../components/ui/FavoritesCarouselEmbla/EmblaCarousel";

import Hero from "../components/home-page/hero/Hero";
import Quote from "../components/home-page/quote/Quote";
import Snacks from "../components/home-page/snacks/Snacks";

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { ioActions } from "../store/intersectionObserver";

// this will be served for "domain.com/" - no sub pages
const Home: React.FC = () => {
  // const dispatch = useDispatch();

  // const { ref: mainRef, entry } = useInView({
  //   threshold: 1, // this means IO will trigger once 10% of the target is inside the viewport
  //   root: null,
  //   rootMargin: '0px'
  // });

  // console.log(entry);

  // const intersectState = entry?.isIntersecting;

  // if (intersectState !== undefined) {
  //   dispatch(ioActions.changeIOState(intersectState));
  // }

  return (
    <Fragment>
      <Head>
        <title>Sarah's Snacks - Healthy Vegan Snacks | York PA
        </title>
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
