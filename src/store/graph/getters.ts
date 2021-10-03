/* eslint-disable @typescript-eslint/no-unsafe-return */

import Income from 'src/models/income';

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function calculate (state: { calculate: boolean; }) {
    return state.calculate;
}

export function income (state: { income: Income; }) {
    return state.income;
}

export function deductions (state: { deductions: []; }) {
    return state.deductions;
}