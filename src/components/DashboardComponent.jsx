 
import { getProducts, getComments } from '../services/ProductService'
import { SdsnService } from '../services/SdsnService';
import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

function DashboardComponent() {
  
  const [records, setRecords] = useState([])
  const [sdsn, setSdsn] = useState([])
  const [isLoading, setIsLoading] = useState(true)

   

  // useEffect(() => {
  //   SdsnService((data) => {
  //     setSdsn(data);
  //     setIsLoading(false);
  //    // console.log(data);
  //   });
  // },[])
  
  useEffect(() => {
    getComments((data) => {
      setRecords(data);
      setIsLoading(false);
    });
  },[])
   
  const handlePageClick =  (data) => {
    console.log(data.selected);
  }
  if(isLoading){
    return (
      <div className='container mt-5'>Loading....</div>  )
  }
  return (
    <>
    {/* <Container fluid style={{padding:"10px"}}>
      <Row>
        <Col>
           
          <Card>
            <Card.Header>Daftar </Card.Header>
            <Card.Body>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((list,index) => (
                    <tr key={index}>
                        <td>{list.title}</td>
                        <td>{list.price}</td>
                        <td>{list.category}</td>
                    </tr> 
                    ))}
                </tbody>
                </Table>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container> */}
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <table className='table table-striped bordered hover table-sm'>
          <thead>
              <tr>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>body</th>
              
              </tr>
          </thead>
          <tbody>
              {records.map((list,index) => (
              <tr key={index}>
                  <td>{list.id}</td>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.body}</td>
              </tr> 
              ))}
          </tbody>
          </table>
        </div>
      </div>
    </div>
    <ReactPaginate 
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination justify-content-center"}
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
    {/* <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
         <div className='card'>
           <div className='card-header'>Daftar SDSN</div>
           <div className='card-body'>
              <table className='table table-striped'>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {sdsn.map((list,index) => (
                    <tr key={index}>
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
    </div> */}
        

      
    </>
  )
}

export default DashboardComponent
