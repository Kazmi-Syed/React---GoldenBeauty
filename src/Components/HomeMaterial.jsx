import React from 'react'

import Nail from '../assets/images/nails-homepage.jpg';
import Wax from '../assets/images/waxing-homepage.jpg';
import Relax from '../assets/images/relaxation-main-image.jpg';

import {useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function HomeMaterial() {
    const location =useLocation()

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
}, [location,])


    const styles = {
        img : {
            width : "60px",
            height : "60px",
        },

        section : {
            marginTop : "60px",
        }
    }
    
  return (
   <>
   <div className="scroll-btn">
        <a href="#"><span className="fas fa-arrow-circle-up"></span></a>
    </div>


    <section>

        <div className="hero-image">

            <div id="mission-statement">
                <h2>Inner Beauty is your job, we do the rest</h2>
            </div>

        </div>

    </section>


    <main>
        <section id="services">
            <h2>What we offer</h2>
            <div className="services-flexbox">

                <div className="services-item nails">
                    <img src={Nail} alt="Avatar" style={styles.img} />
                    <a href="/nails">
                        <h3>Nails</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </a>
                </div>

                <div className="services-item waxing">
                    <img src={Wax} alt="Avatar" style={styles.img} />
                    <a href="/waxing">
                        <h3>Waxing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </a>
                </div>

                <div className="services-item relaxation">
                    <img src={Relax} alt="Avatar" style={styles.img} />
                    <a href="/relaxation">
                        <h3>Relaxation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </a>
                </div>
            </div>
        </section>

        <section id="services" style={styles.section}>
            <h2>Daily Feed</h2>

            <div className="services-flexbox">

                <div className="services-item nails">

                    <h3>New Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                </div>

                <div className="services-item waxing">

                    <h3>Relaxation Benefits</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                </div>

                <div className="services-item relaxation">

                    <h3>Famous celebrities</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                </div>
            </div>
        </section>


        <section id="about-us">
            <h2>About Us</h2>

            <div className="about-us-box">


                <div className="client-bio">
                    <p>We take great pride in providing the most exceptional and high-quality services on the market
                        right now. We make every item with a lot of love and care, from our family to yours. We
                        sincerely hope you take pleasure in it as much as we do in presenting it to you.</p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum. Nam rutrum
                        dui vitae magna tincidunt hendrerit. </p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum.</p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum.</p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum. Nam rutrum
                        dui vitae magna tincidunt hendrerit.
                    </p>
                </div>

            </div>
        </section>
    </main>

   </>
  )
}

export default HomeMaterial