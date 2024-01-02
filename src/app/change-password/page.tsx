'use client'

import { Form } from '@/components/Form'
import { useAuthFetch } from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'
import { AxiosRequestConfig } from 'axios'
import router from 'next/dist/client/router'
import { useSearchParams } from 'next/navigation'

export default function ChangePasswordPage () {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const searchParams = useSearchParams()
  const authRouter = useAuthFetch();

  const changePassword = async (formData: any) => {
    startLoading()

    const changeData = {
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword,
    };

    await authRouter({
      endpoint: 'auth/change-password',
      formData: changeData,
      redirectRoute: '/',
      options: {
        method: 'POST',
        baseURL: 'http://localhost:3004',
      },
    });

    finishLoading()
  }

  return (
    <>
      <Form
        title='Cambia tu contraseña'
        onSubmit={changePassword}
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            placeholder='Ingresa tu nueva contraseña...'
            label='Contraseña'
            name='newPassword'
            type='password'
          />
          <Form.Input
            placeholder='Repite tu contraseña...'
            label='Confirmar contraseña'
            name='confirmPassword'
            type='password'
          />
        </div>
        <Form.SubmitButton
          buttonText='Cambiar Contraseña'
          isLoading={isLoading}
        />
      </Form>
    </>
  )
}