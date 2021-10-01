import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#37474f',
    marginBottom: 5,
  },
  feature_container: {
    flexDirection: 'row',
  },
  feature: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ef5350',
    marginBottom: 5,
  },
  feature_content: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  job_details_title: {
    fontSize: 25,
    color: '#37474f',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  detail_container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default styles;
