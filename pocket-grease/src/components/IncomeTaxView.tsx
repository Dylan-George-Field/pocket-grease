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
    const yearlyIncomeTax = CalculateIncomeTax(props.total)
    
    return <>
        <p>Tax</p>
        <p>Income tax yearly: {yearlyIncomeTax}</p>
        <p>Income tax total: {yearlyIncomeTax * props.years}</p>
    </>
}

interface PreTax {
    total: number;
    years: number;
}

export default IncomeTaxView;