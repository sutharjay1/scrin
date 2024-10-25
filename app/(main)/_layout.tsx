import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Layout = () => {
	return (
		<SafeAreaView className="bg-background flex-1">
			<Slot />
		</SafeAreaView>
	);
};

export default Layout;
