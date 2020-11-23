/**
 * @format
 */
import React from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ScreenWrapper from '../../components/shared/ScreenWrapper';
import data from '../../lib/mockData';

const Home = ({navigation}) => {
  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        {data.map((movie) => {
          return (
            <React.Fragment key={movie.title}>
              <View style={styles.separator} />
              <TouchableOpacity
                accessibilityRole={'button'}
                onPress={() => navigation.navigate('Session', movie)}
                style={styles.linkContainer}>
                <Text style={styles.link}>{movie.title}</Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
        <Button
          onPress={() => navigation.navigate('Reference')}
          title="See Reference"
          color="#841584"
          accessibilityLabel="See Reference"
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  black: '#000',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});