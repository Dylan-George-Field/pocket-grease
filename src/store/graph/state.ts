import Task from 'src/models/task'

export default function () {
  return {
    calculate: false,
    savingsToggle: false,
    total: [],
    income: [],
    deductions: [],
    savings: [],
    tasks: [
      {
        name: 'First Task'
      }, 
      {
        name: 'Second Task'
      }
    ] as Task[]
  }
}
