import React from 'react';
import { Carousel,Col,Row,Grid  } from 'react-bootstrap';
import { Player,ControlBar  } from 'video-react';
import Homepagedisplay from '../containers/homepage_display';
import HomepageMachinelist from '../containers/homepage_machinelist';
require('../../scss/style.css');



function Home() {



    return(
        <div>
            <section>
                <Carousel interval={4000}>
                    <Carousel.Item >
                        <img className="carousel" width={1260} height={380} alt="900x500" src="https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/zHome/slide01.jpg" />
                        <Carousel.Caption>
                            <h3>Bag Closing Parts</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel" width={1260} height={380} alt="900x500" src="https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/zHome/slide02.jpg" />
                        <Carousel.Caption>
                            <h3>Domestic Sewing Parts</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section id='inter'>
                <br />
                <h1 id='headline'>We carry vaious brands of sewing, bag closing machines and spare parts.</h1>
                <p id='intro-descrip'>Available brand such as Adler, brother, Consew, Eastman, Fischbein, Juki, Kansai Special, Kingtex, Lewis, Merrow, Mitsubishi, New Long, Pegasus, Pfaff, Rimoldi, Reece, Singer, Siruba, Union Special, Yamato, Ha-1. Available parts – Presser feet, Throat Plate, Feed Dog, Loopers, Knives, Motors, Bobbins, Bobbin Case, Shuttle Hook, Binder and Folder, Needles, Scissors..etc.</p>
                <br />
            </section>
                <Homepagedisplay />
            <section id='inter'>
                <br />
                <HomepageMachinelist />
            </section>

        </div>
    )



}




export default Home;
