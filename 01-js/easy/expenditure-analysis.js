/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpendByCategoryHash = transactions.reduce((acc, {category, price}) => {
    acc[category] = acc[category] ? acc[category] + price : price;

    return acc;
  }, [])
  const totalSpendByCategoryArr = Object.keys(totalSpendByCategoryHash).map((key) => ({"category": key, "totalSpent": totalSpendByCategoryHash[key]}))
  return totalSpendByCategoryArr;
}

console.log(calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
]))

module.exports = calculateTotalSpentByCategory;
