import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router , Routes as Switch, Route, Navigate } from 'react-router-dom';
import {Home, Login, AboutUs, Gallery, Activities, NotFound, Dashboard, Settings, Users,Activity, Profile, GalleryAdmin} from '../../pages';
import EditGalleryAdmin from '../../pages/admin/gallery-admin/edit';
import EditAdvertiseAdmin from '../../pages/admin/advertisement/edit';
import EditActivityAdmin from '../../pages/admin/activity/edit';
import Advertise from '../../pages/admin/advertisement';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        {/* Incognito */}
                        <Route exact path="/" element={<Home />}></Route>
                        {localStorage.getItem('auth_token') 
                            ? <Route path="/login" element={<Navigate replace to="/" />} /> 
                            : <Route exact path="/login" element={<Login />}></Route>
                        }

                        <Route exact path="/about-us" element={<AboutUs />}></Route>
                        <Route exact path="/gallery" element={<Gallery />}></Route>
                        <Route exact path="/activities" element={<Activities />}></Route>
                        <Route exact path="/profile" element={<Profile />}></Route>
                        {/* <Route exact path="/register" element={<Register />}></Route> */}
                        {/* END Incognito */}
                        <Route path="*" element={<NotFound />} />
                    </Switch>
                    {/* ADMIN/USER */}
                    {localStorage.getItem('auth_token') 
                        ?   <Switch>
                                <Route exact path="/admin/dashboard" element={<Dashboard />}></Route>
                                <Route exact path="/admin/settings" element={<Settings />}></Route>
                                <Route exact path="/admin/users" element={<Users />}></Route>
                                <Route exact path="/admin/activity" element={<Activity/>}></Route>
                                <Route exact path="/admin/activity/edit/:id" element={<EditActivityAdmin/>}></Route>
                                <Route exact path='/admin/advertise' element={<Advertise/>}></Route>
                                <Route exact path='/admin/advertise/edit/:id' element={<EditAdvertiseAdmin/>}></Route>
                                <Route exact path='/admin/gallery' element={<GalleryAdmin/>}></Route>
                                <Route exact path='/admin/gallery/edit/:id' element={<EditGalleryAdmin/>}></Route>
                                <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />
                            </Switch>
                        :   <Switch>
                                <Route path="/admin/dashboard" element={<Navigate replace to="/login" />} />
                                <Route path="/admin/settings" element={<Navigate replace to="/login" />} />
                                <Route path="/admin/users" element={<Navigate replace to="/login" />} />
                                <Route path="/admin/activity" element={<Navigate replace to="/login" />} />
                                <Route exact path='/admin/advertise'element={<Navigate replace to="/login" />}></Route>
                                <Route exact path='/admin/advertise/edit/:id'element={<Navigate replace to="/login" />}></Route>
                                <Route exact path='/admin/gallery' element={<Navigate replace to="/login" />}></Route>
                                <Route exact path='/admin/gallery/edit/:id' element={<Navigate replace to="/login" />}></Route>
                                <Route path="/admin/" element={<Navigate replace to="/login" />} />
                            </Switch>
                    }
                </Router>
            </Fragment>
            // <Fragment>
            //     <Router>
            //         <Switch>
            //             {/* Incognito */}
            //             <Route exact path="/" element={<Home />}></Route>
            //             <Route exact path="/login" element={<Login />}></Route>
            //             <Route exact path="/about-us" element={<AboutUs />}></Route>
            //             <Route exact path="/gallery" element={<Gallery />}></Route>
            //             <Route exact path="/activities" element={<Activities />}></Route>
            //             <Route exact path="/profile" element={<Profile />}></Route>
            //             {/* <Route exact path="/register" element={<Register />}></Route> */}
            //             {/* END Incognito */}

            //             {/* ADMIN */}
            //             <Route exact path="/admin/dashboard" element={<Dashboard />}></Route>
            //             <Route exact path="/admin/settings" element={<Settings />}></Route>
            //             <Route exact path="/admin/tables" element={<Users />}></Route>
            //             <Route exact path="/admin/activity" element={<Activity/>}></Route>
            //             <Route exact path="/admin/profile" element={<ProfileAdmin/>}></Route>
                        // <Route exact path='/admin/advertise' element={<Advertise/>}></Route>
                        // <Route exact path='/admin/gallery' element={<GalleryAdmin/>}></Route>
            //             <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />
            //             {/* END ADMIN */}

            //             <Route path="*" element={<NotFound />} />
            //         </Switch>
            //     </Router>
            // </Fragment>
        )
    }
}

export default Routes;
