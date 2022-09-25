import IncomeTaxView from "./IncomeTaxView"

function CalculateSuperannuation(income: number) {
    return income * 0.105
}

function SuperannuationView(props: Super) {
    const superannuation = CalculateSuperannuation(props.total)
    const preTaxSalary = props.total - superannuation

    return <>
        <p><b>Superannuation</b></p>
        <p>Yearly: {superannuation}</p>
        <p>Total: {superannuation * props.years}</p>
        <IncomeTaxView preTaxSalary={preTaxSalary} years={props.years} gross={props.total} super={superannuation} />
    </>
}

interface Super {
    total: number;
    years: number;
}

export default SuperannuationView;