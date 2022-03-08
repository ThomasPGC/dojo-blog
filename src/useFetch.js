import { useState, useEffect } from "react";




const useFetch = (url) => {
    const [data, setData] = useState(null);
const [isPending, setIspending] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            console.log(res)
            if(!res.ok) {
                throw Error('pas trouvé')
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIspending(false);
            setError(null);
        })
        .catch(err =>{  
            console.log(err.message);
            setIspending(false);
            setError(err.message);
        })
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;