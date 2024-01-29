import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import images from "../../constants/images";
import { SIZES } from "../../constants/theme";

const HeroSection = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.HeroText}>
          <Text style={styles.HeaderText}>Secure the Online World</Text>
          <Text style={styles.TextBody}>
            Lets get you started with Cyber Security
          </Text>
          <TouchableOpacity style ={styles.enrollButton}>
            <Text style={{textAlign:"center"}}>Enroll for Free</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={images.Group} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(30, 0, 148, 1), rgba(45, 5, 206, 1)",
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: "row",
    width: Dimensions.get('window').width,
  },
  HeroText: {
    paddingRight: 20,
  },
  HeaderText: {
    color: "white",
    fontSize: SIZES.large,
    fontWeight: "500"
  },
  TextBody: {
    color: "white",
    fontSize: SIZES.small,
    
  },

  enrollButton :{
backgroundColor:"white",
width:120,
padding:5,
borderRadius:20,
marginTop:20


  }
});
export default HeroSection;
