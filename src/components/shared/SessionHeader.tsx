import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SessionContext} from '../../../App';
import {TouchableHighlight} from 'react-native-gesture-handler';

const SessionHeader = ({navigation}) => {
  const context = useContext(SessionContext);
  const session = context?.session;
  console.log('session:', session);

  if (session) {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#b7f2b7"
        onPress={() => navigation.push('Session', session.movie)}>
        <View style={styles.sessionBar}>
          <Text style={styles.text}>{session.movie.title} in progress</Text>
        </View>
      </TouchableHighlight>
    );
  }
  return null;
};

export default SessionHeader;

const styles = StyleSheet.create({
  sessionBar: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
  },
  text: {},
});
