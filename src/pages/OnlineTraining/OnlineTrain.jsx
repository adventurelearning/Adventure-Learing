import Choosepath from "../../components/Choosepath";
import CourseList from "../../components/CourseList";
import ExploreCourses from "../../components/ExploreCourses";
import Offers from "../../components/Offers";
import Sample from "../../components/Sample";
import StudentTraining from "../../components/StudentsTraining";
import TrainingSteps from "../../components/TrainingSteps";
import { Helmet } from "react-helmet";


function OnlineTrain() {

    return (
        <>
            <Helmet>
                <title>Online Training & Courses | Learn Anywhere, Anytime</title>
                <meta
                    name="description"
                    content="Adventure Learning, Coimbatore offers online & offline IT training in Full Stack, Data Science, Cloud, Python & more"
                />
                <meta
                    name="keywords"
                    content="Best Online Training Institute in Coimbatore . Online IT Courses with Placement Support . Online Software Training Courses for Freshers . Online Full Stack Development Training . Python & Java Online Training with Certification . "
                />
                <meta
                    property="og:title"
                    content="Top Online Training Programs for Tech Careers"
                />
                <meta
                    property="og:description"
                    content="Join our expert-led online training programs. From beginner to advanced, choose the right course to accelerate your career in tech."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.adventurelearning.in/online-training"
                />
                <meta property="og:image" content="/assets/logo-dark-BujUEHab.svg" />
                <meta
                    property="og:image:alt"
                    content="Adventure Learning Online Courses"
                />
            </Helmet>

            <StudentTraining />
            <Choosepath />
            {/* <TrainingSteps/> */}
            <Sample />
            <ExploreCourses />
            <CourseList />
            <Offers />
        </>
    )
}
export default OnlineTrain;