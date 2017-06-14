var courses = require('./mockCoursesData');
var _ = require('lodash');

function _clone(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

 var CourseApi = {
  getAllcourses: function() {
    return _clone(courses);
  },
  getCoursesByAuthor: function(Author){
    var _course = _.find(courses, {Author: Author});
    return _clone(_course);
  }
};
module.exports = CourseApi;
