import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Event_detail.css';

const Event_detail = () => {

    const [detail, setDetail] = useState(null)

    const id = useParams().id
    console.log(id);

    let url = `https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records/${id}?lang=fr&timezone=UTC`;
    console.log(url);

    useEffect(()=>{
        axios.get(`https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records/${id}?lang=fr&timezone=UTC`)
        .then(resp => {
            setDetail(resp.data.record);
        });
    }, [])

    return (
        <div>
            {detail ? 
            <div className='Event_Detail'>

                <div className='Event_Detail_Info'>
                    <img src={detail.fields.image} alt="" />

                    <div className='Event_Detail_Info_div'>
                        <h1>{detail.fields.title}</h1>
                        <p>Date : <span>{detail.fields.date_start}</span> jusqu'au <span> {detail.fields.date_end} </span><span>pngcalendrier</span></p> 
                        <p>Lieu : {detail.fields.address}, {detail.fields.city}, {detail.fields.department}, {detail.fields.region}</p>

                        <button>Organiser une sortie</button>
                    </div>
                </div>

                <div className='Event_Detail_Describe'>
                    <h3>Description event</h3>
                    <p>{detail.fields.free_text}</p>
                </div>
            </div>
            :
            'Article inconnu'
            }
        </div>
    );
};

export default Event_detail;