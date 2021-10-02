import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c6c6c6',
    padding: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  location: {
    backgroundColor: '#ef5350',
    color: 'white',
    borderRadius: 12,
    fontWeight: 'bold',
    padding: 2,
    paddingStart: 8,
    paddingEnd: 8,
    marginTop: 3,
  },
  level: {
    margin: 5,
    color: '#ef5350',
    fontWeight: 'bold',
  },
  remove_button: {
    flex: 1,
    backgroundColor: '#ef5350',
    margin: 10,
    padding: 8,
    borderRadius: 8,
  },
  remove_button_title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 3,
    textAlign: 'center',
  },
});

export default styles;
