import React from 'react';
import FilterLabel from "./FilterLabel";

const TripFilters = ({filter, setFilter}: { filter:{ query: string, sortByLevel: string, sortByDuration: string }, setFilter: Function}) => {


   return (
       <form className = "trips-filter__form" autoComplete = "off">
          <label className = "trips-filter__search input">
             <span className = "visually-hidden">Search by name</span>
             <input name = "search" type = "search" placeholder = "search by title"
                    onChange = {(e) => setFilter({...filter, query: e.target.value})} value={filter.query}/>
          </label>

          <FilterLabel onChange = {(selectedSort: string) => setFilter({...filter, sortByDuration: selectedSort})} selectName = "duration" options = {[
             {value: '', name: 'duration'},
             {value: '0_x_5', name: '< 5 days'},
             {value: '5_x_10', name: '< 10 days'},
             {value: '10_x', name: '> 10 days'},]} searchBy = 'duration'/>

          <FilterLabel onChange = {(selectedSort: string) => setFilter({...filter, sortByLevel: selectedSort})} searchBy = {'level'} selectName = {'level'} options = {[
             {value: '', name: 'level'},
             {value: 'easy', name: 'easy'},
             {value: 'moderate', name: 'moderate'},
             {value: 'difficult', name: 'difficult'},
          ]}/>
       </form>
   );
};

export default TripFilters;
