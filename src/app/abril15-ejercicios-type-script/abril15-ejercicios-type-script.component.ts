import { Component } from '@angular/core';
import { Loan, conventionalLoan } from '../_modelo/Ej1';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abril15-ejercicios-type-script',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './abril15-ejercicios-type-script.component.html',
  styleUrl: './abril15-ejercicios-type-script.component.css'
})
export class Abril15EjerciciosTypeScriptComponent {

   ej1_1: Loan = {
    principal: 30000,
    interestRate: 5
};

 ej1_2: conventionalLoan = {
    principal: 30000,
    interestRate: 5,
    months: 180
};

  // Ejercicio 1
   calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
      // Calculates the monthly payment of an interest only loan
      let interest =  (loanTerms.interestRate / 1200); // Calculates the Monthly Interest Rate of the loan
      let payment;
      payment = loanTerms.principal * interest; 
      return 'The interest only loan payment is ' + payment.toFixed(2);
  }

   calculateConventionalLoanPayment(conventionalLoan:conventionalLoan):string {
    // Calculates the monthly payment of a conventional loan
    let interest = conventionalLoan.interestRate / 1200; // Calculates the Monthly Interest Rate of the
    //loan
    let payment;
    payment = conventionalLoan.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoan.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
    
    }

    

    pruebaLoan(){
      let resultado1 = this.calculateInterestOnlyLoanPayment(this.ej1_1);
      let resultado2 = this.calculateConventionalLoanPayment(this.ej1_2);

      console.log(resultado1);
      console.log(resultado2)
    }
}
