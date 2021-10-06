/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Income from 'src/models/income'

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function calculate (state: { calculate: boolean; }) {
    state.calculate = !state.calculate
}

export function projectIncomeOver100Years (state: any, payload: Income): void {
    let array = new Array<number>(100).fill(parseInt(payload.income))
    array = array.map((element: number, index: number) => {
      if (index < parseInt(payload.startAge) || index > parseInt(payload.retirementAge)) {
        return 0
      } else {
        return element
      }
    })
    array = array.map((elem: unknown, index: number) => array.slice(0, index + 1).reduce((a: number, b: number) => a + b))
    state.income = array
}

export function projectDeductionsOver100Years (state: any, payload: Income): void {
    let array = new Array<number>(100).fill(parseInt(payload.deductions))
    array = array.map((element, index) => {
      if (index < parseInt(payload.startAge)) {
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
      if (index > 24 && index < 65) {
        temp[index] = getPeriodicCompounding(value, parseInt(payload.interest) / 100, index - 24)
      }
    })
    const difference = temp[64] - temp[65]

    temp.forEach((value:number, index:number) => {
      if (index >= 65) {
        temp[index] = value + difference
      }
    })
    
    state.total = temp
  }

  const getPeriodicCompounding = function (principal: number, interest: number, time: number) {
    return Math.pow(interest + 1, time) * principal
  }