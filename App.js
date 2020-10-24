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
import theme from '@config/Theme';
import BottomNavBar from '@components/BottomNavBar';
import {NavigationProvider} from 'context/navigationContext';
import {ApolloProvider} from 'react-apollo';
import client from '@config/ApolloClient';
const App: () => React$Node = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <Layout>
            <Router />
          </Layout>
        </NavigationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
