import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
import axios from 'axios';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MiniLoading } from '../../../components/loading';

class Activities extends Component {
    state = {
        activity: [],
        date: new Date(),
        loading: true
    }

    componentDidMount() {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.get('/api/activities').then(res => {
                if(res.status === 200){
                    const activity = res.data.data;
                    this.setState({ activity, loading: false });
                }
            }).catch(err => {
                console.log(err.message)
            })
            ;
        });    
    }


    onChange = date => this.setState({ date })

    

    render() {
        if(this.state.loading){
            return <div className="overflow-hidden">
                <MiniLoading />
            </div>
        }
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <section className="relative py-5 mt-10">
                        <div className="container mx-auto px-5 lg:px-20">
                            <p className="px-3 border-l-4 border-black capitalize font-semibold my-5">Kegiatan</p>
                            <div className="flex lg:flex-col-reverse flex-col-reverse gap-5">

                                {this.state.activity.map((item) => {
                                return(
                                    <div>
                                        {moment(item.date).format('LL') === moment(this.state.date).format('LL') 
                                        
                                        ? 
                                        <div className="blockbg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={item}>
                                            <div className="flex flex-col lg:flex-row">
                                                {item.image
                                                    ?   <div className="p-8 w-72">  
                                                            <img src={`http://localhost:8000/${item.image}`} />
                                                        </div>
                                                    : null
                                                }
                                                
                                                <div className="p-8">
                                                        <span className=" bg-blue-300 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                                                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                                            {item.time}
                                                        </span>
                                                        <div>
                                                            <a href={item.link} target="_blank" rel="noopener" className="mb-2 text-2xl font-bold ">{item.title}</a>
                                                            <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        :
                                        
                                         null
                                    
                                        }   
                                        
                                    </div>
                                )
                                })}
                                <div className="flex gap-5 lg:flex-row flex-col">
                                    <Calendar
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />
                                    <p className="text-xl font-semibold py-3">{moment(this.state.date.toString()).format('LL')}</p> 
                                    {/* <p className="text-2xl font-bold text-black"> Tanggal :  <span className="font-semibold">{moment(this.state.date.toString()).format('LL')}</span> </p> */}
                                </div>
                            </div>
                            
                        </div>
                        </section>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Activities;
