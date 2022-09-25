import FinalView from "./FinalView"

function CalculateMedicareLevy(income: number) {
    if (income < 23356)
        return 0
    else
        return income * 0.02
}

function IncomeTaxView(props: PreTax) {
    const yearlyMedicareLevy = CalculateMedicareLevy(props.total)
    const total = props.total - yearlyMedicareLevy

    return <>
        <p><b>Medicare Levy</b></p>
        <p>Yearly: {yearlyMedicareLevy}</p>
        <p>Total: {yearlyMedicareLevy * props.years}</p>
        <FinalView total={total} years={props.years} super={props.super} />
    </>
}

interface PreTax {
    total: number
    years: number
    gross: number
    preTaxSalary: number
    super: number
}

export default IncomeTaxView;