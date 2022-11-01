/*import Card from 'react-bootstrap/Card';
import '../App.css'
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
*/
import Card from 'react-bootstrap/Card';
import '../App.css'
function Student() {
  return (
    <Card style={{ width: '18rem', margin:'25px 25px' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Card.Body>
        <Card.Title>Student</Card.Title>
        <div className='links'>
        <Card.Link href="/create/students" >Create</Card.Link>
        <Card.Link href="/update/students" >Update</Card.Link>
        <Card.Link href="/delete/students"  >Delete</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Student;