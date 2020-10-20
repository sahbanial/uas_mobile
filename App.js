import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import tailwind from 'tailwind-rn';
import Layout from './src/layout/Layout';
import Home from '@containers/Home';
import {NavigationContainer} from '@react-navigation/native';
import Router from '@navigation/Router';
import {ThemeProvider} from '@shopify/restyle';
import theme from "@config/Theme"
const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
