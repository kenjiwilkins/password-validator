/**
 * Determine the length of password
 * @param {string} pw password to validate
 * @param {number} border the length of password required
 * @returns {boolean} true if length is equal or longer than the border
 */
export function isLongEnough(pw: string, border: number): boolean {
  return pw.length >= border;
}
