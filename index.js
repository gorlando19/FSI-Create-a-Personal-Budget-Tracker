let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0
let answer = null

// Your Code Here
for(let i = 0; i < weeklyExpenseQuestions.length; i++) {
    answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    console.log(answer)
    weeklyExpenses += answer
    console.log(weeklyExpenses)
}
answer = null
for(let i = 0; i < monthlyExpenseQuestions.length; i++) {
    answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    console.log(answer)
    monthlyExpenses += answer
    console.log(monthlyExpenses)
}
answer = null
for(let i = 0; i < annualExpenseQuestions.length; i++) {
    answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    console.log(answer)
    annualExpenses += answer
    console.log(annualExpenses)
}

