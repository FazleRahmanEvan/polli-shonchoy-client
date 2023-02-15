import logo from './logo.svg';
import './App.css';
import HishabKhularFormInput from './Components/Pages/HishabKhularForm/HishabKhularFormInput';
import NogodAdayBiborniInput from './Components/Pages/NogodAdayBiborini/NogodAdayBiborniInput';
import { Route, Routes } from 'react-router-dom';
import ShonchoyUttolonAbedon from './Components/Pages/ShonchoyUttolonAbedonPotro/ShonchoyUttolonAbedon';
import ShadharonShoddoshoAbedon from './Components/Pages/ShadharonShoddoshoPraptirAbedon/ShadharonShoddoshoAbedon';
import RinAbedonOnumodronPotro from './Components/Pages/RinAbedonOnumodronPotro/RinAbedonOnumodonPotro';
import ShoshogulaRinAbedon from './Components/Pages/ShoshogulaRinAbedon/ShoshogulaRinAbedon';
import ShodoshoProttaharAbedon from './Components/Pages/ShodoshoProttaharAbedon/ShodoshoProttaharAbedon';
import MulPata from './Components/Dashboard/MulPata/MulPata';
import AdayChok from './Components/Dashboard/AdayChok/AdayChok';
import AdayBohi from './Components/Dashboard/AdayBohi/AdayBohi';
import ShadharonShoddoshoPraptirAbedonForm from './Components/Pages/ShadharonShoddoshoPraptirAbedon/ShadharonShoddoshoPraptirAbedonForm';
import Navbar from './Components/Shared/Navbar';
import HishabForm from './Components/Pages/HishabKhularForm/HishabForm';
import ShadharOnShodosho from './Components/Pages/ShadharonShoddoshoPraptirAbedon/ShadharOnShodosho';
import OwaryNogodAdayBiboroni from './Components/Pages/NogodAdayBiborini/OwaryNogodAdayBiboroni';
import RinAbedonForm from './Components/Pages/RinAbedonOnumodronPotro/RinAbedonForm';
import ShonchoyUttolonForm from './Components/Pages/ShonchoyUttolonAbedonPotro/ShonchoyUttolonForm';
import ShoshoRinForm from './Components/Pages/ShoshogulaRinAbedon/ShoshoRinForm';
import ShodoshoProttaharForm from './Components/Pages/ShodoshoProttaharAbedon/ShodoshoProttaharForm';
import RinAbedonTalika from './Components/Pages/RinAbedonOnumodronPotro/RinAbedonTalika';
import HishabTalika from './Components/Pages/HishabKhularForm/HishabTalika';
import NogodTalika from './Components/Pages/NogodAdayBiborini/NogodTalika';
import ShonchoyTalika from './Components/Pages/ShonchoyUttolonAbedonPotro/ShonchoyTalika';
import ShoshoGulaTalika from './Components/Pages/ShoshogulaRinAbedon/ShoshoGulaTalika';
import ShodoshoProttaTalikaRow from './Components/Pages/ShodoshoProttaharAbedon/ShodoshoProttaTalikaRow';
import ShadharonProttaharTalika from './Components/Pages/ShodoshoProttaharAbedon/ShadharonProttaharTalika';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
      <Route path="/hishabKhularform" element={<HishabKhularFormInput></HishabKhularFormInput>}></Route>
      <Route path="/nogodAdayBiborini" element={<NogodAdayBiborniInput></NogodAdayBiborniInput>}></Route>
      <Route path="/shonchoyUttolon" element={<ShonchoyUttolonAbedon></ShonchoyUttolonAbedon>}></Route>
      <Route path="/shadharonShodoshoAbedon" element={<ShadharonShoddoshoAbedon></ShadharonShoddoshoAbedon>}></Route>
      <Route path="/rinAbedonOnumodonPotro" element={<RinAbedonOnumodronPotro></RinAbedonOnumodronPotro>}></Route>
      <Route path="/shoshsogulaRin" element={<ShoshogulaRinAbedon></ShoshogulaRinAbedon>}></Route>
      <Route path="/shodoshoProttahar" element={<ShodoshoProttaharAbedon></ShodoshoProttaharAbedon>}></Route>
      <Route path="/mulPata" element={<MulPata></MulPata>}></Route>
      <Route path="/adayChok" element={<AdayChok></AdayChok>}></Route>
      <Route path="/adayBohi" element={<AdayBohi></AdayBohi>}></Route>
      <Route path="/hishabForm/:_id" element={<HishabForm></HishabForm>}></Route>
      <Route path="/shadharonShodosho/shodoshoCode/:_id" element={<ShadharOnShodosho></ShadharOnShodosho>}></Route>
      <Route path="/nogodAdayBiborini/:_id" element={<OwaryNogodAdayBiboroni></OwaryNogodAdayBiboroni>}></Route>
      <Route path="/rinAbedonOnumodonPotro/:_id" element={<RinAbedonForm></RinAbedonForm>}></Route>
      <Route path="/shonchoyUttolon/:_id" element={<ShonchoyUttolonForm></ShonchoyUttolonForm>}></Route>
      <Route path="/shoshsogulaRin/:_id" element={<ShoshoRinForm></ShoshoRinForm>}></Route>
      <Route path="/shodoshoProttahar/:_id" element={<ShodoshoProttaharForm/>}></Route>
      <Route path="/rintalika" element={<RinAbedonTalika/>}></Route>
      <Route path="/hishabtalika" element={<HishabTalika/>}></Route>
      <Route path="/nogodtalika" element={<NogodTalika/>}></Route>
      <Route path="/shonchoyTalika" element={<ShonchoyTalika/>}></Route>
      <Route path="/shoshogularinTalika" element={<ShoshoGulaTalika/>}></Route>
      <Route path="/shodoshoProttaharTalika" element={<ShadharonProttaharTalika/>}></Route>

      </Routes>
  
    
    </div>
  );
}

export default App;
