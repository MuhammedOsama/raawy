import React from "react";

// style
import "./Notifications.scss";

export default function Notifications() {
    return <div id="notifications">
        <div className="container">
            <div className="main-heading">
                <h3 className="title-heading">الإشعارات</h3>
            </div>
            <div className="content">
                <h5 className="content-date">اليوم</h5>
                <div className="msg-content active">
                    <p className="msg-details">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                    <span className="msg-time">الساعة 5:12</span>
                </div>
                <div className="msg-content">
                    <p className="msg-details">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                    <span className="msg-time">الساعة 5:12</span>
                </div>
                <div className="msg-content">
                    <p className="msg-details">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                    <span className="msg-time">الساعة 5:12</span>
                </div>
                <div className="msg-content">
                    <p className="msg-details">تم استلام تبرعك من قبل الإدارة وتم تحويلة إلى تبرع نشط</p>
                    <span className="msg-time">الساعة 5:12</span>
                </div>
            </div>
        </div>
    </div>
}
