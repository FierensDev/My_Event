import React from 'react';
import Event_list from '../../components/Event_list/Event_list';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './Home.css';
const Home = () => {
    return (
        <div className='Home'>
            
           

            <div className='Home_List'>
                <Menu />
                <Event_list />
            </div>
        </div>
    );
};

export default Home;