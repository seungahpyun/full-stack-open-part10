import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    languageText: {
        backgroundColor: theme.colors.blueColor,
        borderRadius: 5,
        flexGrow: 0,
        textAlign: 'center',
        paddingVertical: 12,
    },
})

const ReviewItem = ({ review }) => {
  return (
    <View>
      <Text>{review.user.username}</Text>
      <Text>{review.createdAt}</Text>
      <Text>{review.text}</Text>
      <Text>{review.rating}</Text>
    </View>
  )
};

const Repository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id,4);

  const handlePress = () => {
    Linking.openURL(repository.url);
  };

  const onEndReach = () => {
    fetchMore()
  }

  if (repository) {
    return (
      <View style={styles.languageContainer}>
        <FlatList
          data={repository.reviews.edges}
          renderItem={({ item }) => <ReviewItem review={item.node} />}
          keyExtractor={({ id }) => id}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
        />
        <RepositoryItem repo={repository} />
        <Text onPress={handlePress} color='colorWhite' fontWeight='bold' style={styles.languageText}>
            Open in GitHub
        </Text>
      </View>
    );
  }
};

export default Repository;
