import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'app/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
],
theme: {
    extend: {
    colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
    },
    fontfamily:{
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"]
    }
    },
},
plugins: [],
};
