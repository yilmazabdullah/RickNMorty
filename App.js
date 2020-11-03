// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Karakter from './Karakter';
import KarakterBilgileri from './KarakterBilgileri';

const Stack = createStackNavigator();

// Burası Navigation Sayfası

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: 'Anasayfa',
						headerStyle: {
							backgroundColor: '#F7DC6F',
						},
						headerTintColor: '#000',
						headerTitleStyle: {
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: 30,
						},
					}}
				/>
				<Stack.Screen
					name="Karakter"
					component={Karakter}
					options={{
						title: 'Bölüm Bilgileri',
						headerStyle: {
							backgroundColor: '#F7DC6F',
						},
						headerTitleStyle: {
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: 30,
						},
					}}
				/>
				<Stack.Screen
					name="KarakterBilgileri"
					component={KarakterBilgileri}
					options={{
						title: 'Karakter Bilgileri',
						headerStyle: {
							backgroundColor: '#F7DC6F',
						},
						headerTitleStyle: {
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: 30,
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
