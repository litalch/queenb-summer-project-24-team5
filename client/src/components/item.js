import React, {useState, useEffect} from 'react'

export default function item() {
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getItems = async () => {
            setLoading(true)
            const response = await fetch("http://localhost:5000/api/items/")
            if (componentMounted) {
                setData(await response.clone().jason())
                setLoading(false)
            }

            return () => {
                componentMounted = false
            }
        }
        getItems()
    }, [])

    return (
    <div>
      
    </div>
  )
}
