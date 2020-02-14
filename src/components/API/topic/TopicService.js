import axios from "axios";

class TopicService {
  getTopicList() {
    return axios.get("http://localhost:8080/topic-list");
  }

  getTopicDetails(courseTopic) {
    return axios.get("http://localhost:8080/topic-details", {
      params: {
        "topicCode": courseTopic
      }
    });
  }
}

export default new TopicService();
