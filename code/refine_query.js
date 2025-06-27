(function refineQuery(current, parent) {
    current.addQuery('u_date', parent.u_date);
    current.query();
})(current, parent);
