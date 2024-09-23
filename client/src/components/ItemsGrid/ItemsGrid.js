import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ItemsGrid.module.css';
import FilterMenu from '../FilterMenu/FilterMenu';  
import { Link } from 'react-router-dom';


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
    const { categories = [], gender = [], conditions = [] } = filters;
  
    const filteredData = data.filter((item) => {
      const categoryMatch = categories.length === 0 || categories.includes(item.category);
      const genderMatch = gender.length === 0 || gender.includes(item.gender);
      const conditionMatch = conditions.length === 0 || conditions.includes(item.condition);
  
      return categoryMatch && genderMatch && conditionMatch;
    });
  
    setFilteredData(filteredData);
  };
  
  return (
    <div className="container">
      {loading && <div class= {styles.loading}>Loading...</div>}
      {filteredData.length > 0 ? (
        <div className="items">
          <FilterMenu onFilterChange={handleFilterChange} />
          {filteredData.map((item) => (
            <div className={styles.cardContainer} key={item.id}>
              <Link to={`/item/${item.id}`} className={styles.card}> 
                <img src={item.imageUrl} className={styles.cardImg} alt={item.name} />
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{item.name}</h5>
                  <p className={styles.cardText}>{item.price}$</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : !loading && (
        <div class= {styles.noItems}>No items available</div>
      )}
    </div>
  );
  
};

export default ItemsGrid;
