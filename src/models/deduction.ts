import Task from 'src/models/task'

export default class Deduction extends Task {
    deductions: number

    constructor(
        name: string,
        deductions: number,
    ) {
        super(name)
        this.deductions = deductions
    }
}