import { Button } from '@/components/ui/button';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountInfo = () => {
	const router = useRouter();
	return (
		<SafeAreaView className="  flex-1">
			<View className="flex-1 items-center justify-center  ">
				<Text className="font-bold text-xl text-card">
					Account Info
				</Text>
			</View>

			<View className="flex-row items-center justify-center px-4 py-2  ">
				<Button
					variant="success"
					onPress={() => router.push('/')}
				>
					<Text>Go to Explore</Text>
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default AccountInfo;
