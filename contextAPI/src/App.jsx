
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './Context/UserContext'

function App() {
  

  return (
    <UserContext>
      <h2>Hello Bro You are on the way of react</h2>
      <Login/>
      <Profile/>
    </UserContext>
  )
}

export default App
