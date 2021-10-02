import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import styles from './Details.styles';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View style={styles.buttons_container}>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Icon style={styles.button_title} name="exit-to-app"></Icon>
            <Text style={styles.button_title}>Submit</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Icon style={styles.button_title} name="cards-heart"></Icon>
            <Text style={styles.button_title}>Favorite Job</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}

export default Details;
