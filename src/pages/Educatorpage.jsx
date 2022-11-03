//import { Navbar } from "reactstrap";
import EditResource from "../components/Educators/EditResource";
import Educators from "../components/Educators/Educators";
import NavBar from "../components/Educators/NavBar";
import ResourceCard from "../components/Educators/ResourceCard";
import ResourceContainer from "../components/Educators/ResourceContainer";
import ResourceForm from "../components/Educators/ResourceForm";
import ResourceList from "../components/Educators/ResourceList";
import Sidebar from "../components/Educators/Sidebar";
const Educator = () => {
    return (
     <>
     <NavBar/>
     <Sidebar/>
<Educators/>
<ResourceCard/>
<ResourceContainer/>
<ResourceList/>
<ResourceForm/>
<EditResource/>
     </>
    );
  };
  
  export default Educator;

 