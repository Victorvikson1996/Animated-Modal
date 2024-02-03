import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { Button, imageUrls } from '../components';
import { Card } from '../components';
import { Entypo, AntDesign } from '@expo/vector-icons';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={imageUrls}
        renderItem={({ item }) => <Card imageUrl={item} />}
        keyExtractor={(item, index) => item.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 60,
          right: 40,
          height: 70,
          backgroundColor: '#fff',
          borderRadius: 100
        }}
      >
        <AntDesign name='plus' size={24} color='black' />
      </View>
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
  }
});
