import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoAPIoptions } from '../../api'

const Search = ({onSearchChange}) => {


  const [search, setsearch]=useState(null) 

  const loadCities = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoAPIoptions
      );
      const data = await response.json();
      return {
        options: data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (searchData) =>{
    setsearch(searchData);
    onSearchChange(searchData);
  }
  return (
    <div className="">
        <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadCities}
        className='min-w-[500px] max-w-[800px'
        />
    </div>
  )
}

export default Search