import React, { useState } from "react";
import CourseStore from "../store/CourseStore";
import { nanoid } from "nanoid";
const CourseInput = () => {
  const [courseName, setCourseName] = useState("");

  const addCourse = CourseStore((state) => state.AddCourse);

  const onClickHandler = (e) => {
    e.preventDefault();
    addCourse({
      id: nanoid(),
      courseName: courseName,
    });
    setCourseName("");
  };

  return (
    <>
      <h1>Courses</h1>
      <form>
        <input
          type="text"
          value={courseName}
          placeholder="Enter Course Name"
          onChange={(e) => {
            setCourseName(e.target.value);
          }}
        ></input>
        <button onClick={onClickHandler}>Submit</button>
      </form>
    </>
  );
};

export default CourseInput;
