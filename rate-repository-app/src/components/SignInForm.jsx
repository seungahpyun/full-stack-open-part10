import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: theme.padding.small,
  },
  buttton: {
      backgroundColor: theme.colors.blueColor,
      alignItems: 'center',
      padding: theme.padding.large,
      margin: theme.margin.medium,
      borderRadius: theme.borderRadius.small,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.buttton}>
            <Text color='colorWhite' fontWeight='bold'>
              Sign In
            </Text>
      </Pressable>
    </View>
  );
}

export default SignInForm;
