/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export function calculate (context: { commit: (arg0: string) => void }) {
    context.commit('calculate')
}

export function projectIncomeOver100Years (context: { commit: (arg0: string) => void }) {
    context.commit('projectIncomeOver100Years')
}