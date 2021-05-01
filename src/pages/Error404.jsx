import React from 'react';
import { Link } from 'react-router-dom';

export function Error404() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-9xl text-gray-900 font-bold">404</h1>
      <p className="text-xl text-gray-600 mt-2.5 mb-10">Page not found</p>
      <p className="text-2xl text-gray-900">
        Go to{' '}
        <Link
          className="text-blue-500 font-bold hover:text-red-500 hover:animate-pulse"
          to="/"
        >
          /home
        </Link>
      </p>
    </div>
  );
}
