import { Text, View, Pressable, StyleSheet } from "react-native"
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  button: {
      backgroundColor: '#4169e1',
      padding: 10,
      margin: 10,
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '700'
  }
})

const SignUpForm = ({ onSubmit }) => {
  return (
      <View>
          <FormikTextInput name='username' placeholder='Username'/>
          <FormikTextInput name='password' placeholder='Password' secureTextEntry/>
          <FormikTextInput name='passwordConfirm' placeholder='Password confirmation' secureTextEntry/>
          <Pressable onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
      </View>
  )
}

export default SignUpForm
