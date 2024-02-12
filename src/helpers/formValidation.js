import * as Yup from 'yup';

export const formValidationSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório*'),
  phone: Yup.string().matches(/^[1-9]\d{10}$/, 'Telefone inválido*').required('Telefone obrigatório*'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório*'),
  observation: Yup.string(),
  basketSelect: Yup.string().test('is-not-zero', 'Selecione um tipo de cesta*', value => value !== '0')
});
