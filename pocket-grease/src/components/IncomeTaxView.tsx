import MedicareLevyView from './MedicareLevyView'

function CalculateIncomeTax(income: number) {
    if (income <= 18200) {
        let tax = 0;
        
        return tax;
    }
    else if (income > 18200 && income <= 45000) {
        let bracket = income - 18200
        let tax = bracket * 0.19
        
        return tax;
    } 
    else if (income > 45000 && income <= 120000) {
        let bracket = income - 45000
        let tax = 5092 + bracket * 0.325

        return tax
    }
    else if (income > 120000 && income <= 180000) {
        let bracket = income - 120000
        let tax = 29467 + bracket * 0.37

        return tax
    }
    else if (income > 180000) {
        let bracket = income - 180000
        let tax = 51667 + bracket * 0.45

        return tax
    }

    return income;
}

function IncomeTaxView(props: PreTax) {
    const yearlyIncomeTax = CalculateIncomeTax(props.preTaxSalary)
    const total = props.preTaxSalary - yearlyIncomeTax
    
    return <>
        <p><b>Income Tax</b></p>
        <p>Yearly: {yearlyIncomeTax}</p>
        <p>Total: {yearlyIncomeTax * props.years}</p>
        <MedicareLevyView total={total} preTaxSalary={props.preTaxSalary} years={props.years} gross={props.gross} super={props.super} />
    </>
}

interface PreTax {
    preTaxSalary: number
    years: number
    gross: number
    super: number
}

export default IncomeTaxView;