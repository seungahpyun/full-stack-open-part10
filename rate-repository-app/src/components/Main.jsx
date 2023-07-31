import { Route, Routes, Navigate } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import RepositoryList from './RepositoryList';
import Repository from './Repository';
import SignIn from './SignIn';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundMainColor,
    paddingBottom: theme.padding.paddingBottom,
    flexGrow: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path='/sign-in' element={<SignIn />} exact />
        <Route path='/sign-out' element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/:id" element={<Repository />} />
      </Routes>
    </View>
  );
};

export default Main;
