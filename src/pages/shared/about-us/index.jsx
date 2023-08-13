import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
import ProfileTeamCard from '../../../components/cards/profile-team';
import axios from 'axios';

class AboutUs extends Component {
    state = {
        profile: [],
    }

    componentDidMount() {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.get('/api/users/8').then(res => {
                if(res.status === 200){
                    const profile = res.data.data;
                    this.setState({ profile })
                }
            }).catch(err => {
                console.log(err.message)
            })
            ;
        });    
    }

    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <section className="relative py-5 mt-10">
                        <div className="container mx-auto px-5 lg:px-20">
                            <h6 className="text-center text-xl font-bold py-5">Meet the Team</h6>
                            <div className="flex gap-10 justify-center flex-wrap">
                                {this.state.profile.map((item, index) => {
                                    return (
                                        <ProfileTeamCard 
                                            imgsrc={`http://localhost:8000/${item.profile_picture}`}
                                            name={item.name}
                                        />
                                    )
                                })}
                            </div>
                            
                        </div>
                        </section>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default AboutUs;
