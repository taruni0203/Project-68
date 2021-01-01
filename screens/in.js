import React from 'react';
import { Text, View } from 'react-native';

export default class InstagramScreen extends React.Component {
    render() {
      return (
        <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: 'lightblue' 
            }}>
          <Text style={{
              color: '#ff5252',
              fontWeight: 'bold',
              fontFamily: 'cursive',
              fontSize: 50
          }}>Instagram</Text>
        </View>
      );
    }
  }