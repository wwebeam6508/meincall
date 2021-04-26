import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './pages/login'
import MainApp from './pages/main'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} hideNavBar={true}/>
         <Scene key = "main" component = {MainApp} title = "" hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes