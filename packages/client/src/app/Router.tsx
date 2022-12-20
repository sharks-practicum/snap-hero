import {Navigate, Route, Routes} from "react-router-dom";
import UIKit from "./pages/UIKit/UIKit";
import Login from "./pages/Login/Login";
import React from "react";
import useAuth from "./hooks/useAuth";

const Authorized = () => {
    const {isAuth} = useAuth();
    return (
        <>
            {isAuth ?
                <Routes>
                    <Route path="*" element={<UIKit />}/>
                </Routes>
              : <Navigate to="/login"/>}
        </>
    );
};


const Router =  () => (
    <Routes>
        <Route path="*" element={<Authorized />}/>
        <Route path='/login' element={<Login />}/>
    </Routes>
)

export default Router
