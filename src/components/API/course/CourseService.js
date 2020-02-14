import axios from "axios";

class CourseService{
     getCourseList(){
        return axios.get("http://localhost:8080/allCourse");        
    }

    addCourse(course){
        console.log('create')
        return axios.post("http://localhost:8080/add-program-course",course);  
    }

}

export default new CourseService();