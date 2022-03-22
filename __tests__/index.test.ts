import { isLongEnough } from "../index";

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
