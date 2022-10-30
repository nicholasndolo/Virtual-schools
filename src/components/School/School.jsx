import React, {useState, useEffect} from "react";
import "./School.css"
import {useLocation} from "react-router-dom"

function School() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const[searchItems, setSearchItems] =useState([])
  const {state} = useLocation();
  const { searchValue } = state;
  useEffect(()=>{
    for(let i = 0; i < items.length; i++){
    const item = items[i].name.toLowerCase()
    if(item.contains(searchValue.lowerCase())){
    searchItems.push(item[i]);
    }}
},[])
  useEffect(() => {
    fetch("https://virtualschools.herokuapp.com/schools")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="contain">
       <ul>
        {items.map(item => (

          <li key={item.id}>
             <img src={item.image_url} className="card-img-top" alt="event"/>  
            {item.name}          
          </li>
        ))}
      </ul>
      </div>
    );
  }
}
export default School

