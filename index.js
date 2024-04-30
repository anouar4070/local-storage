//////* EXERCISE 1 *//////
// Function to store user information in localStorage
function storeUserInfo(firstName, lastName, age, country, city) {

  const userData = {
    firstName,
    lastName,
    age,
    country,
    city,
  };

  const userDataJSON = JSON.stringify(userData);
  localStorage.setItem("userInfo", userDataJSON);
}

// Example
storeUserInfo("Anouar", "Garbaa", 31, "Tunisia", "Sousse");

//////* EXERCISE 2 *//////
// Function to create a student object
function createStudent(firstName, lastName, age, skills, country, enrolled) {
  return {
    firstName,
    lastName,
    age,
    skills, // Array 
    country,
    enrolled: enrolled , 
  };
}

localStorage.setItem("studentData", JSON.stringify(student1));

//////* EXERCISE 3 *//////

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
  firstName: "Anouar",
  lastName: "G",
  incomes: {},
  expenses: {},
  addIncome: function (description, amount) {
    personAccount.incomes[description] = amount;
  },
  addexpense: function (description, amount) {
    personAccount.expenses[description] = amount;
  },

  totalIncome: function () {
    let totalIncome = 0;
    for (income in personAccount.incomes) {
      totalIncome += personAccount.incomes[income];
    }
    return totalIncome;
  },

  totalExpense: function () {
    let totalExpense = 0;
    for (expense in personAccount.expenses) {
      totalExpense += personAccount.expenses[expense];
    }
    return totalExpense;
  },

  balance: function () {
   
    let balance = totalIncome() - totalExpense();
    return balance;
  },
};


