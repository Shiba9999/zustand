import React from "react";
import CourseStore from "../store/CourseStore";

const CourseList = () => {
  const courses = CourseStore((state) => state.courses);
  const removeCourse = CourseStore((state) => state.removeCourse);
  console.log(courses);

  return (
    <>
      <div>
        {courses.map((course) => (
          <ol key={course.id}>
            <li>{course.courseName}</li>
            <button
              onClick={() => {
                removeCourse(course.id);
              }}
            >
              remove
            </button>
          </ol>
        ))}
      </div>
    </>
  );
};

export default CourseList;
