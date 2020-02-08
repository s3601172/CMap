import axios from "axios";

class CourseService{
    getTopicList(){
        return axios.get("http://localhost:8080/course-list");
    }
}

export default new CourseService();