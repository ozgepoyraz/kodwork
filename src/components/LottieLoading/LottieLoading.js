import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const LottieLoading = () => {
  return (
    <AnimatedLottieView
      autoPlay={true}
      style={{marginBottom: 40}}
      source={require('../../../asset/loading.json')}
    />
  );
};

export default LottieLoading;
