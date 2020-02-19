import axios from "axios";

class ProgramService {
  getProgramList() {
    return axios.get("http://cmapbackend-env.dz3ak2mbhv.ap-southeast-2.elasticbeanstalk.com/code/BP094GEN8/year/2018");
  }

  getProgramCourseList() {
    return axios.get("http://cmapbackend-env.dz3ak2mbhv.ap-southeast-2.elasticbeanstalk.com/allCourseinProgram/BP094GEN8");
  }

  deleteCourse(course) {
    console.log("delete");
    return axios.delete("http://cmapbackend-env.dz3ak2mbhv.ap-southeast-2.elasticbeanstalk.com/delete-program-course", course);
  }

  updateCourse(course) {
    console.log("update");
    return axios.put("http://cmapbackend-env.dz3ak2mbhv.ap-southeast-2.elasticbeanstalk.com/update-program-course", course);
  }
}

export default new ProgramService();
