import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './modules/Dashboard';
import Logout from './modules/Logout';
import Posts from './modules/Posts';
import Schedules from './modules/Schedules';
import Settings from './modules/Settings';
import Audience from './modules/Audience';
import User from './modules/User';
import Subscriber from './modules/Subscriber';

const Routess = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="" element={<Layout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="Logout" element={<Logout />} />
                        <Route path="posts" element={<Posts />} />
                        <Route path="schedules" element={<Schedules />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="audience" element={<Audience />} />
                        <Route path="user" element={<User />} />
                        <Route path="subscriber" element={<Subscriber />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default Routess