import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './JobCard.styles';

function JobCard({data, isFavorite}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.name}>{data.name}</Text>
        <Text>Sprinklr</Text>
        <Text style={styles.location}>{data.locations[0].name}</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={styles.level}>{data.levels[0].name}</Text>
      </View>
      {isFavorite && (
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch({type: 'REMOVE_JOB', payload: {name: data.name}})
          }>
          <View style={styles.remove_button}>
            <Text style={styles.remove_button_title}>Remove</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

export default JobCard;
