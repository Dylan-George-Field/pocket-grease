function FinalView(props: PreTax) {
    const finalAmount = props.total + props.super

    return <>
        <p><b>Final</b></p>
        <p>Yearly: {props.total}</p>
        <p>Yearly + Super: {finalAmount}</p>
        <p>Total: {props.total * props.years}</p>
        <p>Total + Super: {finalAmount * props.years}</p>
    </>
}

interface PreTax {
    total: number
    years: number
    super: number
}

export default FinalView;