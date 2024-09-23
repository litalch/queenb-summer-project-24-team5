import React, { useState } from 'react';
import './FilterMenu.css'; // Ensure this file exists
import FilterSection from './FilterSection';

const FilterMenu = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const categories = [
    'Jackets & Coats',
    'Dresses',
    'Jumpers',
    'Tops',
    'Jumpsuits',
    'ActiveWear',
    'Accessories',
    'Bags',
    'Trousers',
    'Jeans',
    'Skirts',
    'Shoes',
  ];
  
  const genders = ['Women', 'Men']
  const conditions = ['Brand New', 'Like New', 'Used - Excellent', 'Used - Good', 'Used - Fair'];
  const sizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
]
  const handleCheckboxChange = (type) => (e) => {
    const { value, checked } = e.target;
    const updateSelected = (prev) => 
      checked ? [...prev, value] : prev.filter((item) => item !== value);

    if (type === 'category') {
      setSelectedCategories(updateSelected(selectedCategories));
    } else if (type === 'gender') {
      setSelectedGender(updateSelected(selectedGender));
    } else if (type === 'condition') {
      setSelectedConditions(updateSelected(selectedConditions));
    }else if (type === 'sizes') {
      setSelectedSizes(updateSelected(selectedSizes));
    }
  };

  const handleApply = () => {
    onFilterChange({
      categories: selectedCategories,
      gender: selectedGender,
      conditions: selectedConditions,
      sizes: selectedSizes,
    });
  };

  return (
    <div className="filter-menu">
      <h3>Filter Options</h3>
     
      <FilterSection 
        title="Gender" 
        options={genders} 
        handleCheckboxChange={handleCheckboxChange('gender')} 
        selectedOptions={selectedGender} 
      />

      <FilterSection 
        title="Category" 
        options={categories} 
        handleCheckboxChange={handleCheckboxChange('category')} 
        selectedOptions={selectedCategories} 
      />

      <FilterSection 
        title="Condition" 
        options={conditions} 
        handleCheckboxChange={handleCheckboxChange('condition')} 
        selectedOptions={selectedConditions} 
      />
      <FilterSection 
        title="Sizes" 
        options={sizes} 
        handleCheckboxChange={handleCheckboxChange('sizes')} 
        selectedOptions={selectedSizes} 
      />
      <button className="apply-button" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default FilterMenu;
