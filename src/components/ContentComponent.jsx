 
 import { SdsnService } from '../services/SdsnService';
import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate"
import axios from "axios";
 
function ContentComponent() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const [batas, setBatas] = useState(10);

    const API_URL = "http://localhost:5173/api/api";
    const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmFjMGFiYzhkMTRmMzU4Y2NkODg5ZjViOGQxOWYwMWQxZDhlZjk5OWNjYTYwYTc1MDA0NGQ0NWNkNzVjYjgxNzljOTY3YzcxMzMzYTI0YmIiLCJpYXQiOjE3MzgyNTg5NjQuOTA5MzE5LCJuYmYiOjE3MzgyNTg5NjQuOTA5MzI1LCJleHAiOjE3Njk3OTQ5NjQuNDE5MDM5LCJzdWIiOiI0NSIsInNjb3BlcyI6W119.wd_inGojUci0uBAfWmWzdzsLLniSPrxaPO-1ZiIEXo2PXdMVpOJ9PsapHapfKv_dmimeywAjNqystQPmGU_l_SbbASxG5AGnMDQyUwpiPEwP7xc2oxLwLQdstpcyiBly-DaMwEFG0hr1U3m3tLgGCR9WAm1G5e3JdO0plTXG1dv8MbxTv0pugf5rGyQVFvXbBa4cKJSky2VHKsOxZ2NjMJthD_0DjOUFIj_PT9eceb609pL4iWQZz1-Gc3Tvs3fgyi5dUAuLjFAhTUDF_p_9hdcbUmiLjTLEI-FhvfirzB4syoi4s41zEqvDoqWoS_6-8LuzqIc2snxbWKP_EXntOQ";

     
    axios.interceptors.request.use(
      config => {
        config.headers.Authorization = `Bearer ${TOKEN}`;
        return config;
      },error => {
        return Promise.reject(error);
      }
    );

    const authAxios = axios.create({
      baseURL: API_URL,
      headers: {
       Authorization: `Bearer ${TOKEN}`,
      },
    });

    const fetchData = useCallback ( async () => {
        try {
          const res = await authAxios.get(`/sdsn/list`);
          const total = res.data.result.total;
          setPageCount(Math.ceil(total / 10));
          const links = res.data.result.links;
          const limitna = res.data.result.per_page;
          setBatas(limitna);
          //console.log(limitna);
          //console.log(Math.ceil(total / 10));
          setCurrentPage(1);
          setItems(res.data.result.data);
          return res.data.result.data;
        } catch (err) {
          console.log(err);
          setError(err);
        } finally {
          setIsLoading(false);
        }
      })
    let limit=10;
    
    const fetchDataPaginate = async (currentPage) => {
      try {
        const res = await authAxios.get(`/sdsn/list?length=${batas}&page=${currentPage}`);
        setItems(res.data.result.data);
        const limitna = res.data.result.per_page;
        setBatas(limitna);
        setCurrentPage(currentPage);
        return res.data.result.data;
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
       
      }

    useEffect(() => {
         
        fetchData();
        setIsLoading(false);
       
    }, []);
       
  
      
    const handlePageClick = async (page) => {
      console.log(page.selected);
      // setIsLoading(true);
      // console.log(page.selected);
      let currentPage = page.selected + 1;
      const dataFromApi = await fetchDataPaginate(currentPage);
      console.log(dataFromApi);
       setItems(dataFromApi);
      // setIsLoading(false);
    }
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
    <div className="container"> 
      <div className='mt-2'>
        <div className='row '>
          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-header">
              <div className="row p-1 justify-content-between">
                <div className="col-2 ">
                  <input type="text" placeholder='Cari...' />
                </div>
                <div className="col-2 ">
                  <input type="text" placeholder='Kode SDS' />
                </div>
                <div className="col-2 ">
                    <input type="text" placeholder='Nama Data' />
                </div>
                <div className="col-2">
                    <input type="text" placeholder='Konsep' />
                </div>
                <div className="col-2 ">Jumlah Record : </div>
                
                

                
              </div>
              </div>
            </div>
          </div>
          <div className='col'>
          <div className='card'>
            <div className='card-header'>Daftar <b>SDSN</b> </div>
            <div className='card-body'>
                <table className='table table-striped table-bordered table-xs'>
                  <thead>
                      <tr>
                      <th>No</th>
                      <th>Kode Sds</th>
                      <th>Konsep</th>
                      <th>Definisi</th>
                      </tr>
                  </thead>
                  <tbody>
                      {items.map((list,index) => (
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{list.kodeSds}</td>
                          <td>{list.konsep}</td>
                          <td>{list.definisi}</td>
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
           nextLabel={">"}
           breakLabel={"..."}
           pageCount={pageCount}
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={handlePageClick}
           containerClassName={"pagination justify-content-center mt-2"}
           pageClassName={"page-item"}
           pageLinkClassName={"page-link"}
           previousClassName={"page-item"}
           previousLinkClassName={"page-link"}
           nextClassName={"page-item"}
           nextLinkClassName={"page-link"}
           breakClassName={"page-item"}
           breakLinkClassName={"page-link"}
           activeClassName={"active"}
        />
    </div>
  )
}

export default ContentComponent