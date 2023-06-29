// Icons and img
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const switchButton = document.getElementById("switchButton")
const blackLenin = document.getElementById("black-lenin");
const whiteLenin = document.getElementById("white-lenin");

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon toggling
const iconToggle = () => {
    // moonIcon.classList.toggle("hidden");
    // sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
    blackLenin.classList.toggle("display-none");
    whiteLenin.classList.toggle("display-none");
}

// Initial Theme check
const themeCheck = () => {
    if(userTheme == "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        // moonIcon.classList.add("hidden");
        moonIcon.classList.add("display-none");
        blackLenin.classList.toggle("display-none");

        return;
    }
    sunIcon.classList.add("display-none");
    whiteLenin.classList.toggle("display-none");

}

// Manual theme switch
const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

switchButton.addEventListener("click", () => {
    themeSwitch();
});

// Invoke theme check on initial load
themeCheck();