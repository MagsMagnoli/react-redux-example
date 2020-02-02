import * as courseApi from "../../api/courseApi";
import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
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

export function saveCourse(course) {
  return async function(dispatch) {
    try {
      const savedCourse = await courseApi.saveCourse(course);
      dispatch(
        course.id
          ? updateCourseSuccess(savedCourse)
          : createCourseSuccess(savedCourse)
      );
    } catch (error) {
      throw error;
    }
  };
}
