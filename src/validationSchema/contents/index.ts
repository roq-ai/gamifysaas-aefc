import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  creator_id: yup.string().nullable().required(),
  provider_id: yup.string().nullable().required(),
});
