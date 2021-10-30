import React from 'react';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Guide from './Guide/Guide';
import './Home.css';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Blogs />
            <Guide/>
        </div>
    );
};

export default Home;