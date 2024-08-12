// Converts the buyout price from copper to gold and formats it as a string
export const formatPrice = (buyout: number): string => {
  return Math.floor(buyout / 10000).toLocaleString();
};
