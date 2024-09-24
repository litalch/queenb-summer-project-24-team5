import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ItemDetails.module.css'
import api from '../../services/api';



function ItemDetails() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Item ID:", id);
    const fetchItem = async () => {
        try {
          const response = await api.get(`/items/${id}`)
          setItem(response.data)
          console.log("res:", response.data)
          console.log("Item:", item)
        } catch (error) {
          console.error('Error fetching item:', error)
        } finally {
          setLoading(false)
        }
    };
    
    fetchItem()
  }, [id])

  return (
    <div className={styles.itemDetailContainer}>
      {loading && <div className= {styles.loading}>Loading...</div>}
      {!item && <div className= {styles.noItem}>Item doesn't exist</div>}
      {item && (
        <div className={styles.item}>
          <img src={item.imageUrl} alt={item.name} className={styles.itemImg} />
          <h2 className={styles.itemName}>{item.name}</h2>
          <p className={styles.itemPrice}>{item.price}$</p>
          <p className={styles.itemDescription}>{item.description}</p> 
        </div> 
      )};
    </div>
  )
}

export default ItemDetails;
