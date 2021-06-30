import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import { color } from "react-native-reanimated";

const IndexScreen = (props) => {
  return  (
      <View>
          <Button
              title='First Screen'
              onPress={()=> props.navigation.navigate('Home') }
          />
          <Button 
            title="Second Screen" 
            onPress={()=> props.navigation.navigate('Second') }
          />
          
        </View>
  );
};

const styles = StyleSheet.create({
  
});

export default IndexScreen;