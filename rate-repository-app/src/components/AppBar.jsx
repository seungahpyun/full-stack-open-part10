import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
import useME from '../hooks/useME';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.padding.paddingTop,
    backgroundColor: theme.colors.backgroundBarColor,
    display: 'flex',
    flexDirection: 'row',
  }
});

const AppBar = () => {
  const { me } = useME();
  const [signOut] = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repository" path="/" />
        {me
          ? <>
              <AppBarTab title="Sign Out" path="/sign-out" onPress={signOut} />
              <AppBarTab title="Create a review" path="/create-review" />
            </>
          :
            <>
              <AppBarTab title="Sign In" path="/sign-in" />
              <AppBarTab title="Sign Up" path="/sign-up" />
            </>
        }
      </ScrollView>
    </View>
  );
};


export default AppBar;
