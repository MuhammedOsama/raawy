import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";

// style
import "./LogoutModal.scss";

export default function LogoutModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useNavigate();

    function logout() {
        localStorage.setItem("userToken", null);
        history("/");
    }

    return <div id="logout-modal">
        <Button variant="primary" onClick={handleShow} className="btn-modal" style={{padding: 0}}>
            <a onClick={logout}>تسجيل الخروج</a>
        </Button>
        <Modal show={show} onHide={handleClose} className="hi">
            <Modal.Header closeButton>
                <Modal.Title style={{fontSize: "16px"}}>تسجيل الخروج</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign: "center"}}>
                <div className="logo" style={{marginBottom: "16px"}}>
                    <img src={"./images/Logout.svg"} alt="Logout Logo"/>
                </div>
                <span className="logout-question" style={{fontFamily: "Bold"}}>هل انت متأكد من تسجيل الخروج؟</span>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose} className="btn-logout" style={{background: "transparent", border: "none", color: "#008F7A"}}>تسجيل الخروج</Button>
            </Modal.Footer>
        </Modal>
    </div>
}
