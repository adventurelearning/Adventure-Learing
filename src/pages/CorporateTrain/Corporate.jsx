import CallToAction from "../../components/CalltoAction";
import Companies from "../../components/Companies";
import CorporateTraining from "../../components/CorporateTraining";
import LearnerToExpert from "../../components/LearnertoExpert";
import SpecialLearners from "../../components/SpecialLearners";
import UpskillForm from "../../components/UpskillForm";
import WhyAdventureLearning from "../../components/WhyAdventureLearning";
import { Helmet } from "react-helmet";

function Corporate() {
  return (
    <>
      <Helmet>
        <title>Corporate Training Programs | Upskill Your Tech Teams</title>
        <meta
          name="description"
          content="Adventure Learning offers customized Corporate Training in Coimbatore. Upskill your team in Full Stack, Data Science, Cloud, Python & more with expert mentors."
        />
        <meta
          name="keywords"
          content="Corporate Training Institute in Coimbatore . Customized Corporate Training Programs for IT Companies . Corporate Training in Data Science & AI . Corporate Training for Freshers & IT Professionals"
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
  );
}
export default Corporate;
