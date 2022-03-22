interface PasswordConfig {
  minLength: number;
  maxLength: number;
  noDoB?: boolean;
  noUserName?: boolean;
  noSpecialCharacters?: boolean;
  noNumbers?: boolean;
  noUpperCase?: boolean;
  noLowercase?: boolean;
}

type BlackList = string[];

const defaultPasswordConfig: PasswordConfig = {
  minLength: 4,
  maxLength: 24,
};

export function getStrength(pw: string, config: PasswordConfig): number {
  let strength = 0;
  return strength;
}

/**
 * Find blacklisted word existed in the password
 * @param pw password
 * @param blacklist array of string should not be contained in the password
 * @param {boolean} [exectMatch = false] require exact match of each words
 * @returns words matched from string
 */
export function getBlacklistedWords(
  pw: string,
  blacklist: BlackList,
  exectMatch: boolean = false
): string[] {
  return blacklist.filter((word) =>
    exectMatch
      ? pw.includes(word)
      : pw.toLowerCase().includes(word.toLowerCase())
  );
}

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

/**
 * Determine whether password holds at least one number character
 * @param {string} pw password to validate
 * @returns {boolean} true when pw contains number character
 */
export function hasNumber(pw: string): boolean {
  const matchedChars = pw.match(/[0-9]/g);
  if (matchedChars) {
    return matchedChars.length > 0;
  } else {
    return false;
  }
}

/**
 *
 * @param pw
 * @returns
 */
export function hasSymbols(pw: string): boolean {
  const matchedChars = pw.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g);
  if (matchedChars) {
    return matchedChars.length > 0;
  } else {
    return false;
  }
}

/**
 *
 * @param pw
 * @returns
 */
export function hasYear(pw: string): boolean {
  const matchedChars = pw.match(/(?:19\d{2}|20\d{2})/g);
  if (matchedChars) {
    return matchedChars.length > 0;
  } else {
    return false;
  }
}
