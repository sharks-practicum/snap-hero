import {Route, Routes} from "react-router-dom";
import UIKit from "./pages/UIKit/UIKit";
import Login from "./pages/Login/Login";
import Forum from "./pages/Forum";
import ForumPosts from "./pages/Forum/ForumPosts";
import ForumPostComment from "./pages/Forum/ForumPostComment";
import React from "react";

const Router:React.FC =  () => (
    <Routes>
        <Route path="/" element={<UIKit />}>
            {/*Nested routes example */}
            {/*<Route path="ticket" element={<TicketBoard />} />*/}
            {/*<Route path="ticket/:ticketId" element={<Ticket />} />*/}
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/forum' element={<Forum />}/>
        <Route path="/forum/:forumId" element={<ForumPosts />} />
        <Route path="/forum/:forumId/:postId" element={<ForumPostComment />} />
    </Routes>
)

export default Router
