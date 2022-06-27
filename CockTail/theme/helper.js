import {StyleSheet, Platform, Dimensions} from 'react-native';
// TODO can't import metrics here because metrics imports size() from here

const {width} = Dimensions.get('window');

const size = (size, increase = false) => {
  const normalWidth = Platform.isPad ? 768 : 375;
  const ratio = normalWidth / width;
  // if (!increase && ratio < 1) ratio = 1;

  // return size;
  return Math.ceil(size / ratio);
};

//const sizeHeight = ()

export default {size};
