import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  provider_id: yup.string().nullable().required(),
  content_id: yup.string().nullable().required(),
});
