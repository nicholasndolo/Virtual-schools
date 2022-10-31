import React from 'react';

export default function Lesson({lessonInfo}){
    // const {id, topic,course_id} = lessonObject

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">topic</th>
            <th scope="col">Course_Id</th>                        
          </tr>
        </thead>  
          <tbody>
            {lessonInfo.map((item) => {
                return (
                  <> 
                  <tr className="table-secondary">
                    <td >{item.id}</td>
                    <td >{item.topic}</td>
                    <td >{item.course_id}</td>            
                  </tr>
                  </> )     

            })}
            
          </tbody>        
      </table>         
    </div>  

)}