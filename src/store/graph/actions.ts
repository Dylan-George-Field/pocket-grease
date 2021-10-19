/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Task from 'src/models/task'
import Income from 'src/models/income'
import Deduction from 'src/models/deduction'

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

export function projectDeductionsOver100Years (context: { commit: (arg0: string, arg1: Deduction) => void }, income: Deduction) {
    context.commit('projectDeductionsOver100Years', income)
}

export function deduct (context: { commit: (arg0: string) => void }) {
    context.commit('deduct')
}

export function compoundInterest (context: { commit: (arg0: string, arg1: Income) => void }, income: Income) {
    context.commit('compoundInterest', income)
}

export function setTask(context: { commit: (arg0: string, arg1: Task) => void }, task: Task) {
    context.commit('setTask', task)
}

export function deleteTask(context: { commit: (arg0: string, arg1: Task) => void }, task: Task) {
    context.commit('deleteTask', task)
}