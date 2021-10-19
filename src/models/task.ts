export default abstract class Task {
    name: string
    calculation: number[]

    constructor(name: string) {
        this.name = name
        this.calculation = []
    }

    abstract calculate(): void
}
