import create from "zustand";
const courseStoreState = (set) => ({
  courses: [],
  AddCourse: (courseName) =>
    set((state) => ({ courses: [courseName, ...state.courses] })),
  removeCourse:(cId)=> set((state)=>({
    courses:state.courses.filter((c)=>c.id !== cId)
  }))
});
const CourseStore = create(courseStoreState);
export default CourseStore;
