import React, { useContext, useEffect, useState } from 'react';
import { EventsContext } from '../../context/Events';
import './Menu.css';
const Menu = () => {
   
    //Filtres
    const {events,modifyEvents,nbEvents,changeNbEvents,perPage, changePerPage,atPage, changeAtPage,nbPage, changeNbPage, tags, changeTags, city, changeCity, region, changeRegion, department, changeDepartment, filter, changeFilter,             placename, changePlacename, dateStart, changeDateStart, dateEnd, changeDateEnd, pricingInfo, changePricingInfo, updatedAt, changeUpdatedAt, cityDisctrict, changeCityDisctrict} = useContext(EventsContext)

    function handleSelect(e) {
        if(e.target.id == "tags"){
            if(e.target.value == e.target.id){
                changeTags(null)
            }
            else{
                changeTags(e.target.value)
            }
        }

        if(e.target.id == "placename"){
            if(e.target.value == e.target.id){
                // console.log('ok?');
                changePlacename(null)
            }
            else{
                // console.log('oui');
                changePlacename(e.target.value)
            }
        }

        if(e.target.id == "department"){
            if(e.target.value == e.target.id){
                changeDepartment(null)
            }
            else{
                changeDepartment(e.target.value)
            }
        }

        if(e.target.id == "region"){
            if(e.target.value == e.target.id){
                changeRegion(null)
            }
            else{
                changeRegion(e.target.value)
            }
        }

        if(e.target.id == "city"){
            if(e.target.value == e.target.id){
                changeCity(null)
            }
            else{
                changeCity(e.target.value)
            }
        }

        if(e.target.id == "date_start"){
            if(e.target.value == e.target.id){
                changeDateStart(null)
            }
            else{
                changeDateStart(e.target.value)
            }
        }

        if(e.target.id == "date_end"){
            if(e.target.value == e.target.id){
                changeDateEnd(null)
            }
            else{
                changeDateEnd(e.target.value)
            }
        }

        if(e.target.id == "pricing_info"){
            if(e.target.value == e.target.id){
                changePricingInfo(null)
            }
            else{
                changePricingInfo(e.target.value)
            }
        }

        if(e.target.id == "updated_at"){
            if(e.target.value == e.target.id){
                changeUpdatedAt(null)
            }
            else{
                changeUpdatedAt(e.target.value)
            }
        }

        if(e.target.id == "city_district"){
            if(e.target.value == e.target.id){
                changeCityDisctrict(null)
            }
            else{
                changeCityDisctrict(e.target.value)
            }
        }
    };

    function resetFilter(e){
        e.preventDefault();
        // e.target.selectedIndex = -1;
        
        document.querySelector('#tags').selectedIndex = 0;
        document.querySelector('#placename').selectedIndex = 0;
        document.querySelector('#department').selectedIndex = 0;
        document.querySelector('#region').selectedIndex = 0;
        document.querySelector('#city').selectedIndex = 0;
        document.querySelector('#date_start').selectedIndex = 0;
        document.querySelector('#date_end').selectedIndex = 0;
        document.querySelector('#pricing_info').selectedIndex = 0;
        document.querySelector('#updated_at').selectedIndex = 0;
        document.querySelector('#city_district').selectedIndex = 0;

        changeTags(null)
        changePlacename(null)
        changeDepartment(null)
        changeRegion(null)
        changeCity(null)
        changeDateStart(null)
        changeDateEnd(null)
        changePricingInfo(null)
        changeUpdatedAt(null)
        changeCityDisctrict(null)
    }
    
    return (
        <div className='Menu'>
            {/* <button onClick={MAKESOMETEST}>NBPAGE</button> */}
                <form className='Menu_SearchBar'>
                <h1>Filtres</h1>
                    
                    <label>
                    Choisissez une catégories :
                    </label>

                    <select>
                        {/* si type exist, map */}
                        <option value="grapefruit">Pamplemousse</option>
                    </select>
                    

                    <label htmlFor="">
                        Lieu :
                    </label>
                    <div className='Adress'>
                        <input 
                            type="text"
                            name='city'
                            id='City'
                            placeholder='ville'
                            className='Menu_SearchBar_Input'
                            onKeyDown={(e) => {changeCity(e.target.value)}}
                        />

                        <input 
                            type="text"
                            name='region'
                            id='Region'
                            placeholder='region'
                            className='Menu_SearchBar_Input'
                            onKeyDown={(e) => {changeRegion(e.target.value)}}
                        />

                        <input 
                            type="text"
                            name='department'
                            id='Department'
                            placeholder='departement'
                            className='Menu_SearchBar_Input'
                            onKeyDown={(e) => {changeDepartment(e.target.value)}}
                        />

                        <div className='Adress_List'>
                            <p>Paris</p>
                            <p>Bordeaux</p>
                        </div>
                    </div>
                    
                    {filter ? 
                    <div className='Filter_list'>
                        <h1>NEW FILTER</h1>
                        {filter.map((tab, index) =>  
                        <div className='filtermap'>        
                            <select key={tab.name} id={tab.name} onChange={handleSelect}>
                                <option value={tab.name}>{tab.name}</option>
                            
                            {tab.facets.map((k,index)=> 
                                <option key={index} value={k.name} onChange>{k.name}</option>
                            )}
                            </select>


                        </div>
                        )}
                        <button className='buttonReset' onClick={resetFilter}>RESET FILTRE</button>
                        
                        
                    </div> 
                    
                    :
                    "rien"}


                </form>
        </div>
    );
};

export default Menu;