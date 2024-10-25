// import { cva, type VariantProps } from 'class-variance-authority';
// import React from 'react';
// import {
// 	ActivityIndicator,
// 	Text,
// 	TouchableOpacity,
// 	TouchableOpacityProps,
// } from 'react-native';

// const buttonVariants = cva('flex-row items-center justify-center rounded-md', {
// 	variants: {
// 		variant: {
// 			default: 'bg-primary text-primary-foreground',
// 			destructive: 'bg-destructive text-destructive-foreground',
// 			outline: 'border border-input bg-background text-foreground',
// 			secondary: 'bg-secondary text-secondary-foreground',
// 			ghost: 'bg-transparent text-foreground',
// 			link: 'underline text-primary',
// 			success: 'bg-green-600/80 text-white border-green-800',
// 			error: 'bg-red-600/80 text-white border-red-800',
// 			info: 'bg-blue-600/80 text-white border-blue-800',
// 			warning: 'bg-yellow-500/80 text-black border-yellow-700',
// 		},
// 	size: {
// 		default: 'h-10 px-4 py-2',
// 		sm: 'h-9 rounded-md px-3',
// 		lg: 'h-11 rounded-md px-8',
// 		icon: 'h-10 w-10',
// 	},
// },
// defaultVariants: {
// 	variant: 'default',
// 	size: 'default',
// },
// });

// const textVariants = cva('text-sm font-medium', {
// 	variants: {
// 		variant: {
// 			default: 'text-primary-foreground',
// 			destructive: 'text-destructive-foreground',
// 			outline: 'text-foreground',
// 			secondary: 'text-secondary-foreground',
// 			ghost: 'text-foreground',
// 			link: 'text-primary',
// 			success: 'text-white',
// 			error: 'text-white',
// 			info: 'text-white',
// 			warning: 'text-black',
// 		},
// 	},
// 	defaultVariants: {
// 		variant: 'default',
// 	},
// });

// export interface ButtonProps
// 	extends TouchableOpacityProps,
// 		VariantProps<typeof buttonVariants> {
// 	children: React.ReactNode;
// 	loading?: boolean;
// }

// export const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
// 	(
// 		{ variant, size, disabled, loading, onPress, children, ...props },
// 		ref
// 	) => {
// 		return (
// 			<TouchableOpacity
// 				className={buttonVariants({ variant, size })}
// 				ref={ref}
// 				onPress={onPress}
// 				disabled={disabled || loading}
// 				activeOpacity={0.7}
// 				{...props}
// 			>
// 				{loading ? (
// 					<ActivityIndicator color="#fff" />
// 				) : (
// 					<Text className={textVariants({ variant })}>
// 						{children}
// 					</Text>
// 				)}
// 			</TouchableOpacity>
// 		);
// 	}
// );

// Button.displayName = 'Button';

import React from 'react';
import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	StyleSheet,
	ViewStyle,
	TextStyle,
} from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
	'flex-row items-center justify-center  rounded-lg py-3 px-4',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground',
				destructive: 'bg-destructive text-destructive-foreground',
				outline:
					'border border-input bg-background text-foreground py-3 px-4',
				secondary: 'bg-secondary text-secondary-foreground',
				ghost: 'bg-transparent text-foreground',
				link: 'underline text-primary',
				success: 'bg-green-600/80 text-white border-green-800',
				error: 'bg-red-600/80 text-white border-red-800',
				info: 'bg-blue-600/80 text-white border-blue-800',
				warning: 'bg-yellow-500/80 text-black border-yellow-700',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const textVariants = cva('text-sm font-medium', {
	variants: {
		variant: {
			default: 'text-primary-foreground',
			destructive: 'text-destructive-foreground',
			outline: 'text-foreground',
			secondary: 'text-secondary-foreground',
			ghost: 'text-foreground',
			link: 'text-primary',
			success: 'text-white',
			error: 'text-white',
			info: 'text-white',
			warning: 'text-black',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export interface ButtonProps
	extends TouchableOpacityProps,
		VariantProps<typeof buttonVariants> {
	children: React.ReactNode;
	loading?: boolean;
}

export const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
	(
		{
			variant,
			size,
			disabled,
			loading,
			onPress,
			children,
			style,
			...props
		},
		ref
	) => {
		const buttonStyle = React.useMemo(() => {
			const baseStyle: ViewStyle = {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 8,
			};
			const variantStyle = getVariantStyle(variant!);
			const sizeStyle = getSizeStyle(size!);
			return StyleSheet.flatten([
				baseStyle,
				variantStyle,
				sizeStyle,
				style,
			]);
		}, [variant, size, style]);

		const textStyle = React.useMemo(() => {
			const baseStyle: TextStyle = {
				fontSize: 16,
				fontWeight: '500',
			};
			const variantTextStyle = getTextVariantStyle(variant!);
			return StyleSheet.flatten([baseStyle, variantTextStyle]);
		}, [variant]);

		return (
			<TouchableOpacity
				style={buttonStyle}
				ref={ref}
				onPress={onPress}
				disabled={disabled || loading}
				activeOpacity={0.7}
				className="rounded-lg py-2 px-4 flex flex-row items-center justify-center"
				{...props}
			>
				{loading ? (
					<ActivityIndicator color={getLoadingColor(variant!)} />
				) : (
					<Text style={textStyle}>{children}</Text>
				)}
			</TouchableOpacity>
		);
	}
);

Button.displayName = 'Button';

const getVariantStyle = (variant: string | undefined): ViewStyle => {
	switch (variant) {
		case 'default':
			return { backgroundColor: '#3b82f6' };
		case 'destructive':
			return { backgroundColor: '#ef4444' };
		case 'outline':
			return {
				backgroundColor: 'transparent',
				borderWidth: 1,
				borderColor: '#d1d5db',
			};
		case 'secondary':
			return { backgroundColor: '#6b7280' };
		case 'ghost':
			return { backgroundColor: 'transparent' };
		case 'link':
			return { backgroundColor: 'transparent' };
		case 'success':
			return { backgroundColor: '#22c55e' };
		case 'error':
			return { backgroundColor: '#ef4444' };
		case 'info':
			return { backgroundColor: '#3b82f6' };
		case 'warning':
			return { backgroundColor: '#eab308' };
		default:
			return {};
	}
};

const getSizeStyle = (size: string | undefined): ViewStyle => {
	switch (size) {
		case 'default':
			return { paddingVertical: 8, paddingHorizontal: 16 };
		case 'sm':
			return { paddingVertical: 4, paddingHorizontal: 12 };
		case 'lg':
			return { paddingVertical: 12, paddingHorizontal: 32 };
		case 'icon':
			return { padding: 8, aspectRatio: 1 };
		default:
			return {};
	}
};

const getTextVariantStyle = (variant: string | undefined): TextStyle => {
	switch (variant) {
		case 'default':
		case 'destructive':
		case 'secondary':
		case 'success':
		case 'error':
		case 'info':
			return { color: '#ffffff' };
		case 'outline':
		case 'ghost':
			return { color: '#000000' };
		case 'link':
			return { color: '#3b82f6' };
		case 'warning':
			return { color: '#000000' };
		default:
			return { color: '#000000' };
	}
};

const getLoadingColor = (variant: string | undefined): string => {
	switch (variant) {
		case 'outline':
		case 'ghost':
		case 'link':
		case 'warning':
			return '#000000';
		default:
			return '#ffffff';
	}
};

export default Button;
