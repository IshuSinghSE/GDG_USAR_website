import React from 'react';
import Hero from './components/hero';
import Footer from './components/Footer';
import BentoGrid from './components/BentoGrid';
import WeTextSection from './components/WeTextSection';
import AboutUs from './components/AboutUs';
import Belt from './components/Belt'
import Parallax from './components/parallax';
import ScrambleText from './components/ScrambleText'; // Add this line


export default function Home() {
  return (
    <div className="">
      {/* Main content */}
      <div className="">
        <main className="relative z-10">
          <section className='h-screen w-full'>
            <Hero/>
          </section>
  

          <section>
            <AboutUs/>
          </section>

          <section>
            <Belt/>
          </section>

          <section className="container mx-auto">
              <BentoGrid />
          </section>

          <section className="container mx-auto">
            <WeTextSection />
          </section>

          <section>
            <Parallax/>
          </section>


          <section className="container mx-auto">
            <ScrambleText />
          </section>

        </main>
      </div>
      <Footer/>
  </div>
  );
}
