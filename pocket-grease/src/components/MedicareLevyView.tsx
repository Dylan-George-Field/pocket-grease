function CalculateMedicareLevy(income: number) {
    if (income < 23356)
        return 0
    else
        return income * 0.02
}

function IncomeTaxView(props: PreTax) {
    const yearlyMedicareLevy = CalculateMedicareLevy(props.total)
    
    return <>
        <p>Medicare Levy</p>
        <p>Levy yearly: {yearlyMedicareLevy}</p>
        <p>Levy total: {yearlyMedicareLevy * props.years}</p>
    </>
}

interface PreTax {
    total: number;
    years: number;
}

export default IncomeTaxView;