import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllProduct = () => {
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //Loading

    useEffect(() => {
    const fetchData =  async () => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products')
        console.log(res.data)
        setData(res.data)

      } catch (error) {
        console.log('Error: ', error)

      }finally{
        setIsLoading(false) //Loading page
      }
    }
    fetchData()
  },[]);

    return {
        data,
        isLoading
    }
}
export default useGetAllProduct