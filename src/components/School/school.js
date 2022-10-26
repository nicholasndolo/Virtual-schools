/* import React, {useState, useEffect} from "react";

function School() {
  const [school, setschools] = useState([]);
  const [institute, setinstitute] = useState([]);


  async function fetching(){
    await fetch("https://virtualschools.herokuapp.com/schools")
    .then((resp) => resp.json())
    .then((school) => setschools(school));
  }
  //fetch data
  useEffect(() => {
    fetching()
  }, []);
  console.log(school)

  const addToInstitute = (schools) =>{
    
    let newInstitute = [...institute];
    let itemInInstitute = newInstitute.find(
      (item) => schools.name === item.name
    );
    if (itemInInstitute) {
        itemInInstitute.quantity++;
    } else {
        itemInInstitute = {
        ...schools,
        quantity: 1,
      };
     newInstitute.push(itemInInstitute);
    }
   setinstitute(newInstitute);
   
  }


  let container = school.map((schools) => (
      <div className='contain'>

        <img className='logo' src={schools.image} alt={schools.name} />
        <h3>{schools.name}</h3>
        <h4>{schools.institute}</h4>
      </div>
  
  ))

  return (
    <div>
      <div>{container}</div>
    </div>
  )
}

export default School
*/
