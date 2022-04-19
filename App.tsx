import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const assetSource = Image.resolveAssetSource(require('./assets/icon.png'));

  useEffect(() => {
    Image.getSize('https://avatars.githubusercontent.com/u/747840?s=96&v=4', (w, h) => {
      console.log({w, h});
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} />
      <Image source={{uri: 'https://avatars.githubusercontent.com/u/747840?s=96&v=4'}} />
      <Text>Hello Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
