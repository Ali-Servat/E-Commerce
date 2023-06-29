import CustomerCard from '../../../components/CustomerCard/CustomerCard';
import { CardsContainer, CustomerFeedbackContainer, Heading } from './styles';

const CustomerFeedback = () => {
     return (
          <CustomerFeedbackContainer>
               <Heading>What our Customers Have to Say</Heading>
               <CardsContainer>
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
               </CardsContainer>
          </CustomerFeedbackContainer>
     );
};

export default CustomerFeedback;
