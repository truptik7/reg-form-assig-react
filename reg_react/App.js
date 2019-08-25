import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Button, Text,ScrollView,Alert } from 'react-native';
 
export default class Project extends Component {
 
constructor() {
 
    super()
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: '',
      UserFirstName:'',
      UserLastName:'',
      UserAddress:'',
      UserPhone_no:'',
      UserOne_word:'',
      UserHobbies:'',
      Userabout:'',
      Userprogrammer:''
 
    }
 
  }
 
UserRegistrationFunction = () =>{
 
  fetch('http:/192.168.0.123/User_Project/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      name: this.state.UserName,
  
      email: this.state.UserEmail,
  
      password: this.state.UserPassword,

      FirstName: this.state.UserFirstName,

      LastName: this.state.UserLastName,

      Address: this.state.UserAddress,

      PhoneNo: this.state.UserPhoneNo,

      OneWord: this.state.UserOneWord,
      
      Hobbies: this.state.UserHobbies,

      about: this.state.Userabout,

      programmer: this.state.Userprogrammer
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
 
}
 
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
 
          <Text style= {styles.title}>User Registration Form</Text>
  
          <TextInput placeholder="Enter User Name"
          onChangeText={name => this.setState({UserName : name})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput placeholder="Enter User Email"
          onChangeText={email => this.setState({UserEmail : email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
 
        <TextInput placeholder="Enter User Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />
        
        <Text style= {styles.title}>Personal Details</Text>
        
        <TextInput placeholder="Enter User  FirstName"
          onChangeText={FirstName => this.setState({UserFirstName : FirstName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
         />
        
        <TextInput
          placeholder="Enter User  LastName"
          onChangeText={LastName => this.setState({UserLastName : LastName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter User  Address"
          onChangeText={Address => this.setState({UserAddress : Address})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput placeholder="Enter User  Phone_no"
          onChangeText={PhoneNo => this.setState({UserPhoneNo : PhoneNo})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput placeholder="Describe yourself in one Word "
          onChangeText={OneWord => this.setState({UserOneWord : OneWord})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput placeholder="Hobbies"
          onChangeText={Hobbies => this.setState({UserHobbies : Hobbies})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput placeholder="Talk about your self"
          onChangeText={about => this.setState({Userabout : about})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput  placeholder="What you think you can do as a programmer"
          onChangeText={programmer => this.setState({Userprogrammer : programmer})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} />
      </View>

    </ScrollView>
  );
  }//close reneder

}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 10
},
 
TextInputStyleClass: {
 
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#2196F3',
  borderRadius: 5 ,
},

title:{

  fontSize: 22, 
  color: "#009688", 
  textAlign: 'center', 
  marginBottom: 15
}

});