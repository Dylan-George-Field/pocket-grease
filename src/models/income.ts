import Task from 'src/models/task'

export default class Income extends Task {
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
        interest: number
    ) {
        super(name)
        this.income = income
        this.deductions = deductions
        this.startAge = startAge
        this.retirementAge = retirementAge
        this.interest = interest
    }
}