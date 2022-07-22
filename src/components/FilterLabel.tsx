import React from 'react';
import FilterSelect, {FilterSelectProps} from "./FilterSelect";

const FilterLabel = ({
                        searchBy,
                        selectName,
                        options,
                        onChange
                     }: { searchBy: string, selectName: string, options: FilterSelectProps[], onChange: Function }) => {
   return (
       <label className = "select">
          <span className = "visually-hidden">Search by {searchBy}</span>
          <FilterSelect onChange = {onChange} selectName = {selectName} options = {options}/>
       </label>
   );
};

export default FilterLabel;
