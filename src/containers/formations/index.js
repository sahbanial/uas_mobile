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
import Header from '@components/Header';
import Colors from '@config/Colors';
import {scale} from 'react-native-size-matters';
import Images from '@config/Images';
import {WIDTH} from '@config/Constant';
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
const FormItem = ({name, photoUrl, description}) => (
  <Box
    flexDirection="row"
    alignItems="center"
    padding="s"
    borderBottomWidth={1}
    borderColor="gray"
    style={styles.shadow}
    elevation={1}
    margin="s">
    <Box>
      <Image
        source={{
          uri: photoUrl
            ? photoUrl
            : 'https://iatranshumanisme.com/wp-content/uploads/2017/12/formation-logo.png',
        }}
        style={{height: 70, width: 70}}
      />
    </Box>
    <Box marginLeft="s" width={scale(230)}>
      <Text color="black" variant="medium">
        {name}
      </Text>
      <Text textAlign="justify" variant="small" color="gray1">
        {description}
      </Text>
    </Box>
  </Box>
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
  function renderEmpty() {
    return (
      <Box flexDirection="row" alignItems="center" justifyContent="center"  marginTop="l">
        <Text variant="body" textAlign="center" color="gray1">List vide</Text>
      </Box>
    );
  }
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
            {data?.getFormations?.length == 0 && renderEmpty()}
            <ScrollView
              contentContainerStyle={{
                paddingBottom: scale(100),
              }}>
              {data?.getFormations?.map((fr, index) => (
                <FormItem {...fr} key={index} />
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
