export default class Task {
    name: string
    income: number
    deductions: number
    startAge: number
    retirementAge: number
    interest: number

    constructor(
        name: string,
        income: number,
        deductions: number,
        startAge: number,
        retirementAge: number,
        interest: number,
    ) {
        this.name = name
        this.income = income
        this.deductions = deductions
        this.startAge = startAge
        this.retirementAge = retirementAge
        this.interest = interest
    }
}
//income.value, deductions.value, startAge.value, retirementAge.value, interest.value