'use client';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import FormAlert from '@/../components/formAlert';

export default function Recovery() {
  const [email, setEmail] = useState('');
  const [tokenSended, SetTokenSended] = useState(false);
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordRecovered, setPasswordRecovered] = useState(false);
  function requestPasswordReset() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      email: email,
    });

    fetch('http://localhost:3005/api/auth/request-reset', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        result ? setMessage(result) : '';
        tokenSended ? '' : SetTokenSended(true);
      })
      .catch((error) => console.log('error', error));
  }

  function changePassword() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      token: token,
      newPassword: newPassword,
    });

    fetch('http://localhost:3005/api/auth/reset', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        result ? setMessage(result) : '';
        tokenSended ? '' : SetTokenSended(true);
        setPasswordRecovered(true);
      })
      .catch((error) => console.log('error', error));
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css" />
      </Head>

      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Recuperar Contraseña</h1>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
          <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                Correo Electrónico
              </label>
              <div className='flex'>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  placeholder="correo@example.com"
                  className=' w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                />
              </div>
            </div>

            <div>
            <button
                type='submit'
                className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'
              >
                Identificate por Correo Electrónico
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            ¿Aun no eres miembro?{' '}
            <Link href='/register' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Regístrate Gratis
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
