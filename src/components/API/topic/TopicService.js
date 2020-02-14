import axios from "axios";

class TopicService {
  getTopicList() {
    return axios.get("http://localhost:8080/topic-list");
  }

  getCourseTopicList(courseCode) {
    return axios.get("http://localhost:8080/course-topic-details", {
      params: {
        "courseCode": courseCode
      }
    });
  }
}

export default new TopicService();
