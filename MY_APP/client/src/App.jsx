import {BrowserRouter,Routes,Route} from "react-router-dom"
import Counter from "./components/counter"
import StopWatch from "./components/StopWatch"
import Login from "./components/Login"
import Admin from "./components/Admin"
import User from "./components/User"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/stopwatch" element={<StopWatch/>}/>
      <Route path="/mycart" element={<h1>Cart Page</h1>}/>
      <Route path="/myorders" element={<h1>My Orders Page</h1>}/>
      <Route path="/settings" element={<h1>Settings Page</h1>}/>
      <Route path="*" element={<h1>Error : Page Not Found</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
