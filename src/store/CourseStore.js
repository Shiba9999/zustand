import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseDataHook = (set) => ({
  courses: [],
  AddCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  RemoveCourse: (Courseid) => {
    set((state) => ({
        courses:state.courses.filter((c)=>c.id !==Courseid)
    }));
  },
});
const CourseStore = create(
  devtools(
    persist(courseDataHook, {
      name: "test",
    })
  )
);

export default CourseStore;
