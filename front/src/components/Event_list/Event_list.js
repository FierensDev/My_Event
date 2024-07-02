import React, { useContext, useEffect, useState } from 'react';
import crudRead from '../../helpers/Read';
import Event_card from '../Event_card/Event_card';
import './Event_list.css';
import axios from 'axios';
import { EventsContext } from '../../context/Events';

const Event_list = () => {

    const {events,modifyEvents,nbEvents,changeNbEvents,perPage, changePerPage,atPage, changeAtPage,nbPage, changeNbPage, tags, changeTags, city, changeCity, region, changeRegion, department, changeDepartment} = useContext(EventsContext)
    const page=[];

    for (let i = 0; i<nbPage; i++){
        page.push(i);
    }
    
    const handlePage = (e) => {
        console.log(atPage);
        console.log(e.currentTarget.value + 0);
        changeAtPage(e.currentTarget.value + 0)
    }

    const handlePlace = (e) => {
        // console.log(e.currentTarget.value)
        console.log(events.records);
    }

    return (
        <div className='Event_List'>
            <h1>EVENTS PROCHE DE PARIS</h1>
            {/* <button onClick={handlePlace}>TEST</button> */}

            {events ?
                <div>

                {events.records.map((tab, index) =>
                    <Event_card key={index} tab={tab}/>
                )} 

                {nbPage ?
                    <div className='Pagination'> 
                        {page.map((tab, index) => {
                            if(tab == 2){
                                return <button key={index} value={tab} onClick={handlePage}>{tab}</button>;
                            }
                            return <button key={index} value={tab} onClick={handlePage}> {tab}</button>;
                        })}
                    </div>
                :
                "0"
                }
                </div>
                :
                "pas d'events"
            }

            <button onClick={() => {
                console.log(nbEvents)
                console.log(nbPage);
                console.log(page);
            }}></button>
            
        </div>
    );
};

export default Event_list;