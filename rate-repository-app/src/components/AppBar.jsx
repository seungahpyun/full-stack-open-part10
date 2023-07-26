import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
      <AppBarTab title="Repositories"/>
    </View>
  );
};

export default AppBar;
