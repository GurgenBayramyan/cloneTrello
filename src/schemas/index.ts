import * as yup from'yup'

export const schemaLogin = yup.object().shape({
    email: yup.string().required("required").email("invalid email"),
    password: yup.string().required("required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})\S+$/,"password is incorrect")
});
export  const schemaRegistr = yup.object().shape({
    firstName: yup.string().required("requied"),
    lastName: yup.string().required("requied"),
    genders: yup.string().required(),
    email:yup.string().required("requied").email("invalid email"),
    age:yup.string().required("requied"),
    password:yup.string().required("required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})\S+$/,"password must contain an uppercase character and a number"),
    repeatPassword:yup.string().required("required")
});