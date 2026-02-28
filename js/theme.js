const THEME_KEY = 'portfolio-theme';

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getTheme() {
  return localStorage.getItem(THEME_KEY) || getSystemTheme();
}

function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggle(theme);
}

function toggleTheme() {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

function updateThemeToggle(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const sun = btn.querySelector('[data-theme-icon="sun"]');
  const moon = btn.querySelector('[data-theme-icon="moon"]');
  if (sun) sun.classList.toggle('hidden', theme === 'dark');
  if (moon) moon.classList.toggle('hidden', theme !== 'dark');
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function initTheme() {
  const theme = getTheme();
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggle(theme);
}

document.addEventListener('DOMContentLoaded', initTheme);
