import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import useUser from '../../hooks/useUser';

function LoginPage() {
  const navigate = useNavigate()
  const { handleSignupOrLogin } = useUser()

  // State for Form Fields
  const [formState, setFormState] = React.useState({
    email: '',
    password: ''
  });

  // Handle Form Input
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  // Handle Form Submit
  const handleSubmit = async (e) => {
    // Prevent Refresh on Submission
    e.preventDefault();
    try {
      // Pass Form Data to DjangoAPI
      await userService.login(formState);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      // Success! - Navigate to 'HomePage'
      navigate('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  return (
    <div className="LoginPage">
      <div className="formWrapper">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} >
        <div className='formField'>
          <label>EMAIL</label>
          <input type="email" className="form-control" placeholder="Email" value={formState.email} name="email" onChange={handleChange} />
        </div>
        <div className='formField'>
          <label>PASSWORD</label>
          <input type="password" className="form-control" placeholder="Password" value={formState.password} name="password" onChange={handleChange} />
        </div>
        <div className='formButtons'>
          <button className="login">LOG IN</button>&nbsp;&nbsp;&nbsp;
          <Link to='/' className='cancel-link'><button className="cancel">CANCEL</button></Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;
