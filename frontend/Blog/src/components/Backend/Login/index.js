import './style.css'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LoginInput from '../../../inputs/loginInput';

const loginInfos = {
    email: "",
    password: "",
};

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState(loginInfos);
    const { email, password } = login;

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const loginValidation = Yup.object({
        email: Yup.string()
            .required("Email address is required.")
            .email("Must be a valid email.")
            .max(100),
        password: Yup.string().required("Password is required"),
    });
    const [error, setError] = useState("");

    const loginSubmit = async () => {
        try {
            const { data } = await axios.post('http://localhost:8000/login', { email, password });
            dispatch({ type: "LOGIN", payload: data });
            Cookies.set("user", JSON.stringify(data));
            navigate("/admin/dashboard");

        } catch (error) {
            setError(error.response.data.message);

        }
    }



    return (
        <div className='login'>
            <div className='login-wrapper'>

                <div className='form-wrapper'>
                    <div className='brand-logo'>
                        <img src='http://blanco2.creabox.es/assets/admin/img/blanco_logo.png' />
                    </div>
                    <div className='input-section'>
                        {error && <div className="validation-error">{error}</div>}
                        <Formik
                            enableReinitialize
                            initialValues={{
                                email,
                                password,
                            }}
                            validationSchema={loginValidation}
                            onSubmit={() => {
                                loginSubmit();
                            }}


                        >


                            {(formik) => (
                                <Form>

                                     <LoginInput
                                        type="text"
                                        name="email"
                                        placeholder="Email address or phone number"
                                        onChange={handleLoginChange}
                                    />
                                    <LoginInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleLoginChange}
                                        bottom
                                    />
                                    <button className='login-submit' type="submit">
                                        Log In
                                    </button> 
                                </Form>
                            )}

                        </Formik>
                       

                     

                    </div>
                </div>

            </div>

        </div>
    )
}
