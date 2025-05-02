import CallToAction from "../../components/CalltoAction";
import Companies from "../../components/Companies";
import CorporateTraining from "../../components/CorporateTraining";
import LearnerToExpert from "../../components/LearnertoExpert";
import SpecialLearners from "../../components/SpecialLearners";
import UpskillForm from "../../components/UpskillForm";
import WhyAdventureLearning from "../../components/WhyAdventureLearning";
import { Helmet } from "react-helmet-async";

function Corporate() {
    return (
        <>
            <Helmet>
                <title>Corporate Training Programs | Upskill Your Tech Teams</title>
                <meta
                    name="description"
                    content="Empower your workforce with customized corporate training in full stack development, cloud computing, and more. Scalable, hands-on, and outcome-driven solutions for teams."
                />
                <meta
                    property="og:title"
                    content="Corporate Tech Training for Modern Teams"
                />
                <meta
                    property="og:description"
                    content="Future-proof your teams with expert-led corporate training in software development. Custom learning paths, flexible delivery, and real-world projects."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.adventurelearning.in/corporate-training"
                />
                <meta property="og:image" content="/assets/logo-dark-BujUEHab.svg" />
                <meta
                    property="og:image:alt"
                    content="Corporate Training by Adventure Learning"
                />
            </Helmet>

            <CorporateTraining />
            <WhyAdventureLearning />
            <LearnerToExpert />
            <Companies />
            {/* <SpecialLearners/> */}
            <UpskillForm />
            <CallToAction />
        </>
    )
}
export default Corporate;