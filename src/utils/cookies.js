// src/utils/cookies.js

/**
 * Set a cookie
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} [days] - Number of days until the cookie expires
 */
export function set(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days || 7) * 24 * 60 * 60 * 1000); // Default to 7 days
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
}

/**
 * Get a cookie by name
 * @param {string} name - The name of the cookie
 * @returns {string|null} - The value of the cookie, or null if not found
 */
export function get(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

/**
 * Delete a cookie by name
 * @param {string} name - The name of the cookie
 */
export function remove(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}
