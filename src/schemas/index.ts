import * as yup from'yup'
import { regexpPassword } from './regexp';
import { requiedErrorMesege } from './erroreMessege';

export const schemaLogin = yup.object().shape({
    email: yup.string().required("required"),
    password: yup.string().required("required")
});
export  const schemaRegistr = yup.object().shape({
    firstname: yup.string().required(requiedErrorMesege),
    lastname: yup.string().required(requiedErrorMesege),
    genders: yup.string().required(requiedErrorMesege),
    email:yup.string().required(requiedErrorMesege).email("invalid email"),
    age:yup.string().required(requiedErrorMesege),
    password:yup.string().required(requiedErrorMesege).matches(regexpPassword,"password must contain an uppercase character and a number"),
    repeatPassword:yup.string().required(requiedErrorMesege).test('password-match', 'Password must match', function (value) {
        return this.parent.password === value;
    }),
});