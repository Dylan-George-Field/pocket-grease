/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Income from 'src/models/income'

/* eslint-disable @typescript-eslint/no-unsafe-call */
export function calculate (context: { commit: (arg0: string) => void }) {
    context.commit('calculate')
}

export function savingsToggle (context: { commit: (arg0: string) => void }) {
    context.commit('savingsToggle')
}

export function projectIncomeOver100Years (context: { commit: (arg0: string, arg1: Income) => void }, income: Income) {
    context.commit('projectIncomeOver100Years', income)
}

export function projectDeductionsOver100Years (context: { commit: (arg0: string, arg1: Income) => void }, income: Income) {
    context.commit('projectDeductionsOver100Years', income)
}

export function deduct (context: { commit: (arg0: string) => void }) {
    context.commit('deduct')
}

export function compoundInterest (context: { commit: (arg0: string, arg1: Income) => void }, income: Income) {
    context.commit('compoundInterest', income)
}