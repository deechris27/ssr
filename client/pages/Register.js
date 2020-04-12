import {useState} from 'react';
import Layout from '../components/Layout';


const Register = ()=> {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: '',
        buttonText: 'Register'
    });

    const {name, email, password, error, success, buttonText} = state;

    const handleChange = e => {
       setState({...state, [e.target.name] : e.target.value, buttonText: 'Register'});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(state);
    }

   const registerForm = () =>

       <form onSubmit={handleSubmit}>
           <div className="form-group">
               <input onChange={handleChange} type="text" value={name} name="name" className="form-control" placeholder="Enter your name"/>
           </div>
           <div className="form-group">
               <input onChange={handleChange} type="text" value={email} name="email" className="form-control" placeholder="Enter your email"/>
           </div>
           <div className="form-group">
               <input onChange={handleChange} type="password" value={password} name="password" className="form-control" placeholder="Enter your password"/>
           </div>
           <div className="form-group">
               <button className="btn btn-outline-info">{state.buttonText}</button>
           </div>
       </form>
   

   return (<Layout>
       <div className="col-md-6 col-offset-3">
          <h1>Register</h1>
          <br />
          {registerForm()}
          <hr/>
          {JSON.stringify(state)}
       </div>
   </Layout>)
}


export default Register;