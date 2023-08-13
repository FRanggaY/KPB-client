import React, { Component, Fragment } from 'react';
import Sidebar from '../../../components/sidebar';
import CardSettings from '../../../components/cards/settings';

class Settings extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    <Sidebar />
                    <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                            <CardSettings />
                            </div>
                        </div>
                    </div>
                    
                </main>
            </Fragment>
        )
    }
}

export default Settings;
