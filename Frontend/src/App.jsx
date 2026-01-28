import {Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Signup from './Auth/Signup'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="Pushpa"/>}/>
        <Route path='/About' element={<About name="Pushpa" age={19} dept="CSD"/>}></Route>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        {/*Hooks*/}
        <Route path='/hook' element={<Hook/>}>
          <Route path='useState' element={<UseState/>}/>
          <Route path='useEffect' element={<UseEffect/>}/>
          <Route path='useEffectApi' element={<UseEffectApi />}/>
          <Route path='useRef' element={<UseRef/>}/>
          <Route path='useReducer' element={<UseReducer/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App