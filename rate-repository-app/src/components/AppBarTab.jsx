import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSizes.appBarHeading,
    fontWeight: theme.fontWeights.bold,
    paddingBottom: theme.padding.paddingBottom,
  }
});


const AppBarTab = ({ title }) => {
    return(
      <Pressable>
        <Text style={styles.container}>
          {title}
        </Text>
      </Pressable>
    )
  }

  export default AppBarTab;
