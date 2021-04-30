import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header({ pageTitle }) {
    return (
        <header className="w-screen py-3 border-b-2 border-blue-600 bg-blue-400">
            <div className="w-9/12 mx-auto flex justify-between items-center">
                <h1 className="text-2xl text-white font-bold">{pageTitle}</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts">Posts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div> 
        </header>
    );
} 
