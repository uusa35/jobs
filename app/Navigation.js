/**
 * Created by usamaahmed on 4/6/17.
 */

import { StackNavigator , TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import HomeScreenWithData from './screens/HomeScreen'
import HomeFlatListWithData from './screens/HomeFlatList'
import LoginScreenWithData from './screens/login/LoginScreen'
import ItemCreateWithData from './screens/item/ItemCreate';
import VideoContent from './screens/video/VideoContent';
import ItemShow from './screens/item/ItemShow';
import Contactus from './screens/contactus/Contactus';
import Aboutus from './screens/aboutus/Aboutus';
import UserCard from './screens/user/UserCard';
import UserMetaEditScreen from './screens/user/UserMetaEditScreen';
import HomeMapScreen from './screens/map/HomeMapScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import SearchResultScreen from './screens/map/SearchResultScreen';
import UsersSwipe from './screens/swipe/UsersSwipe';

const navigationOptions = {
    headerMode: 'screen'
}

const Navigation = StackNavigator({
    Home: {
        screen: HomeScreenWithData,
        navigationOptions: {
            title: 'HomeScreen Title',
        }
    },
    HomeMapScreen: {
        screen: HomeMapScreen
    },
    SearchResultScreen: {
        screen: SearchResultScreen,
        navigationOptions: {
            title: 'Map Results Search'
        }
    },
    HomeFlatList: {
        screen: HomeFlatListWithData,
        navigationOptions: {
            title: () =>'HomeFlatList Title'
        }
    },
    LoginScreen: {
        screen: LoginScreenWithData,
        navigationOptions: {
            title: 'Login Screen',
        },
    },
    VideoContent: {
        screen: VideoContent,
        navigationOptions: () => ({
            title: 'VideoContent',
            headerVisible: false
        })
    },
    //VideoLiveStream: {screen: VideoLiveStream},
    ItemCreate: {
        screen: ItemCreateWithData,
        navigationOptions: {
            title: 'Item create ? !!!'
        }
    },
    UserCard: {
        screen: UserCard,
        navigationOptions: ({navigation}) => ({
            title: "User Cards :)"
        })
    },
    UserMetaEditScreen: {
        screen: UserMetaEditScreen,
        navigationOptions: ({navigation}) => ({
            title: "User Meta Edit"
        })
    },
    ItemShow: {screen: ItemShow},
    Contactus: {screen: Contactus},
    Aboutus: {screen: Aboutus},
    UsersSwipe : {
        screen : UsersSwipe
    },
}, {
    lazyLoad: true,
    headerMode: 'screen'
});


const tabNav = TabNavigator({
    welcome: {
        screen: WelcomeScreen
    },
    auth: {
        screen: AuthScreen
    },
    main: {
        screen: Navigation
    }
});


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(tabNav);