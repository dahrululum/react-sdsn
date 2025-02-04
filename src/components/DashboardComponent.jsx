 
import { getProducts } from '../services/ProductService'
import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Table from 'react-bootstrap/Table';

function DashboardComponent() {
    const [records, setRecords] = useState([])
  useEffect(() => {
    getProducts((data) => {
      setRecords(data);
    });
  },[])

  return (
    <>
    <Container fluid style={{padding:"10px"}}>
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
    </Container>
     
        
        

      
    </>
  )
}

export default DashboardComponent
