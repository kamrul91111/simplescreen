import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

//icons
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* image and mainHeader */}
      <View stylel={styles.mainContainer}>
        <Grid>
          <Row>
            <Col size={0.2} style={{ alignItems: 'center',}}>
               <FontAwesome name="user-circle" size={20} color="black" style={{marginTop: 50,}} />
            </Col>
            <Col style={{ alignItems: 'center', padding: 10, marginLeft: -20}}>
               <Text style={styles.mainHeader}>Account Details</Text>
            </Col>
          </Row>
        </Grid>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bedbanana-profile_image-5e4c5d9f2fb86881-300x300.jpeg' }} style={styles.userImage} />
        <Text style={{ fontSize: 25, textAlign: 'center' }}>Seymour Butts</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.labels}>User Name</Text>
        <Text style={styles.fields}>Seymour Butts</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.labels}>Email</Text>
        <Text style={styles.fields}>seoymoure@gmail.com</Text>
      </View>
      {/* button */}
      <View style={{ alignItems: 'center', padding: 10 }}>
        <TouchableOpacity 
          onPress={()=> console.log('huehuehue')}
          style={{ backgroundColor: '#146b43', width: 200, height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
          <Text style={{ textAlign: 'center', marginTop: 5, color: 'white' }}  >Save Changes</Text>
        </TouchableOpacity>
      </View>
      {/* divider */}
      <View
        style={{
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        paddingBottom: 40,
      }}
      />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Deactivate Account</Text>
        <Text style={{ fontSize: 10 }}>Delete your account and all account data</Text>
        <TouchableOpacity 
            onPress={()=> console.log('Deletion')}
            style={{ backgroundColor: 'red', width: 200, height: 40, borderRadius: 20, marginTop: 10, borderWidth: 1, borderColor: 'black' }}>
          <Text style={{ textAlign: 'center', marginTop: 10, color: 'white' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    margin: 20
  },
  mainContainer: {
    marginTop: 26,
    alignContent: 'center',
  },
  mainHeader: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20
  },
  userImage: {
    height: 290,
    width: 290,
    borderRadius: 200,
  },
  labels: {
    textAlign: 'left'
  },
  fields: {
    backgroundColor: 'lightgrey',
    //marginTop: 5,
    padding: 7,
    borderRadius: 10,
    fontSize: 15
  }
});

export default App;