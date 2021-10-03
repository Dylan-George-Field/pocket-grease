/* eslint-disable @typescript-eslint/no-unsafe-assignment */


/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function calculate (state: { calculate: boolean; }) {
    state.calculate = !state.calculate
}

// export function projectIncomeOver100Years (state, payload:Income) {
//     let array = []<number>
//     array.fill(income)
//     array.fill(payload.income)
//     array = array.map((element, index) => {
//       if (index < startAge || index > retirementAge) {
//         return 0
//       } else {
//         return element
//       }
//     })
//     array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))
//     return array
// }