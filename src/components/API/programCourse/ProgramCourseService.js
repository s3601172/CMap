import axios from "axios";

class ProgramCourseService{
     getProgramCourseList(){
        return axios.get("http://localhost:8080/allCourseinProgram/BP094GEN8");        
    }

    removeCourse(programCode,courseCode,semester){
        console.log('delete')
        return axios.delete(`http://localhost:8080/delete-program-course/${programCode}/${courseCode}/${semester}`); 
      
    }

    updateCourse(course){
        console.log('update')
        return axios.put("http://localhost:8080/update-program-course",course); 
      
    }


}

export default new ProgramCourseService();