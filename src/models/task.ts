export default abstract class Task {
    name: string
    calculation: number[]
    priority: number

    constructor(name: string, priority: number) {
        this.name = name
        this.calculation = []
        this.priority = priority
    }

    abstract calculate(): void
}
