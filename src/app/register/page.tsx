import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  return (
    <>
      <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>

      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Registrase</h1>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div className='grid gap-x-6 grid-cols-2'>
              <div className='w-full'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900 '>
                  Nombres
                </label>
                <div className='flex'>
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    placeholder="Juan"
                    className=' w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                  />
                </div>
              </div>
              <div className='w-full'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                  Apellidos
                </label>
                <div className='flex'>
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    placeholder="Perez"
                    className=' w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                  />
                </div>
              </div>
            </div>
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
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                  Contraseña
                </label>
                <div className='text-sm'>
                  <Link href='/recovery' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <div className='flex'>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  placeholder= "************"
                  className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                />
              </div>
            </div>

            <div>
            <button
                type='submit'
                className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'
              >
                Registrate
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            ¿Ya eres miembro?{' '}
            <Link href='/login' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Identificate Aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
