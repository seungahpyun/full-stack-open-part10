import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSizes.appBarHeading,
    fontWeight: theme.fontWeights.bold,
    paddingBottom: theme.padding.paddingBottom,
  }
});


const AppBarTab = ({ title, path }) => {
    return(
      <Link to={path}>
        <Text style={styles.container}>
          {title}
        </Text>
      </Link>
    )
  }

  export default AppBarTab;
