import React, { useState} from 'react';
import InputContainer from './InputContainer';

function ValidatingForm() {
    const initValues = {username:'',email:'',password:''};
    const [formValues,setFormValues] = useState(initValues);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false); 

    const handleChange = (event) => {
        const {id,value} = event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate = (values) => {
        const errors = {};
        const reg = new RegExp("[0-9]+");

        const preg = new RegExp("[A-Z][A-Za-z0-9$_]+");
        if(!values.username){
            errors.username = "Please fill the column";
        }
        else if(values.username.length<5)
            errors.username = "Username must have minimum 5 characters";
        else if(reg.test(values.username))
            errors.username="Username must contain only Alphabets";
        if(!values.email)
            errors.email = "Invalid email";

        if(!values.password)
            errors.password ="Please fill the Password";
        else if(!preg.test(values.password))
            errors.password ="Format of Password is not Correct";

        return errors;
    }

    return ( 
        <div className='container'>
            {
                
                Object.keys(formErrors).length===0 && isSubmit?(
                    <InputContainer msg="Signed In Successfully" username={formValues.username}
                    email={formValues.email} password={formValues.password}/>
                ):(<pre></pre>)       
            }
            
            <form onSubmit={handleSubmit}>
                <center><br/><br/><br/><br/><h1>Dynamic Form</h1></center>
                <div className='box'><center>
                <div className='row'>
                    <label>Enter your username</label><br/><br/>
                    <input type="text" id="username" 
                            placeholder='Type Username Here'
                            value = {formValues.username}
                            onChange={handleChange}
                            />
                </div>
                <p style={{color:"red"}}>{formErrors.username}</p>
                <div className='row'>
                    <label>Enter your email</label><br/><br/>
                    <input type="email" id="email" 
                            placeholder='Type Emial ID Here'
                            value = {formValues.email}
                            onChange={handleChange}
                            />
                </div>
                <p style={{color:"red"}}>{formErrors.email}</p>
                <div className='row'>
                    <label>Enter your password</label><br/><br/>
                    <input type="password" id="password" 
                            placeholder='Type Password Here'
                            value = {formValues.password}
                            onChange={handleChange}
                    /><br/>
                </div>
                <p style={{color:"red"}}>{formErrors.password}</p>

                <div className='button'>
                    <button className='btn-primary'>Login</button>
                </div></center>
                </div>
            </form>
        </div>
     );
}

export default ValidatingForm;
