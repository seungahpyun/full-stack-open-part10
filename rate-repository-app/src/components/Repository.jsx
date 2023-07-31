import { View, StyleSheet } from 'react-native';
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

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const handlePress = () => {
    Linking.openURL(repository.url);
  };

  if (repository) {
    return (
      <View style={styles.languageContainer}>
        <RepositoryItem repo={repository} />
        <Text onPress={handlePress} color='colorWhite' fontWeight='bold' style={styles.languageText}>
            Open in GitHub
        </Text>
      </View>
    );
  }
};

export default Repository;
