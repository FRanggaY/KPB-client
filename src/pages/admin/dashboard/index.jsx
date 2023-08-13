import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
import CardStats from '../../../components/cards/stats';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            loading: true
        };
    }
    async getData() {
        await axios.get('/sanctum/csrf-cookie').then(res => {
            axios.get('/api/users/detail/10').then(res => {
                this.setState({ 
                    userList: res.data.data,
                    loading: false,
                });
            }).catch(err => {
                console.log(err.message)
            })
            ;
        });
    }

  componentDidMount() {
    this.getData();
  }
    render() {
        return (
            <Fragment>
                <main>
                    <Sidebar />
                    <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                        <div>
                            <div className="px-4 md:px-10 mx-auto w-full">
                            <h6 className="text-blueGray-700 text-xl font-bold py-5">Dashboard</h6>
                                <div>
                                    {this.state.loading 
                                    ?  <div>loading data...</div>
                                    :
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                            <CardStats
                                            statSubtitle="All Account"
                                            statTitle={this.state.userList.total}
                                            statDescripiron=""
                                            statIconName="far fa-chart-bar"
                                            statIconColor="bg-red-500"
                                            />
                                        </div>
                                        
                                    </div>
                                    }
                                </div>
                        </div>
                    </div>
                    </div>
                    
                </main>
            </Fragment>
        )
    }
}

export default Dashboard;
