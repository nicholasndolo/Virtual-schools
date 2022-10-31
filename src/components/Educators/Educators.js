import React,{ useState, useEffect} from 'react'; 
import NavBar from './Navbar';
import Sidebar from './Sidebar';
import ResourceForm from './ResourceForm';
import ResourceContainer from './ResourceContainer';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Educators = () => {
  const [data, setData] = useState ([])

  useEffect(() =>{
    fetch('https://virtualschools.herokuapp.com/resources/')
    .then(r => r.json())
    .then(data =>{
      setData(data)
    })
  }, [])


  function handleDeleteResource(resourceToDelete){
    const updatedResources = data.filter((resource) => {
      if (resource.id !== resourceToDelete.id) {
        return resource
      } else {
        return null
      }
    });
    setData(updatedResources);
  }

  function handleUpdateResource(updatedResourceObj) {
    const editedResources = data.map((resource) => {
      if (resource.id === updatedResourceObj.id) {
        return updatedResourceObj;
      } else {
        return resource;
      }
    });
    setData(editedResources);
  }
  return (
    <Router> 
    <div className="App">
      <NavBar />
      <Sidebar />
      <Routes>
        <Route exact path='/resources' element={
          <ResourceContainer
          data={data}
          handleDeleteResource={handleDeleteResource}
          handleUpdateResource={handleUpdateResource}
          />
        }
        />
        <Route exact path='/create-resource' element={<ResourceForm/>} />
      </Routes>

    
    </div>
  </Router>
  )
}

export default Educators;
