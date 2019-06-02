import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/Home';
import ProfileScreen from './components/Profile';
import EditProfile from './components/EditProfile';

export const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Profile: {screen: ProfileScreen},
        EditProfile: {screen: EditProfile}
    },
    {
        initialRouteName: 'Home'
    }
)




