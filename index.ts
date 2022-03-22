/**
 * Determine the length of password
 * @param {string} pw password to validate
 * @param {number} border the length of password required
 * @returns {boolean} true if length is equal or longer than the border
 */
export function isLongEnough(pw: string, border: number): boolean {
  return pw.length >= border;
}

/**
 * Determine whether password holds at least one lowercase character
 * @param {string} pw password to validate
 * @returns {boolean} true when pw contains lowercase uppercase character
 */
export function hasLowerCase(pw: string): boolean {
  const matchedChars = pw.match(/[a-z]/g);
  if (matchedChars) {
    return matchedChars.length > 0;
  } else {
    return false;
  }
}

/**
 * Determine whether password holds at least one uppercase character
 * @param {string} pw password to validate
 * @returns {boolean} true when pw contains uppercase character
 */
export function hasUpperCase(pw: string): boolean {
  const matchedChars = pw.match(/[A-Z]/g);
  if (matchedChars) {
    return matchedChars.length > 0;
  } else {
    return false;
  }
}
