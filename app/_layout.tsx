import { Slot, Stack, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';
import { Button } from '@/components/ui/button';

const Layout = () => {
	const router = useRouter();

	return (
		<SafeAreaView className="bg-background flex-1">
			<Slot />
		</SafeAreaView>
	);
};

export default Layout;
