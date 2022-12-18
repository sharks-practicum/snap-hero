import {Route, Routes} from "react-router-dom";
import UIKit from "./pages/UIKit/UIKit";
import Login from "./pages/Login/Login";
import Forum from "./pages/Forum";
import PostsList from "./pages/Forum/PostsList";
import ForumPost from "./pages/Forum/ForumPost";
import React from "react";

const Router:React.FC =  () => (
    <Routes>
        <Route path="/" element={<UIKit />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forums' element={<Forum />} />
        <Route path="/forum/:forumId/posts" element={<PostsList />} />
        <Route path="/forum/:forumId/post/:postId" element={<ForumPost />} />
    </Routes>
)

export default Router
