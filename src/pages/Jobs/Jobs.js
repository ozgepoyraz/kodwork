import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './Jobs.styles';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/JobCard';

function Jobs({navigation}) {
  const {data, loading, error} = useFetch();

  return (
    <View style={styles.container}>
      {loading == true ? (
        <ActivityIndicator color="blue" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('Details', {item});
                console.log('basıdi');
              }}>
              <JobCard data={item}></JobCard>
            </TouchableWithoutFeedback>
          )}
        />
      )}
    </View>
  );
}

export default Jobs;
