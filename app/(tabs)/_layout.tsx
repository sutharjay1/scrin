import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#1D4ED8',
				tabBarInactiveTintColor: '#9CA3AF',
				tabBarStyle: {
					backgroundColor: 'black',
					borderTopWidth: 1,
					borderTopColor: '#E5E7EB',
					elevation: 5,
					height: 60,
					paddingBottom: 5,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					marginBottom: 5,
					fontWeight: '500',
				},
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							size={20}
							name="home"
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: 'Explore',
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							size={20}
							name="compass"
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: 'Account',
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							size={20}
							name="user"
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default Tab;
