import React, {useState} from "react";
import axios from "axios";
import Joi from "joi";
import {useNavigate} from "react-router-dom";

// style
import "./SignUp.scss";

export default function SignUp() {
    let [user, setUser] = useState({
        user_name: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
    });
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);
    let [errorList, setErrorList] = useState([]);
    const history = useNavigate();

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
            setErrorList(validationResponse.error.details);
            setLoading(false);
        } else {
            let {data} = await axios.post(`https://rawy.moltaqadev.com/api/v1/register`, user);
            if (data.message === "تم تسجيل حسابك بنجاح") {
                history("/signin");
                setLoading(false);
            } else {
                setLoading(false);
                setError(data.error);
            }
        }
    }

    function validateSignUpForm() {
        let userSchema = Joi.object({
            user_name: Joi.string().min(3).required(),
            phone_number: Joi.string().min(10).required(),
            password: Joi.string().min(8).required(),
            password_confirmation: Joi.ref("password"),
        });
        return userSchema.validate(user, {abortEarly: false});
    }

    return <div id="sign-up">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="logo">
                        <img src={"./images/SignUp.png"} alt="Sign Up"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content">
                        <div className="content-desc">
                            <h3 className="content-title">أهلا بك</h3>
                            <h5 className="content-subtitle">إنشاء حساب</h5>
                            <span className="content-create">لديك حساب بالفعل؟ <a href="/signin">تسجيل الدخول</a></span>
                        </div>
                        <div className="content-form">
                            <form onSubmit={formSubmit}>
                                {error && <div className="alert alert-danger p-2">{error}</div>}
                                {errorList.map((error, index) => index === 2 ? <div key={index} className="alert alert-danger p-2">Invalid Password</div> : <div key={index} className="alert alert-danger p-2">{error.message}</div>)}
                                <div className="input-form-content">
                                    <label htmlFor="user_name" className="input-name">الإسم</label>
                                    <input onChange={getUser} className="input-type" type="text" name="user_name"/>
                                </div>
                                <div className="input-form-content">
                                    <label htmlFor="phone_number" className="input-name">رقم الجوال</label>
                                    <input onChange={getUser} className="input-type" type="text" name="phone_number"/>
                                </div>
                                <div className="input-form-content">
                                    <label htmlFor="password" className="input-name">كلمة المرور</label>
                                    <input onChange={getUser} className="input-type" type="password" name="password"/>
                                </div>
                                <div className="input-form-content m-0">
                                    <label htmlFor="password_confirmation" className="input-name">تأكيد كلمة المرور</label>
                                    <input onChange={getUser} className="input-type" type="password" name="password_confirmation"/>
                                </div>
                                <div className="check">
                                    <input type="checkbox"/>
                                    <span className="input-name">أوافق على <a href="/conditions">الشروط و الأحكام</a></span>
                                </div>
                                <div className="form-confirm">
                                    <button className="btn-assign" type="submit">
                                        {loading ? <i className="fas fa-spinner fa-spin"></i> : "إنشاء حساب"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
