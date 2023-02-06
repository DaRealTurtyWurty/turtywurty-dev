import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import TurtyBot from "./pages/projects/TurtyBot";
import Navbar from "./components/Navbar";
import RailroadIDE from "./pages/projects/RailroadIDE";
import TurtysChemistry from "./pages/projects/TurtysChemistry";
import Brass from "./pages/projects/Brass.jsx"
import MinecraftTutorial from "./pages/tutorials/MinecraftTutorial";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
    return <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects/turtybot/" element={<TurtyBot/>}/>
                <Route path="/projects/railroad-ide/" element={<RailroadIDE/>}/>
                <Route path="/projects/turtys-chemistry/" element={<TurtysChemistry/>}/>
                <Route path="/projects/brass/" element={<Brass/>}/>
                <Route path="/tutorials/minecraft/:version/:tutorial" element={<MinecraftTutorial/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>
}