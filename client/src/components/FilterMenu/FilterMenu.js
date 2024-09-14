import React, { useState } from 'react';
import './FilterMenu.css';

const FilterMenu = () => {
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleApplyFilters = () => {
    console.log('Filters applied:', { gender, category });
  };

  return (
    <div className="filter-menu">
      <h3>Filter Options</h3>
      
      <div className="filter-option">
        <h4>Gender</h4>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="filter-option">
        <h4>Category</h4>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          {/* Add more categories as needed */}
        </select>
        <div>
        <button className="apply-button">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
