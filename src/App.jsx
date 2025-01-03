import React ,{useState}from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Adduser from './components/Adduser'
import EditUser from './components/EditUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Dashboardcontextcomponent from './context/Dashboardcontextcomponent'
export const UserContext = React.createContext();




function App() {
  let [user,setUser] = useState([
    {
      id:1,
      name:"mani",
      email:"mani@gmail.com",
      age:"45",
      gender:"Male",
      subscription:true
    },
    {
      id:2,
      name:"naveen",
      email:"naveen@gmail.com",
      age:"20",
      gender:"Male",
      subscription:false
    },
    {
      id:3,
      name:"athmaj",
      email:"athmaj@gmail.com",
      age:"56",
      gender:"Male",
      subscription:true
    },
    {
      id:4,
      name:"gopal",
      email:"gopal@gmail.com",
      age:"78",
      gender:"Male",
      subscription:false
    },
  ])
  return <div id="wrapper">
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboardcontextcomponent>
                                  <Dashboard/>
                              </Dashboardcontextcomponent>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Adduser' element={<Adduser />}/>
      <Route path='/Edit/:id' element={<EditUser />}/>
      <Route path='*' element ={<Navigate to = '/' /> }/>
    </Routes>
    </UserContext.Provider >
    </BrowserRouter>
    
    </div>
}

export default App