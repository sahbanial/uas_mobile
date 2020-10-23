import React from 'react';
import Box from '@components/Box';
import Text from '@components/Text';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Header from '@components/Header';
import Colors from '@config/Colors';
import {scale} from 'react-native-size-matters';
import data from '@data/data.json';
import Images from '@config/Images';
import {WIDTH} from '@config/Constant';
import {Badge} from 'react-native-paper';
import BottomNavBar from '@components/BottomNavBar';

const FilItem = ({title}) => (
  <Box padding="m" borderBottomWidth={1} borderColor="gray">
    <Text color="black">{title}</Text>
  </Box>
);
const FilItemInscription = ({title, index}) => (
  <Box
    padding="m"
    borderBottomWidth={1}
    borderColor="gray"
    flexDirection="row"
    alignItems="center">
    <Badge style={{backgroundColor: Colors.primary}}>{index + 1}</Badge>
    <Text color="black" marginLeft="s">
      {title}
    </Text>
  </Box>
);

const FirstRoute = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    setList(data?.preInscriptions);
  }, []);
  return (
    <Box style={[styles.scene]}>
      <ScrollView contentContainerStyle={{paddingBottom: scale(100)}}>
        {list?.map((fl, index) => (
          <FilItemInscription title={`${fl}`} key={fl} index={index} />
        ))}
      </ScrollView>
    </Box>
  );
};
const SecondRoute = () => {
  const [list, setList] = React.useState([]);
  //const navigation
  React.useEffect(() => {
    setList(data?.esiet);
  }, []);
  return (
    <Box style={[styles.scene]}>
      <ScrollView contentContainerStyle={{paddingBottom: scale(100)}}>
        {list?.map((fl) => (
          <FilItem title={fl} key={fl} />
        ))}
      </ScrollView>
    </Box>
  );
};
const initialLayout = {width: Dimensions.get('window').width};
const PageDetails = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Préinscription'},
    {key: 'second', title: 'Fillière'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderHeader = (props) => <TabBar style={{elevation: 0}} {...props} />;
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ImageBackground
        source={Images.uas}
        style={{
          height: scale(150),
          width: WIDTH,
        }}>
        <Box style={{backgroundColor: 'rgba(0,0,0,0.5)'}} height={scale(200)}>
          <Header title="ESIET" opacity={1} />
        </Box>
      </ImageBackground>
      <Box
        flex={1}
        style={{marginTop: -22, borderRadius: 33}}
        borderRadius={100}
        backgroundColor="white">
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={styles.indicatorStyle}
              //renderIcon={this.renderIconTabBar}
              style={styles.navBarCont}
              renderLabel={({route}) => (
                <Text style={styles.navBarText}>{route.title}</Text>
              )}
            />
          )}
          renderHeader={renderHeader}
        />
      </Box>
      <BottomNavBar />
    </Box>
  );
};
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  indicatorStyle: {backgroundColor: Colors.primary, height: scale(3)},
  navBarText: {
    color: Colors.black,
    fontSize: scale(12),
    fontWeight: 'bold',
  },
  navBarCont: {
    backgroundColor: 'white',
    elevation: 0,
    borderRadius: 100,
  },
});
export default PageDetails;
