import A from '../screens/ScreenA.jsx'
import B from '../screens/ScreenB.jsx'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

export default function TabNavigator(){
    return(
        <Stack.Navigator initialRouteName='A' screenOptions={{headerShown: false}}>
            <Stack.Screen initialParams={{screen: 'Tabs/A',}} options={{unmountOnBlur: true,}} name="A" component={A}/>
            <Stack.Screen initialParams={{screen: 'Tabs/B',}} options={{unmountOnBlur: true,}} name="B" component={B}/>            
        </Stack.Navigator>
    )
}