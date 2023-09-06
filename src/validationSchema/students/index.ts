import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  progress: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  course_id: yup.string().nullable().required(),
});
