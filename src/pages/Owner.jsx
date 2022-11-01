import Educator from "../components/Educators/Educators";
import School from "../components/School/School";
import Students from "./Student";


const Owner = () => {
    return (
      <Fragment>
        <Educator />
        <Students/>
        <School/>
      </Fragment>
    );
  };
  
  export default Owner;
  