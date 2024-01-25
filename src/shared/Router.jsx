import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import SignIn from "../pages/signPages/SignIn";
import SignUp from "../pages/signPages/SignUp";
import HomePage from "../pages/homePages/HomePage";
import DetailPage from "../pages/detailPages/DetailPage";
import SearchPage from "../pages/searchPages/SearchPage";
import SearchContentsPage from "../pages/searchPages/SearchContentsPage"
import CategoryPage from "../pages/categoryPages/CategoryPage"



function Router() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/categorypage" element={<CategoryPage/>} />
                    <Route path="/detailpage/:id" element={<DetailPage />} />
                    <Route path="/searchpage" element={<SearchPage />} />
                    <Route path="/searchcontentspage/:text" element={<SearchContentsPage />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Router