import { Text, View } from "react-native";
import React from "react";
import { Header } from "@rneui/base";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import Feather from "react-native-vector-icons/Feather";

const MainHeader = () => {
  Feather.loadFont().catch(err => console.log(err));
  return (
    <View>
      <Header
        backgroundColor="white"
        leftComponent={<Text style={tw`text-blue-500 text-lg `}>Edit</Text>}
        rightComponent={
          <View style={tw`flex flex-row items-center justify-between w-full `}>
            <Icon
              name="camera-outline"
              type="ionicon"
              color={"#3b83f6"}
              size={30}
            />
            <Feather name="edit" color={"#3b83f6"} size={25} />
            {/* <Icon name="edit-2" type="ionicon" color={"#3b83f6"} size={30} /> */}
          </View>
        }
      />
    </View>
  );
};

export default MainHeader;
