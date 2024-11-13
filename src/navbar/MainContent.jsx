import React from 'react';
import LoanProcess from '../component/LoanProcess';
import LoanCalculator from '../component/LoanCalculator';
import LoanCalculate from './LoanCalculate';
import SortFAQ from './SortFAQ';
import Process from '../component/Process';
import FeaturesComponent from '../component/FeacturesComponent';
import Loan from '../component/Loan';
import WhyChoose from '../component/WhyChoose';
import LoanEligibility from '../component/LoanEligibility';
function MainContent() {
 
  return (
    <div>
      <Process/>
      <FeaturesComponent/>
      <LoanCalculator />
      <WhyChoose/>
      <LoanCalculate />
      <Loan />
      <LoanProcess />
      <LoanEligibility/>
      <SortFAQ />
    </div>
  );
}

export default MainContent;
