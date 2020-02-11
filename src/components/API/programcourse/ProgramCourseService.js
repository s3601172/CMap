import axios from "axios";

class ProgramCourseService{
     getProgramCourseList(){
        return axios.get("http://localhost:8080/allCourseinProgram/BP094GEN8");        
    }

    


}

export default new ProgramCourseService();