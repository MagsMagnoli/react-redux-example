// class example
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authorActions from "../../redux/actions/authorActions";
import * as courseActions from "../../redux/actions/courseActions";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert(`Loading authors failed ${error}`);
      });
    }

    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert(`Loading courses failed ${error}`);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
        {/* {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))} */}
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => ({
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).name
          }))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    // actions: bindActionCreators(courseActions, dispatch)
    actions: {
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch)
    }
  };
}

// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
