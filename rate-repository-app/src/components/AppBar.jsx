import { View, StyleSheet, Pressable, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  appBar: {
    paddingTop: theme.padding.top,
    paddingBottom: theme.padding.bottom,
    backgroundColor: theme.colors.textPrimary,
  },
  text: {
    color: theme.colors.textTertiary,
  }
});

const onPress = () => {
  console.log('onPress');
};

const AppBar = () => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.appBar}>
        <Text style={styles.text}>Repositories</Text>
      </View>
    </Pressable>
  )
};

export default AppBar;
