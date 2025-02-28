import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	--background-color: hsl(220 13% 18%);

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	--color-grey-0: #fff;
	--color-grey-50: #f9fafb;
	--color-grey-100: #f3f4f6;
	--color-grey-200: #e5e7eb;
	--color-grey-300: #d1d5db;
	--color-grey-400: #9ca3af;
	--color-grey-500: #6b7280;
	--color-grey-600: #4b5563;
	--color-grey-700: #374151;
	--color-grey-800: #1f2937;
	--color-grey-900: #111827;

	/* Colors */
	--color-black: #0E0E11;
	--color-grey: #141318;
	--color-grey-secondary: #6b6c70;
	--color-orange: #EB6B44;
	--color-purple: #7E66F5;
	--color-green: #9ff7d2;

	/* Fonts */
	--fs-xs: 0.75rem;
	--fs-sm: 0.875rem;
	--fs-md: 1rem;
	--fs-lg: 1.25rem;
	--fs-xl: 1.5rem;
	--fs-2xl: 2rem;
	--fs-3xl: 3rem;

	--radius: 12px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
	margin: 0;
	display: flex;
	place-items: center;
	min-width: 320px;
	min-height: 100vh;
	background-color: var(--color-black);
	background-color: white;
}


#root {
	margin: 0 auto;
	text-align: center;
	width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

a {
  color: inherit;
  text-decoration: none;
}

a.link,
a.link:visited {
	color: #007bff;
	text-decoration: underline;
	transition: all 0.2s ease;
}

a.link:hover {
	color: #007bffcc;
}


p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

h1{
  color: var(--orange);
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0;
}

h2{
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
}

h3{
  margin: 1rem 0;
	color: var(--text-color-heading);
	font-size: 1.2rem;
}

@keyframes skeleton {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0.4;
	}

	100% {
		opacity: 1;
	}
}

`;

export default GlobalStyles;
