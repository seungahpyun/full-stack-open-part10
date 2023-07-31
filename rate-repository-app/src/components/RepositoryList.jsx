import { View, StyleSheet, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Link } from 'react-router-native';
import React,{ useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  }
});

export const RepositoryListContainer = ({ repositories , order, setOrder }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Link to={`/${item.id}`}>
            <RepositoryItem key={item.id} repo={item} />
          </Link>
        )
        }
        ListHeaderComponent={
          <View>
            <Picker
              selectedValue={order}
              onValueChange={(itemValue) => setOrder(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Latest repositories" value="latest" />
              <Picker.Item label="Highest rated repositories" value="highest" />
              <Picker.Item label="Lowest rated repositories" value="lowest" />
            </Picker>
          </View>
        }
      />
    );
  };

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {
    const [ order, setOrder ] = useState('latest');

    let orderBy;
    let orderDirection;

    switch(order){
      case 'latest':

        orderBy = 'CREATED_AT';
        orderDirection = 'DESC';
        break;

      case 'highestRated':

        orderBy = 'RATING_AVERAGE';
        orderDirection = 'DESC';
        break;

      case 'lowestRated':

        orderBy = 'RATING_AVERAGE';
        orderDirection = 'ASC';
        break;

      }
    const {repositories} = useRepositories(orderBy, orderDirection);

  return <RepositoryListContainer repositories={repositories} order={order} setOrder={setOrder} />;
};

export default RepositoryList;
