import React from 'react';
import Box from '@components/Box';
import Text from '@components/Text';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
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
import {BoxShadow} from 'react-native-shadow';
import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';
const shadowOpt = {
  width: scale(330),
  height: scale(105),
  color: '#ddd',
  border: 2,
  radius: 6,
  opacity: 0.2,
  x: 0,
  y: 2,

  style: {marginVertical: 5},
};
const FormItem = ({title}) => (
  <BoxShadow setting={shadowOpt}>
    <Box
      flexDirection="row"
      alignItems="center"
      padding="s"
      borderBottomWidth={1}
      borderColor="gray"
      style={styles.shadow}
      margin="s">
      <Box>
        <Image
          source={{
            uri:
              'https://77f74907-a-62cb3a1a-s-sites.googlegroups.com/site/wwwnewtechnologiecom/cisco-ccna-1-2-3-4/Cisco_CCNA_Logo512.png?attachauth=ANoY7coIy1l2XHXUQcuQ2c0CCxBuVq_nnpZFZXwFUNQHuUtn5D1f_3Ql27pIxdOwwf0Wp52BBMv24mUOuWAXlKw4WLToLOb9F6zOwX6Ar_RX3-G1aXJdTwCRAxfNubEo9eHTCeyWcJHt3O8MZLawxxaFiU5SRz1Yu_RLYI9jYuco-YYuxzJZ1_uGoa1sWwwnvkaW-rY8vJuofMXLJrIpzuj0Xnq9ZeRLXstb7vaBg_XlsciddJ3L1IO7p85HVYZ-iDy7oSaY7C8u&attredirects=0',
          }}
          style={{height: 70, width: 70}}
        />
      </Box>
      <Box marginLeft="s" width={scale(230)}>
        <Text color="black" variant="medium">
          {title}
        </Text>
        <Text textAlign="justify" variant="small" color="gray1">
          As Enterprises migrate toward controller based architectures, the role
          and skills required of a core network engineer are evolving and more
          vital than ever. To prepare for this network transition
        </Text>
      </Box>
    </Box>
  </BoxShadow>
);
const QUERY = gql`
  query {
    getFormations {
      name
      subTitle
      description
      photoUrl
    }
  }
`;
const Formations = (props) => {
  const [index, setIndex] = React.useState(0);
  const {data, loading, ...rest} = useQuery(QUERY);

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ImageBackground
        source={Images.uas}
        style={{
          height: scale(150),
          width: WIDTH,
        }}>
        <Box style={{backgroundColor: 'rgba(0,0,0,0.5)'}} height={scale(200)}>
          <Header title="IAE" opacity={1} />
        </Box>
      </ImageBackground>
      <Box
        flex={1}
        style={{marginTop: -22, borderRadius: 33}}
        borderRadius={100}
        backgroundColor="white">
        <Box padding="m">
          <Text variant="body" textAlign="center" fontWeight="600">
            List de certification des étudiants de L'UAS
          </Text>
          <Box>
            <ScrollView>
              {data?.getFormations?.map((fr) => (
                <FormItem title={fr?.name} />
              ))}
            </ScrollView>
          </Box>
        </Box>
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
  shadow: {
    shadowOffset: {width: 100, height: 100},
    shadowColor: 'black',
    shadowOpacity: 1,
    //elevation: 0.4,
    zIndex: 9999,
    backgroundColor: 'white',
  },
});
export default Formations;
