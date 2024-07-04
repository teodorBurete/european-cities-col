const formatPopulation = (value: number) => {
  return value.toLocaleString("en-US").replace(/,/g, ".");
};
export default formatPopulation;
