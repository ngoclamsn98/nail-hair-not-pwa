export const numberWithCommas = (number: String) => {
  if (!number) return 0;
  return addThousandSeparators(number.toString());
};

function addThousandSeparators(number) {
  let parts = number.toString().split(".");
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? "." + parts[1] : "";

  let result = "";
  let count = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    result = integerPart[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return result + decimalPart;
}
