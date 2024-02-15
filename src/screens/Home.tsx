import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import { imageUrls } from '../components';
import { Card } from '../components';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={imageUrls}
        renderItem={({ item }) => <Card imageUrl={item} />}
        keyExtractor={(item, index) => item.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity activeOpacity={1} style={styles.selector}>
        <Image
          source={require('../assets/images/add.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    justifyContent: 'space-around'
  },
  selector: {
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 60,
    right: 40,
    height: 70,
    backgroundColor: 'black',
    borderRadius: 100
  },
  image: {
    width: 30,
    height: 30,
    tintColor: 'white'
  }
});
