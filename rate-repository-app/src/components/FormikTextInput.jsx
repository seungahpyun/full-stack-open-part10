import { StyleSheet } from "react-native";
import { useField } from "formik";
import theme from "../theme";
import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    marginTop: theme.margin.small,
  },
  textInput: {
    borderColor: theme.colors.textSecondary,
    borderStyle: 'solid',
    padding: theme.padding.large,
    margin: theme.margin.medium,
    borderWidth: 1,
    borderRadius: theme.borderRadius.smalld,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
}

export default FormikTextInput;
