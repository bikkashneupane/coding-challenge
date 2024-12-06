// Calculate total revenue => account_category === revenue
export const calculateRevenue = (data) => {
  const revenueArray = data.filter(
    (item) => item.account_category === "revenue"
  );

  const totalRevenue = revenueArray.reduce((acc, curr) => {
    return acc + curr.total_value;
  }, 0);

  return totalRevenue;
};

// Calculate total expenses => account_category === expense
export const calculateExpenses = (data) => {
  const totalExpense = data
    .filter((item) => item.account_category === "expense")
    .reduce((acc, curr) => acc + curr.total_value, 0);

  return totalExpense;
};

// Calculate gross profit margin in percentage: debitSales/revenue*100;
export const calculateGrossProfitMargin = (data) => {
  const salesDebit = data
    .filter(
      (item) => item.account_type === "sales" && item.value_type === "debit"
    )
    .reduce((acc, curr) => acc + curr.total_value, 0);

  const totalRevenue = calculateRevenue(data);
  const grossProfitMargin = (salesDebit / totalRevenue) * 100;
  return grossProfitMargin;
};

// Calculate net profit margin in percentage: (revenue-expenses)/revenue*100
export const calculateNetProfitMargin = (data) => {
  const revenue = calculateRevenue(data);
  const expenses = calculateExpenses(data);

  const netProftMargin = ((revenue - expenses) / revenue) * 100;
  return netProftMargin;
};

// Calculate working capital ratio in percentage: (revenue-expenses)/revenue*100
export const calculateWorkingCapitalRatio = (data) => {
  let assets = 0;
  let liabilities = 0;
  const assetsAccountTypes = ["current", "bank", "current_accounts_receivable"];
  const liabilitiesAccountTypes = ["current", "current_accounts_payable"];

  for (const item of data) {
    const { account_category, value_type, account_type, total_value } = item;

    // Assets
    if (account_category === "assets") {
      if (value_type === "debit" && assetsAccountTypes.includes(account_type)) {
        assets += total_value;
      } else if (
        value_type === "credit" &&
        assetsAccountTypes.includes(account_type)
      ) {
        assets -= total_value;
      }
    }

    //  Liabilities
    if (account_category === "liability") {
      if (
        value_type === "debit" &&
        liabilitiesAccountTypes.includes(account_type)
      ) {
        liabilities -= total_value;
      } else if (
        value_type === "credit" &&
        liabilitiesAccountTypes.includes(account_type)
      ) {
        liabilities += total_value;
      }
    }
  }

  console.log("Assets: ", assets);
  console.log("Liabilities: ", liabilities);

  //   Working Capital Ration => assets/liabilities*100
  const workingCapitalRatio =
    liabilities === 0 ? 0 : (assets / liabilities) * 100;

  return workingCapitalRatio;
  //   //   Assets
  //   const debitAssets = data.filter(
  //     (item) =>
  //       item.account_category === "assets" &&
  //       item.value_type === "debit" &&
  //       assetsAccountTypes.includes(item.account_type)
  //   );
  //   const creditAssets = data.filter(
  //     (item) =>
  //       item.account_category === "assets" &&
  //       item.value_type === "credit" &&
  //       assetsAccountTypes.includes(item.account_type)
  //   );

  //   //   Liabilities
  //   const debitLiabilities = data.filter(
  //     (item) =>
  //       item.account_category === "liability" &&
  //       item.value_type === "debit" &&
  //       liabilitiesAccountTypes.includes(item.account_type)
  //   );
  //   const creditLiabilities = data.filter(
  //     (item) =>
  //       item.account_category === "liability" &&
  //       item.value_type === "credit" &&
  //       liabilitiesAccountTypes.includes(item.account_type)
  //   );

  //   console.log("Assets Credit: ", creditAssets);
  //   console.log("Assets Debit: ", debitAssets);
  //   console.log("Liabilities Credit: ", creditLiabilities);
  //   console.log("Liabilities Debit: ", creditLiabilities);
};
