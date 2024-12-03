import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regioMono: ["var(--font-regioMono)"],
      },
      boxShadow: {
        "btn-primary": `0px 0px 2px -2px #FFF inset, 
                        15px 9px 15px 0px #D9D9D9 inset, 
                        -4px -4px 13px -5px rgba(51, 51, 51, 0.74) inset, 
                        8px 0px 4px 0px rgba(89, 89, 89, 0.68) inset`,
        "btn-primary-hover": `0px 0px 10px -2px #066D21 inset, 
                              15px 9px 15px 0px #4AA761 inset, 
                              -4px -4px 13px -5px rgba(255, 255, 255, 0.73) inset, 
                              8px 8px 10px 0px rgba(165, 248, 186, 0.40) inset`,
        "btn-primary-active": `-1px -1px 1px -5px #DFFFE7 inset, 
                              -8px -9px 18px -10px #A2FFBA inset, 
                              2px 1px 2px 0px #00771E inset, 
                              4px 4px 7px 0px #009626 inset`,
        "btn-rounded": `0px -2px 7px -1px #000 inset, 
                              1px 3px 2px -1px #DADADA inset, 
                              12px 12px 24px 0px #5B5B5B inset, 
                              -3px -3px 2px -1px #3F3F3F inset,
                              -12px -12px 24px 0px #555 inset`,
        "btn-rounded-active": `3px 3px 2px -1px #B4FFC7 inset, 
                              12px 12px 24px 0px #70FF94 inset, 
                              -3px -3px 2px -1px #02631B inset, 
                              -12px -12px 24px 0px #017A1F inset`,
        "input-primary": `10px 0px 0px 0px rgba(217, 217, 217, 0.00) inset, 
                              4px 4px 12px 0px rgba(0, 0, 0, 0.24) inset`,
        "input-primary-error": `0px 20px 40px 0px rgba(231, 73, 73, 0.50)`,
        switch: `0px 1.186px 1.186px 0px rgba(182, 182, 182, 0.16) inset,
                   0px 1.186px 1.186px 0px rgba(0, 0, 0, 0.25),
                   0px 1.186px 1.186px 0px rgba(0, 0, 0, 0.25), 
                   1.186px 1.186px 1.186px 0px rgba(0, 0, 0, 0.25), 
                   1.186px 0.593px 2.076px 0.89px rgba(0, 0, 0, 0.25) inset`,
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(90deg, #7853DD 0%, #3057E3 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
