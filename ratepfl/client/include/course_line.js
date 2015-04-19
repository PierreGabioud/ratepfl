Template.courseLine.helpers({
    semesterName: function(){
        return SEMESTER_NAMES[this.semester-1];
    },
});

