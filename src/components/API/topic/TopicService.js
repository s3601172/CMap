
import axios from "axios";

class TopicService{
    getTopicList(){
        return axios.get("http://localhost:8080/topic-list");
    }
}

export default new TopicService();