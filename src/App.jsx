import React, {useState} from "react"
import jwtDecode from "jwt-decode";

// components
import SignUp from "./Layout/components/SignUp/SignUp";
import OTPCode from "./Layout/components/OTPCode/OTPCode";
import SignIn from "./Layout/components/SignIn/SignIn";
import ResetPassword from "./Layout/components/ResetPassword/ResetPassword";
import NewPassword from "./Layout/components/NewPassword/NewPassword";
import MainNavbar from "./Layout/components/MainNavbar/MainNavbar";
import Home from "./Home";
import Footer from "./Layout/components/Footer/Footer";

// blocks
import Offers from "./Layout/components/Blocks/Offers/Offers";
import Notifications from "./Layout/components/Blocks/Notifications/Notifications";
import OrdersInfo from "./Layout/components/Blocks/OrdersInfo/OrdersInfo";
import ContactUs from "./Layout/components/Blocks/ContactUs/ContactUs";
import PersonalProfile from "./Layout/Blocks/PersonalProfile/PersonalProfile";
import Conditions from "./Layout/Blocks/Conditions/Conditions";
import DonatesLocations from "./Layout/Blocks/DonatesLocations/DonatesLocations";
import OfferDetails from "./Layout/components/Blocks/OfferDetails/OfferDetails";
import OderDetails from "./Layout/components/Blocks/OderDetails/OderDetails";
import Mosques from "./Layout/components/Blocks/Mosques/Mosques";
import Charities from "./Layout/components/Blocks/Charities/Charities";
import Orphanage from "./Layout/components/Blocks/Orphanage/Orphanage";
import AddFastingBreakfast from "./Layout/components/Blocks/AddFastingBreakfast/AddFastingBreakfast";
import MultiFasting from "./Layout/components/Blocks/MultiFasting/MultiFasting";
import DataPay from "./Layout/components/Blocks/DataPay/DataPay";
import SelectMaterialAndQuantity from "./Layout/components/Blocks/SelectMaterialAndQuantity/SelectMaterialAndQuantity";
import AddData from "./Layout/components/Blocks/AddData/AddData";
import DataSelection from "./Layout/components/Blocks/DataSelection/DataSelection";

// route
import {Routes, Route} from "react-router-dom";
import RecipientData from "./Layout/components/Blocks/RecipientData/RecipientData";

export default function App() {
    let [loginUser, setLoginUser] = useState(null);

    function getUserInfo() {
        let encodedToken = localStorage.getItem("userToken");
        let userData = jwtDecode(encodedToken);
        console.log(userData);
        setLoginUser(userData);
    }

    return <div className="App" dir="rtl">
        <MainNavbar loginUser={loginUser}/>
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/otp-code" element={<OTPCode/>}/>
            <Route path="/signin" element={<SignIn getUserInfo={getUserInfo}/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/new-password" element={<NewPassword/>}/>
            <Route path="/" element={<Home loginUser={loginUser}/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/personal-profile" element={<PersonalProfile/>}/>
            <Route path="/order-info" element={<OrdersInfo/>}/>
            <Route path="/donates-locations" element={<DonatesLocations/>}/>
            <Route path="/conditions" element={<Conditions/>}/>
            <Route path="/offer-details" element={<OfferDetails/>}/>
            <Route path="/order-details" element={<OderDetails/>}/>
            <Route path="/mosques" element={<Mosques/>}/>
            <Route path="/charities" element={<Charities/>}/>
            <Route path="/orphanage" element={<Orphanage/>}/>
            <Route path="/multi-fasting" element={<MultiFasting/>}/>
            <Route path="/add-fasting-breakfast" element={<AddFastingBreakfast/>}/>
            <Route path="/data-pay" element={<DataPay/>}/>
            <Route path="/select-material-and-quantity" element={<SelectMaterialAndQuantity/>}/>
            <Route path="/add-data" element={<AddData/>}/>
            <Route path="/data-selection" element={<DataSelection/>}/>
            <Route path="/recipient-data" element={<RecipientData/>}/>
        </Routes>
        <Footer loginUser={loginUser}/>
    </div>
}
