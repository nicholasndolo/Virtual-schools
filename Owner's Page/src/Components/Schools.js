import Card from 'react-bootstrap/Card';
import '../App.css'



function TextExample() {

  return (
    
    <div className='Schools'>
    <Card style={{ width: '18rem',height: '15rem',margin: '15px',backgroundColor:'grey'}}>
      <Card.Body>
        <Card.Title>Schools</Card.Title>
        
        <Card.Link href="create">Create </Card.Link>
        <Card.Link href="#">Update</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TextExample;

