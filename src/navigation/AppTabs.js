import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

//Import screens and stacks.
import {
    HomeStack,
    DiscoveryStack
} from './ApplicationStacks';
import {
    Profile,
    Wishlist,
    Services
} from '../view/app';

const tabNavigationConfig = { 
    tabBarOptions: {
        activeTintColor: '#f68e8d',
        inactiveTintColor: '#9a9a9a',
        tabStyle: {
            borderTopWidth: 1,
            borderTopColor: '#e5e5e5', 
        }
    },
    initialRouteName: 'Discover',
    animationEnabled: true,
};

const tabBarIconFormatter = ({ horizontal, tintColor }, iconName) => {
    return <Ionicons 
                name={iconName} 
                size={horizontal ? 20 : 25} 
                color={tintColor} />
};

export default AppTabs = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'For You',
                tabBarIcon: (config )=> tabBarIconFormatter(config, 'ios-home')
            }
        },
        Discover: {
            screen: DiscoveryStack,
            navigationOptions: {
                tabBarLabel: 'Discover',
                tabBarIcon: (config )=> tabBarIconFormatter(config, 'ios-search')
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: (config )=> tabBarIconFormatter(config, 'ios-person')
            }
        },
        Wishlist: {
            screen: Wishlist,
            navigationOptions: {
                tabBarLabel: 'Wishlist',
                tabBarIcon: (config )=> tabBarIconFormatter(config, 'ios-heart-empty')
            }
        },
        Services: {
            screen: Services,
            navigationOptions: {
                tabBarLabel: 'Services',
                tabBarIcon: (config )=> tabBarIconFormatter(config, 'ios-pin')
            }
        },
    },
    tabNavigationConfig
);