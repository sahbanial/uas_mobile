import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Box from './Box';
import Text from './Text';
import {scale} from 'react-native-size-matters';
import Images from '@config/Images';
import { withNavigation } from 'react-navigation';
const NAVBAR_HEADER_HEIGHT = 50;
const Header=(props) =>{
  const {title, opacity} = props;
  return (
    <Box>
      <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      paddingLeft="s"
      opacity={opacity}
      height={scale(NAVBAR_HEADER_HEIGHT)}>
      <TouchableOpacity onPress={()=>props?.navigation?.goBack()}>
        <Image
          source={Images.icons.goBack}
          style={{height: scale(16), width: scale(20)}}
          resizeMode="contain"
          tintColor="white"
        />
      </TouchableOpacity>

      
    </Box>
    <Box flexDirection="row" justifyContent="center" >
    <Text variant="header" marginLeft="s" color="white">
        {title}
      </Text>
    </Box>
    
    </Box>
    
  );
}

export default withNavigation(Header);
