/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Task from 'src/models/task'
import Income from 'src/models/income'

export function calculate (state: { calculate: boolean; }) {
    state.calculate = !state.calculate
}

export function savingsToggle(state: { savingsToggle: boolean }) {
    state.savingsToggle = !state.savingsToggle
}

export function projectIncomeOver100Years (state: any, payload: Income): void {
    let array = new Array<number>(100).fill(payload.income)
    array = array.map((element: number, index: number) => {
      if (index < payload.startAge || index > payload.retirementAge) {
        return 0
      } else {
        return element
      }
    })
    array = array.map((elem: unknown, index: number) => array.slice(0, index + 1).reduce((a: number, b: number) => a + b))
    state.income = array
}

export function projectDeductionsOver100Years (state: any, payload: Income): void {
    let array = new Array<number>(100).fill(payload.deductions)
    array = array.map((element, index) => {
      if (index < payload.startAge) {
        return 0
      } else {
        return element
      }
    })
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))

    state.deductions = array
  }

export function deduct (state: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const array = state.income.map((item: number, index: number) => {
      return item - state.deductions[index]
    })

    state.savings = array
  }

export function compoundInterest (state: any, payload: Income): void {
    const temp = state.savings.map((x: number) => x)

    temp.forEach((value: number, index: number) => {
      if (index >= payload.startAge && index < payload.retirementAge) {
        temp[index] = getPeriodicCompounding(value, payload.interest / 100, index - payload.startAge - 1)
      }
    })
    const difference = temp[payload.retirementAge - 1] - temp[payload.retirementAge]

    temp.forEach((value:number, index:number) => {
      if (index >= payload.retirementAge) {
        temp[index] = value + difference
      }
    })

    state.total = temp
  }

  const getPeriodicCompounding = function (principal: number, interest: number, time: number) {
    return Math.pow(interest + 1, time) * principal
  }

export function setTask (state: any, task: Task): void {
  console.log('setTask')
  console.log(task)
  state.tasks.push(task)
}

export function deleteTask (state: any, task: Task): void {
  const result = state.tasks.findIndex((x: Task) => x === task)
  state.tasks.splice(result, 1)
}