import { isLongEnough, hasLowerCase, hasUpperCase, hasNumber } from "../index";

function generatePw(length: number): string {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

test("isLongEnough function", () => {
  expect(isLongEnough(generatePw(20), 10)).toBeTruthy();
  expect(isLongEnough(generatePw(10), 10)).toBeTruthy();
  expect(isLongEnough(generatePw(5), 10)).toBeFalsy();
});

test("hasLowerCase function", () => {
  expect(hasLowerCase("WERQAZ987")).toBeFalsy();
  expect(hasLowerCase("5347990f9")).toBeTruthy();
});

test("hasUpperCase function", () => {
  expect(hasUpperCase("WERQAZ987")).toBeTruthy();
  expect(hasUpperCase("5347990f9")).toBeFalsy();
});

test("hasNumber function", () => {
  expect(hasNumber("WEROIUFDS")).toBeFalsy();
  expect(hasNumber("8feuisfah4")).toBeTruthy();
});
