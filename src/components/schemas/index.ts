import * as yup from'yup'

export const schemaLogin = yup.object().shape({
    login: yup.string().required("required"),
    password: yup.string().required("required"),
});
