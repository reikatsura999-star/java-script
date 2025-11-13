// judulFormatter.js
export function format(text) {
  return text
    .split(' ')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase())
    .join(' ');
}