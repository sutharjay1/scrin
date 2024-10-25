import { Button } from '@/components/ui/button';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Account = () => {
	const router = useRouter();
	return (
		<View className="flex-1 items-center justify-center bg-background">
			<Text className="font-bold text-7xl text-card">Account</Text>

			<Button
				variant="outline"
				onPress={() => router.push('/account-info')}
			>
				<Text className="text-white">Account Info</Text>
			</Button>
		</View>
	);
};

export default Account;
