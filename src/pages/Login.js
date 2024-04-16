import React from 'react';
import CustomInput from "../components/CustomInput";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        
        <div className="py-5" style={{background:"#6C63FF", minHeight:"100vh"}}>
<<<<<<< HEAD
            <br />
            <br />
            <br />
            <br />
            <br />
=======
>>>>>>> 82e9c5380445a5dc11717c3dfa68b63118339150

        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
            <h3 className="text-center">Login</h3>
            <p className="text-center">Ingresa tus datos registrados, para hacer uso de nuestro servicio.</p>
        <form action="">
<<<<<<< HEAD
           <CustomInput type ="text" Label="EmailAddress" id="email"/>
=======
           <CustomInput type ="text" label="EmailAddress"id="email"/>
>>>>>>> 82e9c5380445a5dc11717c3dfa68b63118339150
            <CustomInput type= "password" label="password" id="pass"/>
            <div className='mb-3 text-end'>

                <Link to="forgot-password" className="">Recuperar contraseña</Link>
            </div>
            <Link to= "/admin"
<<<<<<< HEAD
            className="border-0 px-3 py-2 text- white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{background:"6C63FF"}}
=======
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5 color-button"
            
>>>>>>> 82e9c5380445a5dc11717c3dfa68b63118339150
            type="submit">
                Login
            </Link>
            </form>
        </div>
        </div>
    );
}

export default Login;

