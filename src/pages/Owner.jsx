import CourseList from "../components/Owners/CourseList";
import Educator from "../components/Owners/Educators";
import NavbarComp from "../components/Owners/NavbarComp";
import School from "../components/Owners/Schools";
import Student from "../components/Owners/Students";



const Owner = () => {
  return(
    <>
    <NavbarComp/>
    <Educator/>
    <Student/>
    <School/>
    <CourseList/>
    </>
  )
  };
  
  export default Owner;
  