import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../api/itemApi'; // Ensure this path is correct
import './FilterMenu.css'; // Ensure this file exists and is correctly named

const FilterMenu = () => {
  const [categories, setCategories] = useState([]);
  const [gender, setGender] = useState('');


  useEffect(() => {
    fetchCategories()
      .then(response => {
        setCategories(response.data); // Ensure the response structure matches
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

    const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


  return (
    <div className="filter-menu">
      <h3>Filter Options</h3>
      <div>
        <h4>Gender</h4>
          <select value={gender} onChange={handleGenderChange}>
           <option value="">Select Gender</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
         </select>
        <h4>Category</h4>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <button className="apply-button">Apply Filters</button>
    </div>
  );
};

export default FilterMenu;
