import { StyleSheet } from "react-native";
import { useField } from "formik";
import theme from "../theme";
import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  textInput: {
    borderColor: theme.colors.textSecondary,
    borderStyle: 'solid',
    padding: 15,
    margin: 8,
    borderWidth: 1,
    borderRadius: 5,
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
