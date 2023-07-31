import FormikTextInput from "./FormikTextInput"
import { Pressable, StyleSheet, Text, View } from "react-native"


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

const CreateReviewForm = ({ onSubmit }) => {
  return (
      <View>
          <FormikTextInput name='ownerName' placeholder='Repository owner name'/>
          <FormikTextInput name='repositoryName' placeholder='Repository name'/>
          <FormikTextInput name='rating' placeholder='Rating between 0 and 100'/>
          <FormikTextInput name='text' placeholder='Review'/>
          <Pressable onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Create a Review</Text>
          </Pressable>
      </View>
  )
}

export default CreateReviewForm
