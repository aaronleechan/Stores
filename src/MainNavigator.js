import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/Home';
import ProfileScreen from './components/Profile';
import EditProfile from './components/EditProfile';
import ThirdPartySignUp from './components/ThirdPartySignUp'

export const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Profile: {screen: ProfileScreen},
        EditProfile: {screen: EditProfile},
        ThirdPartySignUp: {screen: ThirdPartySignUp},
    },
    {
        initialRouteName: 'Home'
    }
)




