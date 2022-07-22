import React from 'react';

const FilterSelect = ({selectName, options, onChange}: { selectName: string, options: FilterSelectProps[], onChange: Function }) => {
   return (
       <select name = {selectName} onChange = {event => onChange(event.target.value)}>
          {options.map((option: { value: string, name: string }) => (
              <option key = {option.value} value = {option.value}>{option.name}</option>))}
       </select>
   );
};

export default FilterSelect;

export interface FilterSelectProps {
   value: string,
   name: string
}
