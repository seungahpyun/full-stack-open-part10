import { Formik } from "formik";
import * as yup from 'yup';
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import SignUpForm from "./SignUpForm";

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
}

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(1, 'Username must be at least 1 character long')
        .max(30, 'Username cannot exceed 30 characters'),
    password: yup
        .string()
        .required('Password is required')
        .min(5, 'Password must be at least 5 characters long')
        .max(50, 'Password cannot exceed 50 characters'),
    passwordConfirm: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})


const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signUp({ username, password });
            await signIn({ username, password });
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit}/>}
        </Formik>
    )
}

export default SignUp;
