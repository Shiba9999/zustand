import React, { useState } from "react";
import CourseStore from "../store/CourseStore";
import { nanoid } from 'nanoid'

function CourseInput() {
  const [courseName, setCourseName] = useState("");
  const AddCourse = CourseStore(state => state.AddCourse);
  const courses=CourseStore (state=>state.courses)
  const onClickHandler = (e) => {
    e.preventDefault();
    AddCourse({
        id: nanoid(),
        title: courseName
    });
    setCourseName("");
  };
  console.log("courses",courses);
  return (
    <form>
      <input
        placeholder="enter course"
        value={courseName}
        type="text"
        onChange={(e) => {
          setCourseName(e.target.value);
        }}
      ></input>
      <button onClick={onClickHandler}>Submit</button>
    </form>
  );
}

export default CourseInput;
