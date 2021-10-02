import React from 'react';
import {View, Text} from 'react-native';
import styles from './JobCard.styles';

function JobCard({data}) {
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
    </View>
  );
}

export default JobCard;
