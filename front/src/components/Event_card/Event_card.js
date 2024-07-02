import React from 'react';
import { Link } from 'react-router-dom';
import './Event_card.css';

const Event_card = (tab) => {
// console.log(tab.tab.record.id);
    return (
        <div className='Event_Card'>

            <img src={tab.tab.record.fields.image} alt="" width="150px" height="150px"/>

            <div className='Event_Card_Content'>
                <h2>{tab.tab.record.fields.title}</h2>

                <div className='Event_Card_Content_text'>
                    <p> {tab.tab.record.fields.free_text} </p>
                    <div className='boxshadow'></div>
                </div>

                <span>Du: {tab.tab.record.fields.date_start} jusqu'au {tab.tab.record.fields.date_end} |  Région : {tab.tab.record.fields.region} |  Ville  : {tab.tab.record.fields.city}</span>
            
            </div>
            <Link to={`/event/${tab.tab.record.id}`} className="link_button">En savoir +</Link>

        </div>
    );
};

export default Event_card;