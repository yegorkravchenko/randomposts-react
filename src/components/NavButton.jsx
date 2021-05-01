import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavButton({ text, to }) {
  return (
    <li className="inline-block first:mr-5">
      <NavLink
        exact
        activeClassName="bg-blue-500"
        className="px-4 py-1.5 rounded bg-gray-900 text-white"
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
}
