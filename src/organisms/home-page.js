import React, { Component } from 'react';
import HomeBackground from '../molecules/home-background';
import homeBgImg from '../assets/main-background.jpg';
import Header from '../molecules/header';
import Nav from '../molecules/nav';
import Main from '../atoms/main';
import Grid, {GridArea} from '../atoms/main-grid';
import CardSingle from '../molecules/card-single';
import Quote from '../molecules/quotation';
import CardBW from '../molecules/card-bw';
import Photo from '../molecules/photos';
import UpcomingShows from '../molecules/upcoming'
import Footer from '../atoms/footer';
import DetailList from '../molecules/details-list';
import LinkList from '../molecules/link-list';
import DownloadList from '../molecules/download-list';
import WeAre from '../molecules/we-are';
import JoinForm from '../molecules/join-form';
import Repersentation from '../molecules/representation';
import Music from '../molecules/music';

class Home extends Component {
    state = {  }
    render() { 
        return ( <>
            <HomeBackground img={homeBgImg}/>
            <Header/>
            <Main>
                <Nav/>

                <Grid>

                    <GridArea area="news">
                        <CardSingle title="news">

                            <Quote person="– FAST magazine">“Atomic Music, fired up, gave us the  concert of the year”</Quote>

                        </CardSingle>
                    </GridArea>
                    <GridArea area="details">
                        <CardBW title="details">
                            <DetailList/>
                        </CardBW>
                    </GridArea>
                    <GridArea area="music">
                        <CardSingle title="music">

                            <Music/>

                        </CardSingle>
                    </GridArea>
                    <GridArea area="photos">
                        <Photo/>
                    </GridArea>
                    <GridArea area="weAre">
                        <CardBW title="we are">

                            <WeAre/>

                        </CardBW>
                    </GridArea>
                    <GridArea area="upcoming">
                        <UpcomingShows/>
                    </GridArea>
                    <GridArea area="representation">
                        <CardSingle title="Representation">

                            <Repersentation/>

                        </CardSingle>
                    </GridArea>
                    <GridArea area="download">
                        <CardBW title="download">
                            <DownloadList/>
                        </CardBW>
                    </GridArea>
                    <GridArea area="join">
                        <CardSingle title="Join the mailling list">

                            <JoinForm/>

                        </CardSingle>
                    </GridArea>
                    <GridArea area="links">
                        <CardBW title="links">
                            <LinkList/>
                        </CardBW>
                    </GridArea>
                </Grid>

            </Main>

            <Footer>
                &copy; 2019 <strong>atomic music</strong>. Creared by <strong>Szymon Maśko</strong>
            </Footer>
        </> );
    }
}
 
export default Home;