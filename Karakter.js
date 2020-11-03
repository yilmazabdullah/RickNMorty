import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
const dizgi = [];
function Karakter({ route, navigation }) {
	const { item, id, name, date, create, episode, karakterler, dizichrt } = route.params;
	// Ana sayfadan gelen veriler
	// Burada episode ye ait karakterleri listeletmeye çalıştım aslında konsola yazıyor--->>>>
	const getA = (gelen) => {
		axios.get(item.characters[gelen]).then(({ data }) => {
			for (let index = 0; index < item.characters.length; index++) {
				dizgi[index] = data.name;
			}
		});
	};
	// Burada episode ye ait karakterleri listeletmeye çalıştım aslında konsola yazıyor---<<<<
	return (
		// //Anasayfadan gelen verilerin istelendiği alan---->>>>
		<View style={styles.container}>
			<Text style={styles.text}>Bölüm Adı : {name}</Text>
			<Text style={styles.text}>Tarih : {date}</Text>
			<Text style={styles.text}>Oluşturulma Tarihi : {create}</Text>
			<Text style={styles.text}>Bölüm : {episode}</Text>

			{/* //Anasayfadan gelen verilerin istelendiği alan----<<<<< */}

			<Text style={styles.baslik}>Karakterler</Text>
			<FlatList
				data={dizichrt}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => {
					return (
						<Text
							style={styles.text}
							onPress={() =>
								navigation.navigate('KarakterBilgileri', {
									kisi: karakterler,
									kid: item.id,
									kimg: item.image,
									kname: item.name,
									kstatus: item.status,
									kspecies: item.species,
									kgender: item.gender,
									ktype: item.type,
								})
							}
						>
							{item.id}.{item.name}
							{/* //Burada var olan karakterleri listeledim */}
						</Text>
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
	container: {
		flex: 1,
		backgroundColor: '#ddd',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 0,
	},
	baslik: {
		fontSize: 30,
		borderWidth: 1,
		borderRadius: 10,
		marginRight: 20,
		marginLeft: 20,
		marginTop: 5,
		fontWeight: '600',
		marginBottom: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		backgroundColor: '#F7DC6F',
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
export default Karakter;
