import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().max(150).required("Username is required"),
  room: Yup.string().max(150).required("Room is required"),
});