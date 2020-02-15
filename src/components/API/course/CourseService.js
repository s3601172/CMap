import axios from "axios";

class CourseService{
     getCourseList(){
        return axios.get("http://localhost:8080/allCourse");        
    }

    addCourse(course){
        console.log('create')
        return axios.post("http://localhost:8080/add-program-course",course);  
    }

    getCourseTopicLevel(courseCode, topicCode) {
        return axios.get("http://localhost:8080/course-topic-level", {
          params: {
            "courseCode": courseCode,
            "topicCode": topicCode     
          }
        });
      }

    updateCourseTopicLevel(topicDetails){
        return axios.put("http://localhost:8080/update-course-topic", topicDetails);
    }
}

export default new CourseService();