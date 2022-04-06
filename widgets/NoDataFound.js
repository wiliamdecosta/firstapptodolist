import AnimatedLottieView from 'lottie-react-native';
import { View } from 'react-native';

export default function NoDataFound() {
  return (
    <View style={{alignItems: 'center'}}>
        <AnimatedLottieView source={require('../assets/lottie/no-data-found-json.json')} 
        style={{width:150, height:150,}} autoPlay={true} loop={true} />
    </View>
  );
}
