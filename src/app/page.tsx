'use client';
import { useAuthFetch } from '@/hooks/useAuthFetch';
import { useLoading } from '@/hooks/useLoading';
import React from 'react';
import { Form } from '@/components/Form';

export default function Login() {
  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();

  const login = async (formData: any) => {
    startLoading();

    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    await authFetch({
      endpoint: 'auth/login',
      redirectRoute: '/dashboard',
      formData: loginData,
      options: {
        method: 'POST',
        baseURL: 'http://localhost:3001',
      },
    });

    finishLoading();
  };
  return (
    <>
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
      <Form
      title='Inicia Sesión'
      onSubmit={login}
    >
      <div className='my-[10px] flex flex-col gap-4'>
        <Form.Input
          label='Correo'
          name='email'
          placeholder='correo@example.com'
        />
        <Form.Input
          placeholder='************'
          label='Contraseña'
          name='password'
          type='password'
        />
        <Form.Footer
        description=''
        link='/recovery'
        textLink='¿Olvidaste tu contraseña?'
      />
      </div>
      <Form.SubmitButton buttonText='Iniciar Sesión' isLoading={isLoading} />
      <Form.Footer
        description='¿Aun no tienes cuenta?'
        link='/register'
        textLink='Regístrate Gratis'
      />
    </Form>
      
      <hr className="my-6 border-gray-300 w-full"></hr>
          
      </div>
    </div>
  </>
  );
};