import './App.css';
import { useState} from 'react';
import axios from 'axios'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Form Submitted!');
  };
  
  return (
    <div>
      <Counter></Counter>
      {/* <Register/> */}
      {/* <h1>Welcome To React</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input type="text" placeholder="Enter The Name" name="name" required />
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" placeholder="rajadhanush@gdn" name="email" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}




function Register(){

  const [user,setUser]=useState({
    userName:'',
    email:'',
    phoneNumber:'',
    password:'',
    address:''
  });

  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  };

  const handleDemo= async (e)=>{
    e.preventDefault();
    try{
       const response=await
    axios.post("",user);
    alert("Register Sucess!")
    }catch(error){
      console.error("Register Failed");
      alert("Error During Register");
    }
   
  };

  return(
    <>
    <form onSubmit={handleDemo}>
      <input type='text' name='userName' onChange={handleChange} required></input>
      <input type='email' name='email' onChange={handleChange} required></input>
      <input type='tel' name='phoneNumber' onChange={handleChange} required></input>
      <input type='password' name='password' onChange={handleChange} required></input>
      <input type='address' name='address' onChange={handleChange} required></input>
      <button>Register</button>
    </form>
    
    
    </>
  )


}

export default App;


function Counter() {
  const [counter, setCounter] = useState(10);
  const stop = 15;

  return (
    <div className="container">
      <h1>Counter React Application</h1>

      <div className="counter-box">
        <button className="minus" onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}>-</button>

        <p className="c">{counter}</p>

        <button className="plus" onClick={() => {
          if (counter < stop) setCounter(counter + 1);
        }}>+</button>
      </div>
    </div>
  );
}