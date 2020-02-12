import axios from "axios";

class ProgramService{
    getProgramList(){
        return axios.get("http://localhost:8080/code/BP094GEN8/year/2018");
    }
}

export default new ProgramService();