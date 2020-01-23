import React from "react";

function CourseTypeMenu(){
    return(
        <div>
            <select>
                <option></option>
                <option value ="Core">Core</option>
                <option value ="Elective">Elective</option>
                <option value ="UniversityElective">University Elective</option>
            </select>
        </div>
    )
}

function ToBeTakenMenu(){
    return(
        <div>
            <select>
                <option></option>
                <option value = "1">Semester 1</option>
                <option value = "2"> Semester 2</option>
                <option vaue = "3"> Senester 3</option>
                <option value = "4"> Semester 4</option>
                <option value = "5"> Semester 5</option>
                <option value = "6"> Semester 6</option>
            </select>
        </div>
    )
}

function AllocateToMenu(){
    return(
        <div>
            <select>
                <option></option>
                <option value = "P1">P1, Bachelor of Information Technology</option>
                <option value= "CS1">CS1, Bachelor of Computer Science</option>
            </select>
        </div>
    )
}

export{
    CourseTypeMenu,
    ToBeTakenMenu,
    AllocateToMenu
}


