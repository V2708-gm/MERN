import React from "react";
import Welcome from "./components/Welcome"
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthPage from "./components/AuthPage";
import Test from "./components/Test";
import Hello from "./components/Hello";
import ControlUncontrol from "./components/ControlUncontrol";
import EventHandler from "./components/EventHandler";
import { Route, Routes,Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import MyNewHook from "./components/MyNewHooks";
import Gender from "./components/Gender";
import GetData from "./components/GetData";
import TwoColumnInline from "./components/TwoColumnInline";
import Crud from "./components/Crud";
import { ThemeProvider,useTheme } from "./UseContext/ThemeContext";
import CounterContext from "./UseContext/CounterContext";
import { CounterProvider } from "./UseContext/CounterContext";
import { useContext } from "react";
import { CartProvider } from "./UseContext/CartContext";
import CartApp from "./UseContext/CartApp";
// function App() {
//   const navigate=useNavigate()
//   const handleNavigate=()=>{
//     navigate("/home")
//   }
  const ThemeToggle=()=>{
    const {theme,toggleTheme}=useTheme()
  
  // const themedApp =()=>{
  //   const ToggleTheme=()=>{
  //     const{theme,ToggleTheme}=useTheme()
  //   }
  // }
  return (
    <>
    <h2>The current Theme is:{theme}</h2>
    <button onClick={toggleTheme}>Toggle Theme</button>
  {/* <Header />
    <Welcome />
    <Footer />
    <AuthPage></AuthPage>
    <Test />
    <Hello />
    <ControlUncontrol></ControlUncontrol>
    <EventHandler></EventHandler> */}
    {/* <Link to="/welcome">Welcome</Link>
    <Link to="/hello">Hello</Link>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/auth" element={<AuthPage/>} />
    </Routes>
    <MyNewHook></MyNewHook>
    <Gender></Gender>
    <GetData></GetData> */}
    {/* <TwoColumnInline></TwoColumnInline>
    <Crud></Crud> */}
    </>
  )
}
const Hellow=()=>{
  const{theme,toggleTheme}=useTheme()
  return(
    <>
    <h2>The current theme is:{theme}</h2>
    <button onClick={toggleTheme}>ToggleTheme</button>
    </>
  )
  
}
const CounterApp=()=>{
    const {count,IncrementCount,DecrementCount,ResetCount}=useContext(CounterContext)
    return(
        <div>
            <h1>Counter App</h1>
            <h2>Count :{count}</h2>
            <button onClick={IncrementCount}>Increment</button>
            <button onClick={DecrementCount}>Decrement</button>
            <button onClick={ResetCount}>Reset</button>
        </div>
    )
}
const App = () => (
  <CartProvider>
    <CartApp />
  </CartProvider>
);
export default App
