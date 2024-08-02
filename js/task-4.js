const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(user => user.balance)
    .reduce((total, balance) => total + balance, 0);
};

// Test 
console.log(getTotalBalanceByGender(allUsers, "male")); // 12053
console.log(getTotalBalanceByGender(allUsers, "female")); // 8863
