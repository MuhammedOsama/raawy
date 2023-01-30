import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Joi from "joi";

// style
import "./SignIn.scss";

export default function SignIn(props) {
    let [user, setUser] = useState({phone_number: "", password: ""});
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);
    let [errorList, setErrorList] = useState([]);
    let history = useNavigate();

    function getUser(e) {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    async function formSubmit(e) {
        e.preventDefault();
        setLoading(true);
        let validationResponse = validateSignUpForm();

        if (validationResponse.error) {
            console.log(validationResponse.error)
            // setErrorList(validationResponse.error.details);
            setLoading(false);
        } else {
            let {data} = await axios.post(`https://rawy.moltaqadev.com/api/v1/login`, user);
            console.log(data)
            // if (data.message === "يمكنك الدخول بنجاح") {
            //     localStorage.setItem("userToken", data.token);
            //     props.getUserInfo();
            //     history("/");
            //     setLoading(false);
            // } else {
            //     setLoading(false);
            //     setError(data.error);
            // }
        }
    }

    function validateSignUpForm() {
        let userSchema = Joi.object({
            phone_number: Joi.string().min(10).required(),
            password: Joi.string().min(8).required(),
        });
        return userSchema.validate(user, {abortEarly: false});
    }

    return <div id="sign-in">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="logo">
                        <img src={"./images/SignIn.png"} alt="Sign In"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content">
                        <div className="content-desc">
                            <h3 className="content-title">مرحبا بعودتك!</h3>
                            <h5 className="content-subtitle">تسجيل الدخول</h5>
                            <span className="content-create">لا تمتلك حساب؟ <a href="/signup">إنشاء حساب جديد</a></span>
                        </div>
                        <div className="content-form">
                            <form onSubmit={formSubmit}>
                                {error && <div className="alert alert-danger p-2">{error}</div>}
                                {errorList.map((error, index) => index === 1 ? <div key={index} className="alert alert-danger p-2">Invalid Password</div> : <div key={index} className="alert alert-danger p-2">{error.message}</div>)}
                                <div className="input-form-content">
                                    <label htmlFor="phone_number" className="input-name">رقم الجوال</label>
                                    <input onChange={getUser} className="input-type" type="text" name="phone_number"/>
                                </div>
                                <div className="input-form-content m-0">
                                    <label htmlFor="password" className="input-name">كلمة المرور</label>
                                    <input onChange={getUser} className="input-type" type="password" name="password"/>
                                </div>
                                <a href="/reset-password" className="forget-password">هل نسيت كلمة المرور؟</a>
                                <button className="btn-assign" type="submit">
                                    {loading ? <i className="fas fa-spinner fa-spin"></i> : "تسجيل الدخول"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
