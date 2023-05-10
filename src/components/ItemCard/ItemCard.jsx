import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ItemCard.css'

const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-10'>
<Row xs={12} md={12} className="g-12">
  <Col>
    <Card>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text> <p>Categoria {item.categoria}</p>
        </Card.Text><p><strong>Precio: ${item.precio}</strong></p>
      </Card.Body>
      <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
    </Card>
  </Col>

</Row>
</div>           
    )
}

export default ItemCard
