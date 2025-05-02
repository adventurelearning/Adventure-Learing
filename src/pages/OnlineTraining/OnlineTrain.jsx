import Choosepath from "../../components/Choosepath";
import CourseList from "../../components/CourseList";
import ExploreCourses from "../../components/ExploreCourses";
import Offers from "../../components/Offers";
import Sample from "../../components/Sample";
import StudentTraining from "../../components/StudentsTraining";
import TrainingSteps from "../../components/TrainingSteps";
import { Helmet } from "react-helmet-async";


function OnlineTrain() {

    return (
        <>
            <Helmet>
                <title>Online Training & Courses | Learn Anywhere, Anytime</title>
                <meta
                    name="description"
                    content="Explore a wide range of online courses including Full Stack Development, Data Science, and more. Learn from industry experts at your own pace – start today!"
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