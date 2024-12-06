export const amountFormatter = (amount) => {
  return `$${Math.round(amount).toLocaleString()}`;
};

export const percentageFormatter = (value) => {
  return `${value.toFixed(1)}%`;
};
