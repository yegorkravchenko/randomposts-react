import React from "react";
import { NavButton } from "./NavButton";

export function Header({ pageTitle }) {
  return (
    <header className="w-screen py-3 border-b-2 border-gray-900">
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-gray-900 font-bold">{pageTitle}</h1>
        <nav>
          <ul>
            <NavButton text="Home" to="/" />
            <NavButton text="Posts" to="/posts" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
