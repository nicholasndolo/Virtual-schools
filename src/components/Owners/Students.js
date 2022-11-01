import Card from 'react-bootstrap/Card';
import './src/Owner.css'
function TextExample() {

  return (
    
    <div className='Students'>
    <Card style={{ width: '18rem',height: '15rem',margin: '15px',backgroundColor:'grey'}}>
      <Card.Body>
        <Card.Title>Students</Card.Title>
        
        <Card.Link href="create">Create </Card.Link>
        <Card.Link href="update">Update</Card.Link>
        <Card.Link href="Delete">Delete</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TextExample;