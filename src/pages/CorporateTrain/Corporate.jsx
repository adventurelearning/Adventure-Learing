import CallToAction from "../../components/CalltoAction";
import Companies from "../../components/Companies";
import CorporateTraining from "../../components/CorporateTraining";
import LearnerToExpert from "../../components/LearnertoExpert";
import SpecialLearners from "../../components/SpecialLearners";
import UpskillForm from "../../components/UpskillForm";
import WhyAdventureLearning from "../../components/WhyAdventureLearning";

function Corporate(){
    return(
        <>
     <CorporateTraining/>
     <WhyAdventureLearning/>
     <LearnerToExpert/>
     <Companies/>
     {/* <SpecialLearners/> */}
     <UpskillForm/>
     <CallToAction/>
        </>
    )
}
export default Corporate;