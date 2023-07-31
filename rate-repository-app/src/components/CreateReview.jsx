import CreateReviewForm from "./CreateReviewForm";
import { Formik } from "formik"
import * as yup from 'yup';

import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
}

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required('Repository owner name is required'),
    repositoryName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .required('Rating is required')
        .min(0, 'Rating must be at least 0')
        .max(100, 'Rating cannot exceed 100'),
    text: yup
        .string()

})

const CreateReview = () => {
    const [createAReview] = useCreateReview();
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        console.log('review', values)
        const { ownerName, repositoryName, rating, text } = values

        try {
            const {data} = await createAReview({ ownerName, repositoryName, rating, text })
            console.log('reviewData', data.createReview)
            navigate(`/${data.createReview.repositoryId}`)
        }catch (e){
            console.log('reviewError', e)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({handleSubmit}) => <CreateReviewForm onSubmit={handleSubmit}/>}
        </Formik>
    )
}

export default CreateReview;
