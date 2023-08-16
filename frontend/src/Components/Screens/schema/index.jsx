import * as Yup from "yup";

export const registerSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    pass:Yup.string().min(6).required("Please Enter Your password"),
    cpass:Yup.string().required().oneOf([Yup.ref('pass'),null],"Password must be Same"),
    work:Yup.string().required("Enter Your Profession"),
    dom:Yup.string().required("Enter Your Domain"),
});