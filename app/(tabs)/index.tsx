import Button from '@/components/ui/button';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
	return (
		<View className="flex-1 items-center justify-center bg-zinc-950">
			<Text className="font-bold text-7xl text-white">Home</Text>
			<Link href="/account">
				<Button
					variant="outline"
					onPress={() => {}}
				>
					<Text className="text-white">Account</Text>
				</Button>
			</Link>
		</View>
	);
};

const SettingsScreen = () => {
	return (
		<View className="flex-1 items-center justify-center bg-zinc-950">
			<Text className="font-bold text-7xl text-white">Settings</Text>
		</View>
	);
};

const Tab = createMaterialTopTabNavigator();

const App = () => {
	return (
		<SafeAreaView className="flex-1 bg-zinc-950">
			<Text className="font-bold text-2xl text-white text-center my-2">
				Tabs
			</Text>
			<Tab.Navigator
				screenOptions={{
					tabBarStyle: { backgroundColor: '#09090b' },
					tabBarLabelStyle: { color: 'white' },
					tabBarIndicatorStyle: { backgroundColor: '#fff20d' },
				}}
				className="bg-background text-text"
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
				/>
				<Tab.Screen
					name="Settings"
					component={SettingsScreen}
				/>
			</Tab.Navigator>
		</SafeAreaView>
	);
};

export default App;
