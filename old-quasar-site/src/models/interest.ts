/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import store from '../store/index'
import Task from 'src/models/task'

export default class Interest extends Task { // to extend income
    interest: number

    constructor(
        name: string,
        interest: number,
    ) {
        super(name, 2)
        this.interest = interest
    }

    calculate(): void {
        //eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void store.dispatch('graph/compoundInterest', this)
    }
}