import Task from 'src/models/task'
import store from '../store/index'

export default class Deduction extends Task {
    deductions: number
    start: number
    end: number

    constructor(
        name: string,
        deductions: number,
        start: number,
        end: number
    ) {
        super(name, 1)
        this.deductions = deductions
        this.start = start
        this.end = end
    }

    calculate(): void {
        //eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void store.dispatch('graph/projectDeductionsOver100Years', this)
        void store.dispatch('graph/deduct')
    }
}