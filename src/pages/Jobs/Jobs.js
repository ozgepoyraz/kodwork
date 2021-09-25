import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from './Jobs.styles';
import useFetch from '../../hooks/useFetch';

function Jobs() {
  const {data, loading, error} = useFetch();

  return (
    <View style={styles.container}>
      {loading == true ? (
        <ActivityIndicator color="blue" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      )}
    </View>
  );
}

export default Jobs;
