import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './pages/login'
import MainApp from './pages/main'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "main" component = {MainApp} title = "" />
      </Scene>
   </Router>
)
export default Routes