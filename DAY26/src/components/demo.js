import { useState } from "react";
import './FormsDemo1.css';

function FormsDemo1()
{ 
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [email, setEmail] = useState("");     
    const [result, setResult] = useState("");   

    const [errorObj, setErrorObj] = useState({
        uname :  "", password :  "", retypePassword : "", email : ""
    });

    function handleSubmit(e)
    {
        e.preventDefault();  
        // stop the default behaviour (submit button will submit the values to server/current url)


        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let tempErrorObj = Object.assign({}, errorObj);

        tempErrorObj.uname = (uname.length == 0) ? "User name is required" : "";
        tempErrorObj.password = (password.length == 0) ? "Password is required" : "";
        tempErrorObj.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
        tempErrorObj.retypePassword =  (password != retypePassword)? "Password and re-type password should be same..!" : "";
        
        setErrorObj( tempErrorObj );

        let valuesArray = Object.values(tempErrorObj);
        let  index = valuesArray.findIndex(item => item.length != 0);

       
        if(index == -1)
        {
            // Make an ajax call to send data to server
            setResult("Customer details are valid. We can send data to server.");       
        }
        else
        {
            setResult("You have entered invalid data. Please enter valid data.")
        }
    }

    return(
        <>
            <h3>Performing form validations in React JS</h3>
            <hr />

            <form  onSubmit={handleSubmit}>     
                <fieldset>
                    <legend>Customer Registration Form</legend>

                    User Name  :  
                    <input type="text" onChange={(e) => setUname(e.target.value)}  />
                    <span className="error">{errorObj.uname}</span>
                    <br/><br/>

                    Password  :  
                    <input type="password" onChange={(e) => setPassword(e.target.value)}  />
                    <span className="error">{errorObj.password}</span>
                    <br/><br/>

                    Retype Password  :  
                    <input type="password" onChange={(e) => setRetypePassword(e.target.value)}  />
                    <span className="error">{errorObj.retypePassword}</span>
                    <br/><br/>

                    E-mail Id:
                    <input type="text"  onChange={ (e) => setEmail(e.target.value)}  />
                    <span className="error">{errorObj.email}</span>
                    <br/><br/>

                    <input type="submit" value="Register" />

                    <h3>{result}</h3>
                </fieldset>      
            </form>
        </>
    );
}

export default FormsDemo1;