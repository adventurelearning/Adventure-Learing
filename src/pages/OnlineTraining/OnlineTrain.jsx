import Choosepath from "../../components/Choosepath";
import CourseList from "../../components/CourseList";
import ExploreCourses from "../../components/ExploreCourses";
import Offers from "../../components/Offers";
import Sample from "../../components/Sample";
import StudentTraining from "../../components/StudentsTraining";
import TrainingSteps from "../../components/TrainingSteps";


function OnlineTrain(){
    
    return(
        <>
        <StudentTraining/>
        <Choosepath/>
        {/* <TrainingSteps/> */}
        <Sample/>
        <ExploreCourses/>
        <CourseList/> 
        <Offers/>
        </>
    )
}
export default OnlineTrain;