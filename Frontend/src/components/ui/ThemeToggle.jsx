import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectTheme } from '../../features/themeSlice';
import { IconSun, IconMoon } from '@tabler/icons-react';

export const ThemeToggle = ({ className }) => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const [isPressed, setIsPressed] = useState(false);
    
    const handleToggle = () => {
        setIsPressed(true);
        dispatch(toggleTheme());
        
        // Reset the pressed state after animation completes
        setTimeout(() => setIsPressed(false), 300);
    };
    
    return (
        <button 
            onClick={handleToggle} 
            className={`flex items-center justify-center p-2 rounded-md transition-all duration-300 ${className} ${
                theme === 'dark' 
                    ? 'bg-zinc-800 hover:bg-zinc-700' 
                    : 'bg-neutral-200 hover:bg-neutral-300'
            } ${isPressed ? 'scale-90 shadow-inner' : 'scale-100 shadow-sm'}`}
            aria-label="Toggle theme"
        >
            <div className={`transition-transform duration-300 ${isPressed ? 'scale-75' : 'scale-100'}`}>
                {theme === 'dark' ? (
                    <IconMoon className="h-5 w-5 text-neutral-100" />
                    
                ) : (
                    <IconSun className="h-5 w-5 text-yellow-600" />
                )}
            </div>
        </button>
    );
};