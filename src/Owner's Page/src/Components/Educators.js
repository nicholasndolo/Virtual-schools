/*import Card from 'react-bootstrap/Card';
import '../App.css'
function TextExample() {

  return (
    
    <div className='Educators'>
    <Card style={{ width: '18rem',height: '15rem',margin: '15px',backgroundColor:'grey'}}>
      <Card.Body>
        <Card.Title>Educators</Card.Title>
        
        <Card.Link href="create">Create </Card.Link>
        <Card.Link href="update">Update</Card.Link>
        <Card.Link href="delete">Delete</Card.Link>
      </Card.Body>
    </Card>

    </div>
  );
}

export default TextExample;
*/
import Card from 'react-bootstrap/Card';
import '../App.css'
function Educator() {
  return (
    <Card style={{ width: '18rem', margin:'25px 25px'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" />
      <Card.Body>
        <Card.Title>Educator</Card.Title>
        <Card.Link  href="/create/educator" variant="primary">Create</Card.Link>
        <Card.Link href="/update/educator" variant="primary" >Update</Card.Link>
        <Card.Link href="/delete/educator" variant="primary" >Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Educator;