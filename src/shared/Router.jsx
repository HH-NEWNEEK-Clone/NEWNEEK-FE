import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import SignIn from "../pages/signPages/SignIn";
import SignUp from "../pages/signPages/SignUp";
import HomePage from "../pages/homePages/HomePage";
import CategoryPage from "../pages/categoryPages/CategoryPage";
import DetailPage from "../pages/detailPages/DetailPage"; 
import SearchPage from "../pages/searchPages/SearchPage";
import SearchContentesPage from "../pages/searchPages/SearchContentesPage";



function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                
                <Route path="/" element={<HomePage/>}/>
                <Route path="/categoryPage" element={<CategoryPage/>}/>
                <Route path="/detailPage" element={<DetailPage/>}/>
                <Route path="/searchPage" element={<SearchPage/>}/>
                <Route path="/searchContentesPage" element={<SearchContentesPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router