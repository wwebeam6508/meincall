import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLanguage } from '../../redux/action'
import Map from './map'
import List from './list'
import Setting from './setting'

const Tab = createBottomTabNavigator();

class MainApp extends React.Component{
   render() {
      const state = {
         language:this.props.store.language
      }
      return (
         <NavigationContainer>
            <Tab.Navigator state={state}>
               <Tab.Screen name="Map" children={()=><Map state={state}/>}/>
               <Tab.Screen name="List" children={()=><List state={state}/>}/>
               <Tab.Screen name="Settings" children={()=><Setting state={state}/>}/>
            </Tab.Navigator>
         </NavigationContainer>
      )
   }
}

const mapStateToProps = state => ({
   store: state.app,
});
const ActionCreators = Object.assign(
   {},
   changeLanguage,
);
const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainApp)