import React from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';
import {auth} from './firebase';
export const Login = () => {
  const [valueEmail, onChangeTextEmail] = React.useState (
    'horaciomoreno10@gmail.com'
  );
  const [valuePassword, onChangeTextPassword] = React.useState ('123123');

  const _handleLogoutButtonPress = () => {
    try {
      auth.signInWithEmailAndPassword (valueEmail, valuePassword);
      auth.onAuthStateChanged (user => {
        //TO DO guardar info del usuario necesaria para hacer el refresco de los tokens,
        console.log (user);
      });
    } catch (error) {
      console.log (error.toString (error));
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        padding: 20,
      }}
    >
      <TextInput
        style={{height: 40, fontSize: 20, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeTextEmail (text)}
        value={valueEmail}
        autoCompleteType="email"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeTextPassword (text)}
        value={valuePassword}
        secureTextEntry
      />
      <Button title="Login with email" onPress={_handleLogoutButtonPress} />
    </View>
  );
};
