import * as React from 'react';
import {Text, View} from 'react-native'
import Fb from "./screens/fb.js"
import Instagram from "./screens/in.js"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
 export default class App extends React.Component{
   render(){
     return(
      <AppContainer/>
     )
   }
 }
 const tabNavigator=createBottomTabNavigator({
   Fb:{screen:Fb},
   Instagram:{screen:Instagram}
 })
 const AppContainer=createAppContainer(tabNavigator)
