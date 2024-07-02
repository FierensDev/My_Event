import axios from 'axios';
import React, {createContext, useState, useMemo, useEffect} from 'react';

export const EventsContext = createContext();

export default function EventsProvider(props){
    //nhits = nbr d'events
    let actualDate = new Date()
    actualDate = actualDate.toISOString().split('T')[0]

    // console.log(actualDate);
    //Api
    const [events, setEvents] = useState(0);
    const [filter, setFilter] = useState(null);
    //pagination
    const [nbEvents, setNbEvents] = useState(null);
    const [perPage, setPerPage] = useState(10);
    const [atPage, setAtPage] = useState(0);
    const [nbPage, setNbPage] = useState(null);
    //filtre 
    const [tags, setTags ] = useState(null)
    const [placename, setPlacename ] = useState(null)

    const [city , setCity ] = useState(null)
    const [region , setRegion ] = useState(null)
    const [department , setDepartment ] = useState(null)

    const [dateStart, setDateStart ] = useState(null)
    const [dateEnd, setDateEnd ] = useState(null)
    const [pricingInfo, setPricingInfo ] = useState(null)
    const [updatedAt, setUpdatedAt ] = useState(null)
    const [cityDisctrict, setCityDisctrict ] = useState(null)

/////////////////////////////////////////////////////

    useEffect(() => {
        axios.get(`https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?where=date_start >= date'${actualDate}'&order_by=date_start desc&limit=10&offset=${atPage}${tags ? '&refine=tags:' + tags : ''}${placename ? '&refine=placename:' + placename : ''}${region ? '&refine=region:' + region : ""}${city ? '&refine=city:' + city: ""}${department ? '&refine=department:' + department : ""}${dateStart ? '&refine=date_start:' + dateStart : ''}${dateEnd ? '&refine=date_end:' + dateEnd : ''}${updatedAt ? '&refine=updated_at:' + updatedAt : ''}${pricingInfo ? '&refine=pricing_info:' + pricingInfo : ''}${cityDisctrict ? '&refine=city_district:' + cityDisctrict : ''}&lang=fr&timezone=Europe%2FBerlin`)
        .then(resp => {
            setEvents(resp.data)
            setNbEvents(resp.data.nhits)
            setNbPage(Math.ceil(resp.data.total_count/perPage))
        });
    }, [atPage, tags, placename, city, region, department, dateStart, dateEnd, pricingInfo, updatedAt, cityDisctrict])


    useEffect(() => {
        axios.get(`https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/facets?where=date_start >= date'${actualDate}'${tags ? '&refine=tags:' + tags : ''}${placename ? '&refine=placename:' + placename : ''}${region ? '&refine=region:' + region : ""}${city ? '&refine=city:' + city: ""}${department ? '&refine=department:' + department : ""}${dateStart ? '&refine=date_start:' + dateStart : ''}${dateEnd ? '&refine=date_end:' + dateEnd : ''}${updatedAt ? '&refine=updated_at:' + updatedAt : ''}${pricingInfo ? '&refine=pricing_info:' + pricingInfo : ''}${cityDisctrict ? '&refine=city_district:' + cityDisctrict : ''}&lang=fr&timezone=Europe%2FBerlin`)
        .then(resp => {
            // console.log(resp.data.facets);
            setFilter(resp.data.facets);
            // console.log(resp.data.facets);
        });
    }, [filter, atPage, tags, placename, city, region, department, dateStart, dateEnd, pricingInfo, updatedAt, cityDisctrict])







    //ces fonctions ne sont modifier que via un useEffect, une fonction qui appelle la fonction
    function modifyEvents(value){
        setEvents(value);
    }

    function changeNbEvents(value){
        setNbEvents(value)
    }
    
    function changePerPage(value){
        setPerPage(value)
    }

    function changeAtPage(value){
        setAtPage(value)
    }

    function changeNbPage(value){
        setNbPage(value)
    }


    function changeTags(value){
        setTags(value)
    }

    function changePlacename(value){
        setPlacename(value)
    }

    function changeCity(value){
        setCity(value)
    }

    function changeRegion(value){
        setRegion(value)
    }

    function changeDepartment(value){
        setDepartment(value)
    }

    function changeFilter(value){
        setFilter(value)
    }

    function changeDateStart(value){
        setDateStart(value)
    }
    function changeDateEnd(value){
        setDateEnd(value)
    }
    function changePricingInfo(value){
        setPricingInfo(value)
    }
    function changeUpdatedAt(value){
        setUpdatedAt(value)
    }
    function changeCityDisctrict(value){
        setCityDisctrict(value)
    }


    ////////////////////////////////////////////////


    const value = useMemo(() =>{
        return{
            events,
            modifyEvents,

            nbEvents,
            changeNbEvents,

            perPage, 
            changePerPage,

            atPage, 
            changeAtPage,

            nbPage, 
            changeNbPage,

            tags,
            changeTags,

            placename,
            changePlacename,

            city,
            changeCity,

            region,
            changeRegion,

            department,
            changeDepartment,

            filter,
            changeFilter,

            dateStart,
            changeDateStart,

            dateEnd,
            changeDateEnd,

            pricingInfo,
            changePricingInfo,

            updatedAt,
            changeUpdatedAt,

            cityDisctrict,
            changeCityDisctrict
           
        }
    }, [events, filter])


    return(
        <EventsContext.Provider value={value}>
            {props.children}
        </EventsContext.Provider>
    );
};