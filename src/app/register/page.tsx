'use client'

import { Form } from '@/components/Form'
import { useAuthFetch } from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'

export default function RegisterPage () {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const register = async (formData: any) => {
    startLoading()

    const registerData = {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    await authFetch({
      endpoint: 'auth/register',
      redirectRoute: '/',
      formData: registerData,
      options: {
        method: 'POST',
        baseURL: 'http://localhost:3002',
      },
    });
    finishLoading()
  }

  return (
    <>
      <Form
        title='Registrate'
        onSubmit={register}
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            label='Nombre'
            name='name'
            placeholder='Name'
          />
          <Form.Input
            label='Lastname'
            name='lastname'
            placeholder='Lastname'
          />
          <Form.Input
            label='Correo'
            name='email'
            placeholder='correo@example.com'
          />
          <Form.Input
            label='Username'
            name='username'
            placeholder='Username'
          />
          <Form.Input
            placeholder="************"
            label='Contraseña'
            name='password'
            type='password'
          />
          <Form.Input
            placeholder="************"
            label='Confirmar Contraseña'
            name='confirmPassword'
            type='password'
          />
        </div>
        <Form.SubmitButton buttonText='Crear cuenta' isLoading={isLoading} />
        <Form.Footer
          description='¿Ya tienes cuenta?'
          textLink='Inicia Sesión'
          link='/'
        />
      </Form>
    </>
  )
}