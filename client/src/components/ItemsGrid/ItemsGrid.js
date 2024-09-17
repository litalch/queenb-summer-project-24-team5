import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemsGrid.module.css'; 

const ItemsGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      try {
        const response = await api.get('/items/women');
        console.log(response.data); 

        const items = response.data.items || response.data;

        if (!Array.isArray(items)) {
          setData([items]);
        } else {
          setData(items);
        }
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  return (
    <div className="container">
      {loading && <div>Loading...</div>}
      {data && data.length > 0 ? (
        <div className="justify-content-center">
          {data.map((item) => (
            <div className="card-container" key={item.id}>
              <div className="card">
                <img src={item.imageUrl} className="card-img" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}$</p>
                  <a href={`/item/${item.id}`} className="btn btn-outline-dark">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No items available</div>
      )}
    </div>
  );
};

export default ItemsGrid;
