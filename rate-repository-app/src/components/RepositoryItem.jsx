import { StyleSheet, View, Image} from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: theme.colors.whiteColor,
    padding: 15,
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 5,
    flexGrow: 1,
    flexShrink: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  language: {
    backgroundColor: theme.colors.blueColor,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
})

const roundNum = (num) => {
  if (num >= 1000) {
    return `${Math.round((num / 1000) * 10) / 10}k`;
  }
  return num;
};

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{ marginBottom: 5 }}
            fontSize="subheading"
            fontWeight="bold"
          >
            {repo.fullName}
          </Text>
          <Text style={{ marginBottom: 7 }} color='textSecondary'>
            {repo.description}
          </Text>
          <Text color='colorWhite' style={styles.language}>
            {repo.language}
          </Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{roundNum(repo.stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{roundNum(repo.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{roundNum(repo.reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{repo.ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
