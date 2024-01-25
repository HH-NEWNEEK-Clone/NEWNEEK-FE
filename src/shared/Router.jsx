import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import SignIn from "../pages/SignPages/SignIn";
import SignUp from "../pages/SignPages/SignUp";
import HomePage from "../pages/HomePages/HomePage"
import DetailPage from "../pages/DetailPages/DetailPage"
import SearchPage from "../pages/SearchPages/SearchPage"
import SearchContentsPage from "../pages/SearchPages/SearchContentsPage";
import CategoryPage from "../pages/CategoryPages/CategoryPage"



function Router() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detailpage/:id" element={<DetailPage />} />
                    <Route path="/searchpage" element={<SearchPage />} />
                    <Route path="/searchcontentspage/:text" element={<SearchContentsPage />} />
                    <Route path="/tag/:id" element={<CategoryPage />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Router