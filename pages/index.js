import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import styles from '../components/Home/Home.module.scss'
import Masonry from 'react-masonry-css'
import PoetryCard from '../components/PoetryCard/PoetryCard'
import $ from "jquery";
import { useEffect } from 'react'


export default function Home() {
   useEffect(() => {
    var one = "#10e88a",
		two = "#7f3995",
		three = "#0d78e7",
		four = "#f88f18",
		five = "#bb6774";

    var titleOne = "Great Sorrow", titleTwo = "Unrelenting Strength"

  $(window).on("scroll touchmove", function() {
      if ($(document).scrollTop() >= $("#one").position().top) {
          $('body').css('background-color', $("#one").attr("data-color"));
          $("#topicTitle").html(`<h1 id="titleText" data-title=1>${titleOne}</h1>`).fadeIn(1500);

      };
      if ($(document).scrollTop() > $("#two").position().top) {
          $('body').css('background-color', $("#two").attr("data-color"))
          $("#topicTitle").html(`<h1 id="titleText" data-title=2>${titleTwo}</h1>`).fadeIn(1500);
      };
    });
  })

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  var one = "#525252",
		two = "#CA3E47",
		three = "#0d78e7",
		four = "#f88f18",
		five = "#bb6774";

  return (
    <div className={styles.Homepage}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"/>
        
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.Homepage__contentWrap}>
          <div className={styles.Homepage__contentSection}>
            <div className={styles.Homepage__titleSection}>
              <div>Pieces of <div id='topicTitle'></div></div>
              <span>I Pride myself on patience and other such virtues. Despite this I am only human. I too fall prey to the temptation of rage</span>
            </div>
            <div className={styles.Homepage__masonryWrap}>
              <div id='one' data-color={one}>
                <Masonry
                  breakpointCols={2}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {/* array of JSX items */}
                  <PoetryCard long/>
                  <PoetryCard/>
                  <PoetryCard />
                  <PoetryCard long />
                  <PoetryCard />
                  <PoetryCard />
                  <PoetryCard long/>
                  <PoetryCard/>
                  <PoetryCard />
                  <PoetryCard long />
                  <PoetryCard />
                  <PoetryCard />
                  <PoetryCard long/>
                  <PoetryCard/>
                  <PoetryCard />
                  <PoetryCard long />
                  <PoetryCard />
                  <PoetryCard />
                </Masonry>
                <div className="clear"></div> 
              </div>

              <div id='two' data-color={two}>
                <Masonry
                  breakpointCols={2}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {/* array of JSX items */}
                  <PoetryCard long/>
                  <PoetryCard/>
                  <PoetryCard />
                  <PoetryCard long />
                  <PoetryCard />
                  <PoetryCard />
                  <PoetryCard long/>
                  <PoetryCard/>
                  <PoetryCard />
                  <PoetryCard long />
                  <PoetryCard />
                  <PoetryCard />
                  <PoetryCard long/>
                  <PoetryCard/>
                  <PoetryCard />
                  <PoetryCard long />
                  <PoetryCard />
                  <PoetryCard />
                </Masonry>
                <div className="clear"></div> 
              </div>
            </div>
            
          
          </div>
        </div>
      </main>
      
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
