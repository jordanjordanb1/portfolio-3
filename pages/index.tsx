import React from 'react';
import './index.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import config from '../src/config/config';
import Head from 'next/head';
import Analytics from '../src/utils/analytics/Analytics';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const handleClick = (e: any) => {
    const dataUrl = e.currentTarget.getAttribute('data-title');

    if (dataUrl) {
      Analytics.onClick(dataUrl);
    }
  };

  return (
    <>
      <Head>
        <title>Home | Full Stack Web Dev | Jordan Barbosa</title>
        <link rel="canonical" href="https://jordanbarbosa.com/" />
      </Head>
      <Jumbotron
        fluid
        className="home-jumbotron d-flex justify-content-center align-items-center page"
      >
        <div className="item-container">
          <div className="hi-box text-left">
            <h1>Hi,</h1>
          </div>
          <div className="intro-box text-left">
            <h1>I'm Jordan, </h1>
            <h1>a web developer</h1>
            <Link href="/contact">
              <Button
                as={'a'}
                className="quick-links mt-2 mr-2 p-2"
                data-title="Contact Me Button"
                onClick={handleClick}
              >
                CONTACT ME
              </Button>
            </Link>
            <Link href={`${config.getStatic()}/resume/resume.pdf`} prefetch={false}>
              <Button
                target="_blank"
                as={'a'}
                className="quick-links mt-2 mr-2 p-2 d-sm-none"
                data-title="Resume Button - Home Page"
                onClick={handleClick}
              >
                RESUME
              </Button>
            </Link>
          </div>
        </div>
      </Jumbotron>
    </>
  );
};

export default Home;
