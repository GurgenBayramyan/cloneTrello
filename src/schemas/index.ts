import * as yup from'yup'

export const schemaLogin = yup.object().shape({
    email: yup.string().required("required"),
    password: yup.string().required("required")
});
export  const schemaRegistr = yup.object().shape({
    firstname: yup.string().required("requied"),
    lastname: yup.string().required("requied"),
    genders: yup.string().required("requied"),
    email:yup.string().required("requied").email("invalid email"),
    age:yup.string().required("requied"),
    password:yup.string().required("required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})\S+$/,"password must contain an uppercase character and a number"),
    repeatPassword:yup.string().required("required")
});