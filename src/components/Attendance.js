import React from 'react';

export default function Attendance({attendanceInfo}){

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Percentage</th>
            <th scope="col">Lesson_Id</th> 
            <th scope="col">Student_Id</th>                       
          </tr>
        </thead>  
          <tbody>
            {attendanceInfo.map((item) => {
                return (
                  <> 
                  <tr className="table-secondary">
                    <td >{item.id}</td>
                    <td >{item.percentage}</td>
                    <td >{item.lesson_id}</td>  
                    <td >{item.student_id}</td>          
                  </tr>
                  </> )     

            })}
            
          </tbody>        
      </table>         
    </div>  

)}