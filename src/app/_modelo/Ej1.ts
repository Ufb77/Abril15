export interface Loan{
    principal: number,
    interestRate: number
}

export interface conventionalLoan extends Loan{
    months:number

}