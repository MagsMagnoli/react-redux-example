import * as actions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// test async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("load courses thunk", () => {
    it("should dispatch BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", async () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application.json" }
      });

      const expected = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses }
      ];

      const store = mockStore({ courses: [] });

      await store.dispatch(actions.loadCourses());

      expect(store.getActions()).toEqual(expected);
    });
  });
});

describe("createCourseSuccess", () => {
  it("should create CREATE_COURSE_SUCCESS action", () => {
    // arrange
    const course = courses[0];
    const expected = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };

    // act
    const action = actions.createCourseSuccess(course);

    // assert
    expect(action).toEqual(expected);
  });
});
