import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './settings/Settings';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name="Home" component={}/> */}
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}
export default MyTabs;