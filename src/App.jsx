import {React} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import TurtyBot from "./pages/projects/TurtyBot";
import Navbar from "./components/Navbar";
import RailroadIDE from "./pages/projects/RailroadIDE";
import TurtysChemistry from "./pages/projects/TurtysChemistry";
import Brass from "./pages/projects/Brass.jsx"
import MinecraftTutorial from "./pages/tutorials/MinecraftTutorial";
import ColorPicker from "./pages/util/ColorPicker";
import Calculator from "./pages/util/Calculator";
import PokemonBrowser from "./pages/fun/pokemon/PokemonBrowser";
import CurrencyConvertor from "./pages/util/CurrencyConvertor";

export default function App() {
    return (<>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/turtybot" element={<TurtyBot/>}/>
                    <Route path="/railroad-ide" element={<RailroadIDE/>}/>
                    <Route path="/turtys-chemistry" element={<TurtysChemistry/>}/>
                    <Route path="/brass" element={<Brass/>}/>
                    <Route path="/tutorials/minecraft/:version/:tutorial" element={<MinecraftTutorial/>}/>
                    <Route path="/color-picker" element={<ColorPicker/>}/>
                    <Route path="/calculator" element={<Calculator/>}/>
                    <Route path="/pokemon-browser" element={<PokemonBrowser/>}/>
                    <Route path="/currency-convertor" element={<CurrencyConvertor/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>);
}