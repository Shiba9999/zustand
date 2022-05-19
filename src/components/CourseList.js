import React from "react";
import CourseStore from "../store/CourseStore";

function CourseList() {
  const courses = CourseStore((state) => state.courses);
  const RemoveCourse = CourseStore((state) => state.RemoveCourse);
  console.log(courses);

  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroudColor: course.completed ? "#00FF0044" : "white",
                }}
              >
                <span>{course?.title}</span>
                <button
                  onClick={() => {
                    RemoveCourse(course.id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}lc
      </ul>
    </>
  );
}

export default CourseList;
