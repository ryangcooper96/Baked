import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import userService from '../../utils/userService';
import useUser from '../../hooks/useUser';

function SignUpPage() {
  const navigate = useNavigate();
  const { handleSignupOrLogin } = useUser();

  const [formState, setFormState] = React.useState({
    first_name: "",
    last_name: "",
    username: "newuser",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Handle Form Input
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(formState);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      // create collection and basket with user set as owner
      let ownerId = await userService.getUser()._id;
    //   await collection.create(ownerId);
    //   await cart.createCart(ownerId);
      // Successfully signed up - show GamePage
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert('Invalid Credentials! blah');
    }
  };

  const isFormInvalid = () => {
    return !(
      formState.username &&
      formState.email &&
      formState.password === formState.password_confirmation
    );
  };


  return (
    <div className="SignUpPage">
      <div className="formWrapper">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} >
        <div className='formField'>
          <label>FIRST NAME</label>
          <input type="text" placeholder="First Name" value={formState.first_name} name="first_name" onChange={handleChange} />
        </div>
        <div className='formField'>
          <label>LAST NAME</label>
          <input type="text" placeholder="Last Name" value={formState.last_name} name="last_name" onChange={handleChange} />
        </div>
        <div className='formField'>
          <label>USERNAME</label>
          <input type="text" required={true} placeholder="Username" value={formState.username} name="username" onChange={handleChange} />
        </div>
        <div className='formField'>
          <label>EMAIL</label>
          <input type="email" required={true} placeholder="Email" value={formState.email} name="email" onChange={handleChange} />
        </div>
        <div className='formField'>
          <label>PASSWORD</label>
          <input type="password" required={true} placeholder="Password" value={formState.password} name="password" onChange={handleChange} />
        </div>
        <div className='formField'>
          <label>PASSWORD CONFIRMATION</label>
          <input type="password" required={true} placeholder="Password Confirmation" value={formState.password_confirmation} name="password_confirmation" onChange={handleChange} />
        </div>
        <div className='formButtons'>
          <button className="login">SIGN UP</button>&nbsp;&nbsp;&nbsp;
          <Link to='/' className='cancel-link'><button className="cancel">CANCEL</button></Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignUpPage