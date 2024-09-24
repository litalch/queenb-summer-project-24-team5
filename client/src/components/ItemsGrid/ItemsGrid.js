import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ItemsGrid.module.css';
import FilterMenu from '../FilterMenu/FilterMenu';  
import { Link } from 'react-router-dom';
import SortingDropdown from '../SortingDropdown';


const ItemsGrid = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
  });

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      try {
        const response = await api.get('/items');
        const items = response.data.items || response.data;
        setData(Array.isArray(items) ? items : [items]);
        setFilteredData(items);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  const handleFilterChange = (filters) => {
    const { categories = [], gender = [], conditions = [], priceRange = [0, 500] ,sizes = []} = filters;
  
    const filteredData = data.filter((item) => {
      const categoryMatch = categories.length === 0 || categories.includes(item.category);
      const genderMatch = gender.length === 0 || gender.includes(item.gender);
      const conditionMatch = conditions.length === 0 || conditions.includes(item.condition);
      const sizeMatch = sizes.length === 0 || sizes.includes(item.size);

      const priceMatch = item.price >= priceRange[0] && item.price <= priceRange[1];

  
      return categoryMatch && genderMatch && conditionMatch && priceMatch && sizeMatch;
    });
  
    setFilteredData(filteredData);
  };

  const handleSortChange = (sortOption) => {
    console.log("Before sorting:", filteredData); 
    let sortedData = [...filteredData];
  
    if (sortOption === "lowToHigh") {
      sortedData.sort((a, b) => a.price - b.price); // Low to high price
    } else if (sortOption === "highToLow") {
      sortedData.sort((a, b) => b.price - a.price); // High to low price
    } else if (sortOption === "newToOld") {
      sortedData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); // New to old
    } else if (sortOption === "oldToNew") {
      sortedData.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)); // Old to new
    }
    console.log("After sorting:", sortedData);
    setFilteredData(sortedData); // Set the sorted data
  };
  

  
  return (
    <div className={styles.itemsContainer}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <SortingDropdown onSortChange={handleSortChange} />
    </div>
    <div>
    <FilterMenu onFilterChange={handleFilterChange} />
    {loading && <div className= {styles.loading}>Loading...</div>}
    {filteredData.length > 0 ? (
      <div className={styles.items}>
          {filteredData.map((item) => (
            <div className={styles.cardContainer} key={item.id}>
              <Link to={`/item/${item.id}`} key={item.id}> 
                <img src={item.imageUrl} className={styles.cardImg} alt={item.name} key={item.img} />
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle} key={item.name}>{item.name}</h5>
                  <p className={styles.cardText} key={item.price}>{item.price}$</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : !loading && (
        <div className= {styles.noItems}>No items available</div>
      )}
    </div>
    </div>
  );
  
};

export default ItemsGrid;