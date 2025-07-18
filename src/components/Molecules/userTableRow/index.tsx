/* eslint-disable @typescript-eslint/no-explicit-any */

// Fila de tabla que muestra un usuario con su estado y acciones

import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'

/**
 * UserTableRow:
 * Componente que representa una fila en la tabla de usuarios.
 * Muestra imagen, nombre, correo, estado (activo/inactivo),
 * rol, estado de eliminación y botones para editar o eliminar.
 * 
 * Recibe un objeto usuario como prop.
 */
export const Index = ({ usuario }: { usuario: any }) => {
  return (
    <tr>

      {/* Celda con avatar y nombre */}
      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
        <div className='inline-flex items-center gap-x-3'>
          <div className='flex items-center gap-x-2'>
            <Image className='object-cover w-10 h-10 rounded-full' src={usuario.image} alt='user image'/>
            <div>
              <h2 className='font-medium text-gray-800 dark:text-white '>{usuario.name}</h2>
              <p className='text-sm font-normal text-gray-600 dark:text-gray-400'>
                {usuario.email}
              </p>
            </div>
          </div>
        </div>
      </td>

      {/* Celda con estado activo/inactivo */}
      <td className='px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
        {usuario.enabled ? (
          <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800'>
            <span className='h-1.5 w-1.5 rounded-full bg-emerald-500'></span>
            <h2 className='text-sm font-normal text-emerald-500'>Active</h2>
          </div>
        ) : (
          <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800'>
            <span className='h-1.5 w-1.5 rounded-full bg-red-500'></span>
            <h2 className='text-sm font-normal text-red-500'>Inactive</h2>
          </div>
        )}
      </td>

      {/* Celda con rol */}
      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
        {usuario.role}
      </td>

      {/* Celda con email */}
      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
        {usuario.email}
      </td>

      {/* Celda con estado de eliminación */}
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='flex items-center gap-x-2'>
          {usuario.deleted ? (
            <p className='px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-red-100/60'>
              Deleted
            </p>
          ) : (
            <p className='px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-gray-100/60'>
              Not Deleted
            </p>
          )}
        </div>
      </td>

      {/* Celda con botones de acción (eliminar y editar) */}
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='flex items-center gap-x-6'>

          {/* Botón eliminar */}
          <Link href={`/usuarios/${usuario.id}`}>
            <button className='text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none'>
              <Icon icon='material-symbols:delete-outline' width='24' height='24' />
            </button>
          </Link>

          {/* Botón editar */}
          <Link href={`/usuarios/${usuario.id}`}>
            <button className='text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none'>
              <Icon icon='material-symbols:edit-square-outline-rounded' width='24' height='24' />
            </button>
          </Link>

        </div>
      </td>

    </tr>
  )
}

export default Index
