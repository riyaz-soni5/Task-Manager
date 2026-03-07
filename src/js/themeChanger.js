const themeChanger = () => {

    const rootDOM = document.documentElement

    document.querySelector(".theme-button").addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');

        if(currentTheme == 'light'){
            rootDOM.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            rootDOM.classList.remove("dark");
            localStorage.setItem("theme","light");

        }
        

    })
};

export {themeChanger}

