import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default ProfileView = () => {
    const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Friends');
  };
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={require("../assets/profile1.jpg")}
          />
          <Text style={styles.name}>Gmarc Rocales</Text>
        </View>
      </View>

      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Photos</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Followers</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Friends</Text>
          <Text style={styles.count}>200</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <TouchableOpacity style={styles.buttonContainer} onPress={navigateToProfile}>
            <Text>View Online Friends</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
        <View style={styles.bodyContent}>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <View style={styles.body}>
        <View style={styles.bodyContent}>
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToFeed}>
            <Text>View Feed</Text>
          </TouchableOpacity>
          </View>
          </View>
          </View>
          </View>
        <View style={styles.body}>
        <View style={styles.bodyContent}>
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToLogin}>
            <Text>Logout</Text>
          </TouchableOpacity>
          </View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00CED1',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 5,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 21,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#00CED1',
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
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
    marginBottom:50
  },
  description: {
    fontSize: 20,
    color: '#00CED1',
    marginTop: 10,
    textAlign: 'center',
  },
})
