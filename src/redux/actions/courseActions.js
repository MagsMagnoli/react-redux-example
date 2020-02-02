import * as courseApi from "../../api/courseApi";
import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return async function(dispatch) {
    try {
      const courses = await courseApi.getCourses();
      dispatch(loadCourseSuccess(courses));
    } catch (error) {
      throw error;
    }
  };
}
