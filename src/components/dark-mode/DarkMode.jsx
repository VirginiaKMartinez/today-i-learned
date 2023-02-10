import "./darkMode.css";
import { Icon } from "@iconify/react";

// 1
const setDark = () => {
  // 2
  localStorage.setItem("theme", "dark");

  // 3
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5
const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <label>
      <input
        className="toggle-checkbox"
        type="checkbox"
        id="checkbox"
        onChange={toggleTheme}
        defaultChecked={defaultDark}
      ></input>
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <Icon
            icon="ph:sun"
            className="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          />
        </div>
        <div className="toggle-button"></div>
        <div className="moon-icon-wrapper">
          <Icon
            icon="ph:moon-bold"
            className="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          />
        </div>
      </div>
    </label>
  );
};

export default DarkMode;
