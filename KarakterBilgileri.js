import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';

function KarakterBilgileri({ route, navigation }) {
	const { kisi, kid, kimg, kname, kstatus, kspecies, kgender, ktype } = route.params;

	return (
		<View style={styles.contain}>
			<Image style={{ width: '100%', height: 500 }} source={{ uri: kimg }} />
			<View style={{ backgroundColor: '#F7DC6F' }}>
				<Text style={{ fontSize: 20 }}>
					<Text style={{ fontWeight: '600', color: 'red' }}>Name :</Text>
					{kname}
				</Text>
				<Text style={{ fontSize: 20 }}>
					<Text style={{ fontWeight: '600', color: 'red' }}>Gender :</Text>
					{kgender}
				</Text>
				<Text style={{ fontSize: 20 }}>
					<Text style={{ fontWeight: '600', color: 'red' }}>Status :</Text>
					{kstatus}
				</Text>
				<Text style={{ fontSize: 20 }}>
					<Text style={{ fontWeight: '600', color: 'red' }}>Species :</Text>
					{kspecies}
				</Text>

				<Text style={{ fontSize: 20 }}>
					<Text style={{ fontWeight: '600', color: 'red' }}>Type :</Text>
					{ktype}
				</Text>
			</View>

			<Text
				style={{
					fontSize: 30,
					borderWidth: 1,
					borderRadius: 10,
					marginTop: 5,
					paddingBottom: 5,
					backgroundColor: '#ddd',
					color: 'red',
					width: '100%',
				}}
				onPress={() => navigation.navigate('Home')}
			>
				Anasayfa dönmek için tıklayınız..
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	contain: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'flex-start',
	},
});
export default KarakterBilgileri;
