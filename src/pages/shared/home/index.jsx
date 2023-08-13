import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
import HeroSection from './section/hero';
import DescriptionSection from './section/description';
import MediaSection from './section/media';
import ContactUsSection from './section/contact-us';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <HeroSection />
                    <DescriptionSection />
                    <MediaSection />
                    <ContactUsSection />
                </main>
                <FooterComponent />
            </Fragment> 
        )
    }
}

export default Home;