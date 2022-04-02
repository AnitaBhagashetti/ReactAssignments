import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */
    <div className='main'>
      <div className='border'>

    <img src='https://www.w3schools.com/howto/img_avatar.png' alt='img' />
    <div className='info'>
    <p className='name'>{employee.name}</p>
    <p className='heads'>Location</p>
    <p className='details'>{employee.location}</p>
    <p  className='heads'>BloodGroup</p>
    <p className='details'>{employee.bloodGroup}</p>
    <p  className='heads'>Age</p>
    <p className='details'>{employee.age}</p>
    </div>
    </div>
  </div>
  }
</div>
)
}
// const employee = {
//   name: 'Tom',
//   location: 'New York',
//   bloodGroup: 'B+',
//   age: 28,
//   profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
//        }



export default App;
