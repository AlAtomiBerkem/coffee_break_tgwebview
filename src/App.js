import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MatchProfile from "./pages/MatchProfile.jsx";
import RatingForm from "./pages/RatingForm.jsx";
import RegistrationForm from "./pages/RegistrationForm.jsx";
import SplashScreen from "./pages/SplashScreen.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx";
import Maintenance from "./components/Maintenance.jsx"
import CityProfessionSelection from "./pages/CityProfessionSelection";

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar /> {/* Навигация будет отображаться на всех страницах */}
                <Routes>
                    <Route path="/" element={<MatchProfile />} /> {/* Главная страница */}
                    <Route path="/CityProfessionSelection" element={<CityProfessionSelection />} />
                    <Route path="/RatingForm" element={<RatingForm />} />
                    <Route path="/RegistrationForm" element={<RegistrationForm />} />
                    <Route path="/SplashScreen" element={<SplashScreen />} />
                    <Route path="/WelcomeScreen" element={<WelcomeScreen />} />
                    <Route path="*" element={<Maintenance />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;