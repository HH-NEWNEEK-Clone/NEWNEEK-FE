import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import SignIn from "../pages/SignPages/SignIn";
import SignUp from "../pages/SignPages/SignUp";
import HomePage from "../pages/HomePages/HomePage";
import CategoryPage from "../pages/CategoryPages/CategoryPage";
import DetailPage from "../pages/DetailPages/DetailPage";
import SearchPage from "../pages/SearchPages/SearchPage";
import SearchContentsPage from "../pages/SearchPages/SearchContentsPage";


function Router() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />

                    <Route path="/" element={<HomePage />} />
                    <Route path="/categorypage" element={<CategoryPage />} />
                    <Route path="/detailpage" element={<DetailPage />} />
                    <Route path="/searchpage" element={<SearchPage />} />
                    <Route path="/searchcontentspage" element={<SearchContentsPage />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Router