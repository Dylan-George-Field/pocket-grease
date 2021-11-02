/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Task from 'src/models/task'
import Income from 'src/models/income'
import Deduction from 'src/models/deduction'

export function calculate (state: { calculate: boolean; }) {
    state.calculate = !state.calculate
}

export function clearCanvas (state: any) {
  state.income = []
  state.total = []
  state.deductions = []
  state.savings = []
}

export function savingsToggle (state: { savingsToggle: boolean }) {
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

    if (state.income.length > 0) {
      state.income = state.income.map((e: number, i:number) => e + array[i])
    } else {
      state.income = array
    }
}

export function projectDeductionsOver100Years (state: any, payload: Deduction): void {
    let array = new Array<number>(100).fill(payload.deductions)
    array = array.map((element, index) => {
      if (index < payload.start) {
        return 0
      } else {
        return element
      }
    })
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))

    if (state.deductions.length > 0) {
      state.deductions = state.deductions.map((e: number, i:number) => e + array[i])
    } else {
      state.deductions = array
    }
  }

export function deduct (state: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const array = state.income.map((item: number, index: number) => {
      return item - state.deductions[index]
    })

    state.savings = array
  }

export function compoundInterest (state: any): void {
    const savings: number[] = state.savings

    const difference = savings.map((element: number, index: number) => {
      return element - savings[index - 1]
    })

    state.total = savings.map((element: number, index: number) => {
      let interestAccrued = 0
      let total = 0
      if (element > 0) {
        interestAccrued = element * .05
        total = element + interestAccrued
        savings[index + 1] = (difference[index] + total)
      }
      return element + interestAccrued
    })
 }

export function setTask (state: any, task: Task): void {
  state.tasks.push(task)
}

export function deleteTask (state: any, task: Task): void {
  const result = state.tasks.findIndex((x: Task) => x === task)
  state.tasks.splice(result, 1)
}

export function sortTasks (state: any): void {
  state.tasks.sort((a: Task, b: Task) => (a.priority > b.priority) ? 1 : -1)
}