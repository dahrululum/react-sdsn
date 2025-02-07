 
 import { SdsnService } from '../services/SdsnService';
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate"
import axios from "axios";
function ContentComponent() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    const API_URL = "https://dna.web.bps.go.id/api/sdsn/list?length=10&page=1";
    const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmFjMGFiYzhkMTRmMzU4Y2NkODg5ZjViOGQxOWYwMWQxZDhlZjk5OWNjYTYwYTc1MDA0NGQ0NWNkNzVjYjgxNzljOTY3YzcxMzMzYTI0YmIiLCJpYXQiOjE3MzgyNTg5NjQuOTA5MzE5LCJuYmYiOjE3MzgyNTg5NjQuOTA5MzI1LCJleHAiOjE3Njk3OTQ5NjQuNDE5MDM5LCJzdWIiOiI0NSIsInNjb3BlcyI6W119.wd_inGojUci0uBAfWmWzdzsLLniSPrxaPO-1ZiIEXo2PXdMVpOJ9PsapHapfKv_dmimeywAjNqystQPmGU_l_SbbASxG5AGnMDQyUwpiPEwP7xc2oxLwLQdstpcyiBly-DaMwEFG0hr1U3m3tLgGCR9WAm1G5e3JdO0plTXG1dv8MbxTv0pugf5rGyQVFvXbBa4cKJSky2VHKsOxZ2NjMJthD_0DjOUFIj_PT9eceb609pL4iWQZz1-Gc3Tvs3fgyi5dUAuLjFAhTUDF_p_9hdcbUmiLjTLEI-FhvfirzB4syoi4s41zEqvDoqWoS_6-8LuzqIc2snxbWKP_EXntOQ";


    useEffect(() => {
       
        const getData = async () => {
            
            try {
                const res = await fetch(API_URL, {
                  method: "GET",
                  mode: "cors",
                  cache: "no-cache",
                    headers: {
                        'access-control-allow-origin': '*',
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        Authorization: `Bearer ${TOKEN}`,
                        
                    },
                });
               if(res.status !== 200) throw new Error(`HTTP error! Status: ${res.status}`);

                const data = await res.json();
                
                console.log(data);
                //setItems(res.data.result.data);
            } catch (err) {
                console.log(err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
        setIsLoading(false);
       
    }, []);
       
  
      
    const handlePageClick = async (data) => {
      setIsLoading(true);
      console.log(data.selected);
      let currentPage = data.selected + 1;
      const dataFromApi = await fetchData(currentPage);
      //console.log(dataFromApi);
      setItems(dataFromApi);
      setIsLoading(false);
    }
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <div className="container"> 
        <div className=' mt-5'>
      <div className='row'>
        <div className='col'>
         <div className='card'>
           <div className='card-header'>Daftar SDSN</div>
           <div className='card-body'>
              <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>kodeSds</th>
                    <th>namaData</th>
                    <th>Konsep</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((list,index) => (
                    <tr key={index}>
                        <td>{list.id}</td>
                        <td>{list.kodeSds}</td>
                        <td>{list.namaData}</td>
                        <td>{list.konsep}</td>
                    </tr> 
                    ))}
                </tbody>
              </table>
           </div>
         </div>
          
        </div>
      </div>
    </div>
        <ReactPaginate
          previousLabel={"<"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLabel={">"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          breakLinkClassName={"page-link"}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
           
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          onPageChange={handlePageClick}
          disabledClassName={"disabled"}
          containerClassName={"pagination justify-content-center mt-3"}
        />
    </div>
  )
}

export default ContentComponent