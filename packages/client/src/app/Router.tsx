import {Route, Routes} from "react-router-dom";
import UIKit from "./pages/UIKit/UIKit";
import Login from "./pages/Login/Login";
import React from "react";
import GameOver from "./pages/GameOver/GameOver";

const Router:React.FC =  () => (
    <Routes>
        <Route path="/" element={<UIKit />}>
            {/*Nested routes example */}
            {/*<Route path="ticket" element={<TicketBoard />} />*/}
            {/*<Route path="ticket/:ticketId" element={<Ticket />} />*/}
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/gameover' element={<GameOver />}/>
    </Routes>
)

export default Router
