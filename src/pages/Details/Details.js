import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './Details.styles';
import HTMLView from 'react-native-htmlview';

function Details({route}) {
  const {item} = route.params;
  console.log(item.name);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.feature_container}>
          <Text style={styles.feature}>Locations: </Text>
          <Text style={styles.feature_content}>{item.locations[0].name}</Text>
        </View>
        <View style={styles.feature_container}>
          <Text style={styles.feature}>Job Level: </Text>
          <Text style={styles.feature_content}>{item.levels[0].name}</Text>
        </View>
      </View>

      <Text style={styles.job_details_title}>Job Detail</Text>
      <View style={styles.detail_container}>
        <HTMLView value={item.contents}></HTMLView>
      </View>
    </ScrollView>
  );
}

export default Details;
