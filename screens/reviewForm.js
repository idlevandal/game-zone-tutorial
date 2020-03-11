import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';

const ReviewSchema = yup.object({
   title: yup.string().required().min(4),
   body: yup.string().required().min(8, 'Review must be at least 8 chars'),
   rating: yup.number().required().min(1, 'Numbers only between 1 & 5').max(5, 'between 1 & 5')
});

export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(formikprops) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                            onBlur={formikprops.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{formikprops.touched.title && formikprops.errors.title}</Text>

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                            onBlur={formikprops.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{formikprops.touched.body && formikprops.errors.body}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}>{formikprops.touched.rating && formikprops.errors.rating}</Text>

                        <Button title='Submit' color='maroon' onPress={formikprops.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}