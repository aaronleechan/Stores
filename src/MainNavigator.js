import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/Home';
import ProfileScreen from './components/Profile';
import EditProfileScreen from './components/EditProfile';
import ThirdPartySignUpScreen from './components/ThirdPartySignUp'
import ContactUsScreen from './components/ContactUs'
import MenuScreen from './components/Menu'
import FooterScreen from './components/common/FooterComponent'
import CreateFoodMenuScreen from './components/createFoodMenu'
import MenuListScreen from './components/MenuList'
import OrderPageScreen from './components/OrderPage'
import CompleteScreen from '../src/components/Complete'

export const MainNavigator = createStackNavigator({
        Footer: {screen: FooterScreen},
        Home: {screen: HomeScreen},
        Profile: {screen: ProfileScreen},
        EditProfile: {screen: EditProfileScreen},
        ThirdPartySignUp: {screen: ThirdPartySignUpScreen},
        ContactUs: {screen: ContactUsScreen},
        Menu: {screen: MenuScreen},
        CreateFoodMenu: {screen: CreateFoodMenuScreen},
        MenuList: {screen: MenuListScreen},
        OrderPage:{screen: OrderPageScreen},
        Complete: {screen: CompleteScreen}
    },
    {
        initialRouteName: 'Home'
    }
)



