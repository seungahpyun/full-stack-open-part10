import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  validInput: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: theme.borderRadius.small,
  },
  invalidInput: {
    borderColor: theme.colors.textError,
    borderWidth: 1,
    borderRadius: theme.borderRadius.small,
    color: theme.colors.textError,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error ? styles.invalidInput : styles.validInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
