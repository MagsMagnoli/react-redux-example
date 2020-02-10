import reducer from "./courseReducer";
import * as actions from "../actions/courseActions";

it("should add course when passwed CREATE_COURSE_SUCCESS", () => {
  const initialState = [{ title: "A" }, { title: "B" }];

  const course = { title: "C" };

  const action = actions.createCourseSuccess(course);

  const newState = reducer(initialState, action);

  expect(newState.length).toBe(3);
  expect(newState[0].title).toBe("A");
  expect(newState[1].title).toBe("B");
  expect(newState[2].title).toBe("C");
});

it("should update course when passwed UPDATE_COURSE_SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];

  const course = { id: 2, title: "New Title" };

  const action = actions.updateCourseSuccess(course);

  const newState = reducer(initialState, action);

  expect(newState.length).toBe(3);
  expect(newState[0].title).toBe("A");
  expect(newState[1].title).toBe("New Title");
  expect(newState[2].title).toBe("C");
});
