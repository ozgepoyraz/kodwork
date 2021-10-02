import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import JobCard from '../../components/JobCard';

const FavoritedJobs = () => {
  const jobList = useSelector(s => s.favoriteJobList);
  const dispatch = useDispatch();

  return (
    jobList && (
      <FlatList
        data={jobList}
        renderItem={({item}) => (
          <View>
            <JobCard data={item} isFavorite={true}></JobCard>
          </View>
        )}
      />
    )
  );
};

export default FavoritedJobs;
