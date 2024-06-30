export const numberWithCommas = (number: String) => {
  console.log(number, "numbernumber");

  if (!number) return 0;
  const regex = new RegExp(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g);
  return number.toString().replace(regex, ",");
};
