import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../homepage'; // Adjust the path as necessary
import Explore from './explore'; // Adjust the path as necessary

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
      {/* Add other screens as needed */}
    </Tab.Navigator>
  );
}
