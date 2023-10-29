import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default UsersView = () => {
    const navigation = useNavigation();

    const navigateToProfile = () => {
      navigation.navigate('Profile');
    };
  const data = [
    { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'Jerome' },
    { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', username: 'Jayvee' },
    { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar3.png', username: 'Janes' },
    { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar4.png', username: 'Gmarc' },
    { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', username: 'Vincent' },
    { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'Dole' },
    { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', username: 'Yolo' },
    { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', username: 'Dame' },
    { id: 9, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'Lamtes' },
  ]

  const [users] = useState(data)

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          enableEmptySections={true}
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text style={styles.username}>{item.username}</Text>
                  <View style={styles.iconContent}>
                    <Image
                      style={styles.icon}
                      source={require("../assets/msg1.jpg")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={navigateToProfile}>
            <Text>Return to Profile</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: '#20B2AA',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
  iconContent: {
    width: 60,
    height: 60,
    backgroundColor: '#40E0D0',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00CED1',
    marginLeft: 80
  },
})