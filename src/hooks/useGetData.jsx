import { useEffect, useState } from "react";

export const useGetData = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        /*aplicando promesa para obtener el fetch*/
        
        fetch(url)
        .then(request => request.json())
        .then(response => setData(response))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[]);

    return {
        data,
        loading
    };
}
         /* aplicado Async / await*/
/*     const getData = async () => {
        try {
            const request = await window.fetch('https://dummyjson.com/users')
            const response = await request.json()
            setUsers(response.users)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
            console.log('ok')
        }
    }
    getData() */