import Card from 'react-bootstrap/Card';
import './src/Owner.css'



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
*/
import Card from 'react-bootstrap/Card';
import '../App.css'
function School() {
  return (
    <Card style={{ width: '21rem', margin:'25px 25px'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" />
      <Card.Body>
        <Card.Title>School</Card.Title>
        <Card.Link  href="/create/school">Create</Card.Link>
        <Card.Link href="/update/school"  >Update</Card.Link>
        <Card.Link href="/delete/school" >Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default School;
