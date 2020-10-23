import {WIDTH} from '@config/Constant';
import Images from '@config/Images';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '@config/Colors';
import Box from './Box';
import Text from './Text';
import {withNavigation} from 'react-navigation';
import {useNavigationContext} from 'context/navigationContext';

const tabs = {
  home: 'HOME',
  esiet: 'ESIET',
  fseg: 'FSEG',
  form: 'FORM',
};
const TabItem = ({title, active, value, handleTab}) => {
  return (
    <TouchableOpacity onPress={() => handleTab(value)}>
      <Box
        backgroundColor={active === value ? 'primarySecond' : null}
        justifyContent="center"
        alignItems="center"
        borderRadius={33}
        width={100}
        margin="s"
        height={50}
        flexDirection="row">
        <Text variant="medium" color="white" fontWeight="600">
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
const BottomNavBar = (props) => {
  const {navigation} = props;
  const {activeTab, toggleTab} = useNavigationContext();
  function handleTab(tab) {
    toggleTab(tab);
    let obj =null;
    if(tab ==tabs.esiet){
        navigation.navigate('Esiet',obj);
    }
    if(tab ==tabs.fseg){
        navigation.navigate('Fseg',obj);
    }
   
  }
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="primary"
      style={styles.container}>
      <Box
        backgroundColor="primarySecond"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        padding="s">
        <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
          <Image
            source={Images.icons.home}
            style={{height: 30, width: 30}}
            tintColor={'#fff'}
          />
        </TouchableOpacity>
      </Box>

      <TabItem
        title="ESIET"
        value={tabs.esiet}
        active={activeTab}
        handleTab={handleTab}
      />
      <TabItem
        title="FSEG"
        value={tabs.fseg}
        active={activeTab}
        handleTab={handleTab}
      />
      <TabItem
        title="IAE"
        value={tabs.form}
        active={activeTab}
        handleTab={handleTab}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scale(60),
  },
});
export default withNavigation(BottomNavBar);
