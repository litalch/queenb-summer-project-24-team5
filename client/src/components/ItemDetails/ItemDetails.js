import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ItemDetails.module.css';
import api from '../../services/api';
import FirstButton from '../common/FirstButton/FirstButton';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Item ID:", id); // לוג ID

    const fetchItem = async () => {
      try {
        const response = await api.get(`/items/${id}`);
        console.log("API Response:", response); // לוג התגובה מה-API

        if (response.status === 200) {
          setItem(response.data); // עדכן את ה-state של item
          console.log("Fetched Item Data:", response.data); // לוג נתונים כאן
        } else {
          console.error('Item not found');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  // לוג של המידע שמתקבל
  useEffect(() => {
    console.log("Current Item State:", item); // לוג ה-state הנוכחי של item
  }, [item]);

  return (
    <div className={styles.itemDetailContainer}>
      {loading && <div className={styles.loading}>Loading...</div>}
      {!item && !loading && <div className={styles.noItem}>Item doesn't exist</div>}
      {!loading && item && (
        <div className={styles.item}>
          {item.imageUrl && (
            <img src={item.imageUrl} alt={item.name || "Item Image"} className={styles.itemImg} />
          )}
          <div className={styles.itemDet}>
            <h2 className={styles.itemName}>{item.name}</h2>
            <p className={styles.itemGender}>{item.gender}</p> 
            <p className={styles.itemPrice}>{`${item.price}$`}</p>
            <p className={styles.itemSize}>Size: ${item.size}</p>
            <p className={styles.itemCondition}>{item.condition}</p> 
            <p className={styles.itemDescription}>
              {item.description || "No description available"}
            </p>
            <FirstButton>Contact Seller</FirstButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
