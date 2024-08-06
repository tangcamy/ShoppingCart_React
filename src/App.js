import "./styles/reset.scss";
import "./styles/base.scss";
import "./styles/dark-theme.scss";
import Header from './components/Header/Header.js'
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import { useState } from "react";
//import './App.css';原本預測的css，可以先註解掉


function App() {
  let [step, setStep] = useState(1);
  return (
    <div className="App">
      <Header/>
      <Main step={step} setStep={setStep}/>
      <Footer/>
    </div>
  );
}

export default App;
