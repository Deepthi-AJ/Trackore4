import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CompletedTaskScreen from '../screens/CompletedTasksScreen';
import MyTasksScreen from '../screens/MyTasksScreen';

export const TabNavigator = createBottomTabNavigator({
    CompletedTasks:{
        screen:CompletedTaskScreen,
        navigationOptions:{
            tabBarLabel: "Completed Tasks"
        }
    },
    MyTasks:{
        screen:MyTasksScreen,
        navigationOptions:{
            tabBarLabel: "My Tasks"
        }
    }
})