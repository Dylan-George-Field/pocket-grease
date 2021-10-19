/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Task from 'src/models/task'
import store from '../store/index'

export default class Income extends Task {
    income: number
    startAge: number
    retirementAge: number
    interest: number

    constructor(
        name: string,
        income: number,
        startAge: number,
        retirementAge: number,
        interest: number
    ) {
        super(name)
        this.income = income
        this.startAge = startAge
        this.retirementAge = retirementAge
        this.interest = interest
    }

    calculate(): void {
        //eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void store.dispatch('graph/projectIncomeOver100Years', this)
    }
}