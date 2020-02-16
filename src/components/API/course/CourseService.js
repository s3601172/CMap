import axios from "axios";

class CourseService{
     getCourseList(){
        return axios.get("http://localhost:8080/allCourseNotInPtogram/BP094GEN8");        
    }

    addCourse(course){
        console.log('create')
        return axios.post("http://localhost:8080/add-program-course",course); 
      
    }


}

export default new CourseService();