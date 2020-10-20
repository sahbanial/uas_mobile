import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '@config/Colors';
import tailwind from 'tailwind-rn';
import Box from './Box';
import Text from './Text';
const {width,height} =Dimensions.get("window");
const CardHome = ({name}) => {
  return (
    <TouchableOpacity>
      <Box
       
       
        margin="s"
        
        borderRadius={15}
       
        backgroundColor="white"
        width={width/3 -20}
        flexDirection="row"
        justifyContent="center"
        >
        <Text variant="medium" color="primary" >{name}</Text>
      </Box>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scale(150),
    width: scale(150),
    backgroundColor: Colors.white,
  },
});
export default CardHome;
