import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const url = 'https://rickandmortyapi.com/api';
function Home({ navigation }) {
	const [bolum, setBolum] = useState([]);
	const [chrt, setChrt] = useState([]);

	useEffect(() => {
		axios.get(url + '/episode').then(({ data }) => {
			const dizi = data.results;
			setBolum(dizi);
		});

		axios.get(url + '/character').then(({ data }) => {
			const dizic = data.results;
			setChrt(dizic);
		});
	}, []);

	return (
		<View style={styles.contain}>
			<Image style={{ width: '100%', height: 500 }} source={require('./image/1.jpeg')} />
			<FlatList
				data={bolum}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => {
					return (
						<View>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Karakter', {
										id: item.id,
										name: item.name,
										date: item.air_date,
										create: item.created,
										episode: item.episode,
										karakterler: item.characters,
										dizichrt: chrt,
										item: item,
									})
								}
							>
								<Text style={styles.text}>
									{item.id} .{item.name}
								</Text>
							</TouchableOpacity>
						</View>
					);
				}}
				ListFooterComponent={() => {
					return <Text style={styles.end}>--SON--</Text>;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	contain: {
		flex: 1,
		backgroundColor: '#ddd',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 0,
	},
	text: {
		fontSize: 20,
		borderWidth: 1,
		borderRadius: 10,
		marginRight: 20,
		marginLeft: 20,
		marginTop: 5,
		marginBottom: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		backgroundColor: '#F7DC6F',
	},
	end: {
		fontSize: 30,
		borderWidth: 1,
		borderRadius: 10,
		marginRight: 20,
		marginLeft: 20,
		marginTop: 5,
		marginBottom: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		textAlign: 'center',
		backgroundColor: '#ddd',
	},
});
export default Home;
