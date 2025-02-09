import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const API_URL = "http://localhost:5174/api/api";
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmFjMGFiYzhkMTRmMzU4Y2NkODg5ZjViOGQxOWYwMWQxZDhlZjk5OWNjYTYwYTc1MDA0NGQ0NWNkNzVjYjgxNzljOTY3YzcxMzMzYTI0YmIiLCJpYXQiOjE3MzgyNTg5NjQuOTA5MzE5LCJuYmYiOjE3MzgyNTg5NjQuOTA5MzI1LCJleHAiOjE3Njk3OTQ5NjQuNDE5MDM5LCJzdWIiOiI0NSIsInNjb3BlcyI6W119.wd_inGojUci0uBAfWmWzdzsLLniSPrxaPO-1ZiIEXo2PXdMVpOJ9PsapHapfKv_dmimeywAjNqystQPmGU_l_SbbASxG5AGnMDQyUwpiPEwP7xc2oxLwLQdstpcyiBly-DaMwEFG0hr1U3m3tLgGCR9WAm1G5e3JdO0plTXG1dv8MbxTv0pugf5rGyQVFvXbBa4cKJSky2VHKsOxZ2NjMJthD_0DjOUFIj_PT9eceb609pL4iWQZz1-Gc3Tvs3fgyi5dUAuLjFAhTUDF_p_9hdcbUmiLjTLEI-FhvfirzB4syoi4s41zEqvDoqWoS_6-8LuzqIc2snxbWKP_EXntOQ";

//spesific config axios
const authAxios = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

const ExampleApiComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = useCallback(async () => {
//       try {
//         const response = await fetch(API_URL, {
//           method: "GET",
//           headers: {
//             "Authorization": `Bearer ${TOKEN}`,
//             "Content-Type": "application/json"
            
//           }
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     });



//     fetchData();
     
//   }, []);
 
const fetchData = useCallback(async () => {
  try {
    const response = await authAxios.get(`/sdsn/list`);

   

    
    setData(response.data.result.data);
    console.log(response);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
})

useEffect(() => {
  fetchData();
  console.log(data);
},[]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExampleApiComponent;