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

const FilItem = ({title}) => (
  <Box padding="m" borderBottomWidth={1} borderColor="gray">
    <Text>{title}</Text>
  </Box>
);

const FirstRoute = () => <Box style={[styles.scene]} />;
const SecondRoute = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    setList(data?.esiet);
  }, []);
  return (
    <Box style={[styles.scene]}>
      <ScrollView>
        {list?.map((fl) => (
          <FilItem title={fl} key={fl} />
        ))}
      </ScrollView>
    </Box>
  );
};
const initialLayout = {width: Dimensions.get('window').width};
const PageDetails = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Préinscription'},
    {key: 'second', title: 'Felliére'},
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
        <Header title="FSEG" opacity={1} />
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
