import * as yup from "yup";
const passwordRule= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const schema = yup.object().shape({
    email:yup.string().email('please enter a valid email').required(),
    age:yup.number().integer().positive().required() ,
    password:yup.string().min(5).max(9).required(),
    confirmPassword:yup.string().oneOf([yup.ref('password'), null])

})

// .matches(passwordRule,)