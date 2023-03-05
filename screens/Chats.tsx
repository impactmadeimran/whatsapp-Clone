import {
  FlatList,
  StyleSheet,
  //   ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { Image } from "@rneui/themed";
// import { ScrollView } from "react-native-virtualized-view";

function Chats() {
  const CHATS = [
    {
      name: "Tony",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non culpa ",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      id: "1",
    },
    {
      name: "Tony",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non culpa ",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      id: "2",
    },
    {
      name: "Tony",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non culpa ",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      id: "3",
    },
    {
      name: "Tony",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non culpa ",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      id: "4",
    },
    {
      name: "Tony",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non culpa ",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      id: "5",
    },
    {
      name: "Tony",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non culpa ",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      id: "6",
    },
    {
      name: "Tony",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non culpa ",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      id: "7",
    },
  ];

  return (
    <View>
      <MainHeader />
      <View style={tw`flex pt-2 h-full bg-white `}>
        <Text style={tw`text-3xl text-black font-bold px-3`}>Chats</Text>
        <View
          style={tw`flex justify-between flex-row mt-2  border-b border-gray-300`}
        >
          <Text style={tw`text-blue-500 text-lg px-3`}>Broadcast Lists</Text>
          <Text style={tw`text-blue-500 text-lg px-3`}>New Group</Text>
        </View>
        <View style={tw`px-3 `}>
          <TouchableOpacity style={tw`flex flex-row items-center py-2`}>
            <Icon name="archive" type="ionicon" size={20} color="gray" />
            <View style={tw`border-b border-gray-300 ml-10 w-full mr-3 py-2`}>
              <Text style={tw`text-black font-semibold text-base `}>
                Archived
              </Text>
            </View>
          </TouchableOpacity>
          {/* <ScrollView> */}
          <FlatList
            // // style={{ flex: 1 }}
            // contentContainerStyle={{ flexGrow: 1 }}
            data={CHATS}
            renderItem={({ item }) => (
              <TouchableOpacity style={[tw` pt-3 flex flex-row items-center`]}>
                <Image
                  source={{ uri: item?.image }}
                  style={tw`w-14 h-14 rounded-full mr-2`}
                />
                <View style={[tw`border-b border-gray-300 flex-1 pb-2 pr-2 `]}>
                  <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-black font-semibold text-base`}>
                      {item?.name}
                    </Text>
                    <Text>Yesterday</Text>
                  </View>
                  <Text style={tw`text-gray-500`}>{item?.message}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item?.id}
          />
          {/* </ScrollView> */}
        </View>
      </View>
    </View>
  );
}

export default Chats;

export const styles = StyleSheet.create({
  //   chatItem: {
  //     // width: "80%",
  //   },
  //   chatContainer: {
  //     width: "100%",
  //     display: "flex",
  //     flexDirection: "row",
  //   },
});
