<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=next&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Application Landing</h3>

   <div align="center">
     Build this project with our detailed tutorial on <a href="https://www.youtube.com/@fibipals" target="_blank"><b>Fibipals</b></a> YouTube. Learn, Create, Achive!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 📦 [Assets](#assets)
7. 💡 [Resources](#resources)

## 📚 Tutorial

This repository contains the code for an in-depth tutorial featured on our YouTube channel, <a href="https://www.youtube.com/@fibipals" target="_blank"><b>Fibipals</b></a>.

If you’re a visual learner, this tutorial is perfect for you. Follow along to build projects like these step-by-step with our beginner-friendly guide!

<a href="https://www.youtube.com/@fibipals" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

This is a modern, fully responsive Next.js website for Viditor, built with TailwindCSS. It features an engaging hero section, a fixed navbar with section highlighting, a dynamic pricing section with a toggle, and a connected payment system. Perfect for showcasing applications, games, SaaS products, or any business-oriented project.


## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Fully Responsive Design**: Enjoy seamless access and optimal viewing on any device, thanks to a design that adapts to different screen sizes.

👉 **Integrated Payment System**: A connected payment system for easy and secure transactions.

👉 **Modern UI/UX Elements**: Sleek and intuitive interface with contemporary design elements.

👉 **Beginner-Friendly Setup**: Easy to set up and customize, perfect for showcasing apps, games, SaaS, and more.

and many more, including efficient code architecture and reusability!

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Fibipals/Viditor-App-Landing.git
cd Viditor-App-Landing
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-blue-gradient': 'radial-gradient(circle at center, #020617 0%, #1e40af 100%)'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".h1": {
          "@apply uppercase font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl  tracking-wide":
            {},
        },
        ".h2": {
          "@apply font-semibold text-2xl md:text-3xl lg:text-4xl":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".p": {
          "@apply text-slate-300":{},
        },
        ".p-sm": {
          "@apply text-sm text-slate-300":{},
        },
        ".p-xs": {
          "@apply text-xs text-slate-600 font-semibold":{},
        },
        '.text-slogan': {
          '@apply text-lime-300 uppercase font-semibold text-sm  tracking-wider': {},
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
```

</details>

<details>
<summary><code>pricingSvg.tsx</code></summary>

```javascript
const PricingSvg = () => {
    return(
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#020617' width='2000' height='1500'/><defs><path fill='none' strokeWidth='2.6' strokeOpacity='0.32' id='a' d='M0.74-509.63l485.39 352.65l-185.4 570.61h-599.97l-185.4-570.61L0.74-509.63 M0.74-510.87l-486.56 353.51l185.85 571.99h601.42L487.3-157.36L0.74-510.87L0.74-510.87z'/></defs><g  transform='scale(0.766)' style={{ transformOrigin: 'center' }}><g  transform='' style={{ transformOrigin: 'center' }}><g  transform='rotate(-80 0 0)' style={{ transformOrigin: 'center' }}><g transform='translate(1000 750)'><use  stroke='#020617' href='#a' transform='rotate(5 0 0) scale(1.05)'/><use  stroke='#03081c' href='#a' transform='rotate(10 0 0) scale(1.1)'/><use  stroke='#040920' href='#a' transform='rotate(15 0 0) scale(1.15)'/><use  stroke='#040b25' href='#a' transform='rotate(20 0 0) scale(1.2)'/><use  stroke='#050d29' href='#a' transform='rotate(25 0 0) scale(1.25)'/><use  stroke='#070f2e' href='#a' transform='rotate(30 0 0) scale(1.3)'/><use  stroke='#081032' href='#a' transform='rotate(35 0 0) scale(1.35)'/><use  stroke='#091236' href='#a' transform='rotate(40 0 0) scale(1.4)'/><use  stroke='#0a153a' href='#a' transform='rotate(45 0 0) scale(1.45)'/><use  stroke='#0c173e' href='#a' transform='rotate(50 0 0) scale(1.5)'/><use  stroke='#0e1942' href='#a' transform='rotate(55 0 0) scale(1.55)'/><use  stroke='#0f1b46' href='#a' transform='rotate(60 0 0) scale(1.6)'/><use  stroke='#111e4a' href='#a' transform='rotate(65 0 0) scale(1.65)'/><use  stroke='#13204d' href='#a' transform='rotate(70 0 0) scale(1.7)'/><use  stroke='#152251' href='#a' transform='rotate(75 0 0) scale(1.75)'/><use  stroke='#172554' href='#a' transform='rotate(80 0 0) scale(1.8)'/></g></g></g></g></svg>
    )
}

export default PricingSvg
```
</details>


<details>
<summary><code>global.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

.gradient-01 {
  background-image: radial-gradient(circle at 50% 50%, rgb(27, 45, 140), rgb(2, 6, 23));
  filter: blur(125px);
}

.gradient-02{
  background-image: radial-gradient(circle at 50% 50%, rgb(44, 62, 149), rgb(2, 6, 23));
  filter: blur(125px);
}

.gradient-03{
  background-image: linear-gradient(rgb(2, 6, 23), rgb(44, 62, 149), rgb(2, 6, 23));
  filter: blur(125px);
}
```

</details>


## <a name="assets">📦 Assets</a>

Public Assets used in the project can be found [here](https://drive.google.com/file/d/1NxH1HInL6KzprzrYy-aP-odQlmFRQlYP/view?usp=sharing)

## <a name="resources">💡 Resources</a>

Check out <a href="https://www.fibipals.com" target="_blank"><b>Fibipals.com</b></a>. Here, you can find components for your site, a cool community, articles, and more.
