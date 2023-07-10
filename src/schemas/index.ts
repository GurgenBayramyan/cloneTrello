import * as yup from'yup'

export const schemaLogin = yup.object().shape({
    email: yup.string().required("required"),
    password: yup.string().required("required").min(8,"minimum 8 letters").matches(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/,"password must contain at least one character")
});
