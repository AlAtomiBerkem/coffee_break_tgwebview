import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MatchProfile from "./pages/MatchProfile.jsx";
import RatingForm from "./pages/RatingForm.jsx";
import RegistrationForm from "./pages/RegistrationForm.jsx";
import SplashScreen from "./pages/SplashScreen.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx";
import Maintenance from "./components/Maintenance.jsx"


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar />} />
                    <Route path="/MatchProfile" element={<MatchProfile />} />
                    <Route path="/RatingForm" element={<RatingForm />}/>
                    <Route path="/RegistrationForm" element={<RegistrationForm />}/>
                    <Route path="/SplashScreen" element={<SplashScreen />}/>
                    <Route path="/WelcomeScreen" element={<WelcomeScreen />}/>
                    <Route path="*" element={<Maintenance />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;