import React from 'react';

import './App.css';
import Content from './Content';
import Header from './Header';

const employee = 
{
  Name: 'Alan Ford',
  EmployeeId:'00005152',
  Appointment:"9:00 (24-05-2016)",
  Email:"alan@email.com",
  Phone:"+3112345677",
  Status:"InProgress",
  Door:"Mark",
  Time:"10:30 (25-06-2016)",
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  profile:"Boltarr Bossensen"
}
// var arrow="<"
function App() {
  return (
    
    <div className="site-container">
     
    {/* Star</Header>t Your code here */
    
    }
    
      <Header employee={employee} />
      <Content employee={employee}/>

    
    </div>
  );
}

export default App;
