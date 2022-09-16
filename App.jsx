import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.list}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchbar: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  }
});
