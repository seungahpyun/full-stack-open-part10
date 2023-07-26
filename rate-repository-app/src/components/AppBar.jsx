import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.padding.paddingTop,
    backgroundColor: theme.colors.backgroundBarColor,
    display: 'flex',
    flexDirection: 'row',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repository" path="/" />
        <AppBarTab title="Sign In" path="/sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
