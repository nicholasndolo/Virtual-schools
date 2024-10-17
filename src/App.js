import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Login/Auth";
import Home from "./pages/Home";
import School from "./components/School/School";
import UpdateCourse from "./components/Approver/UpdateCourse";
import Educators from "./components/Educators/Educators";
import Approver from "./pages/Approver";
import CreateApprover from "./components/Approver/CreateOwner";
import CourseList from "./components/Approver/CourseList";
import CreateStudent from "./components/Approver/Createstudents";
import CreateEducator from "./components/Approver/CreateEducators";
import CreateSchool from "./components/Approver/Createschools";
import UpdateStudent from "./components/Approver/Updatestudents";
import Deletestudents from "./components/Approver/Deletestudents";
import UpdateEducator from "./components/Approver/UpdateEducators";
import UpdateSchool from "./components/Approver/Updateschools";
import DeleteEductors from "./components/Approver/Deleteeductors";
import DeleteSchools from "./components/Approver/Deleteschools";
import Students from "./components/Approver/Students";
import Schools from "./components/Approver/Schools";
import LessonList from "./components/Lessons/LessonsList";
import ResourceContainer from "./components/Educators/ResourceContainer";
import LoginEducator from "./components/Educators/LoginEducator";
import Learn from "./components/student-page/Learn";
import ResourceForm from "./components/Educators/ResourceForm";
import StudentLogin from "./components/student-page/Studentlogin";
import Approver from './components/Approver/Approver';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="/stulogin" element={<LoginEducator/>} />
        <Route path="/loginedu" element={<StudentLogin/>} />
        <Route path="/lesson" element={<LessonList />} />
        <Route path="/resource" element={<ResourceContainer />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/enroll" element={<CreateOwner />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/schools" element={<School />} />
        <Route path="/course/:courseId" element={<UpdateCourse />} />/
        <Route path="/educators" element={<Educators />} />
        <Route path="/login-educator" element={<LoginEducator/>} />
        <Route path="/admin" element={<Owner />} />
        <Route path="/educator" element={<Educators />} />
        <Route path="/create/educator" element={<CreateEducator />} />
        <Route path="/update/educator" element={<UpdateEducator />} />
        <Route path="/delete/educator" element={<DeleteEductors />} />
        <Route path="/students" element={<Students />} />
        <Route path="/create/student" element={<CreateStudent />} />
        <Route path="/update/student" element={<UpdateStudent />} />
        <Route path="/delete/student" element={<Deletestudents />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/create/school" element={<CreateSchool />} />
        <Route path="/update/school" element={<UpdateSchool />} />
        <Route path="/delete/school" element={<DeleteSchools />} />
        <Route exact path='/create-resource' element={<ResourceForm/>} />
      </Routes>
    </BrowserRouter>
  );
  }

export default App;
