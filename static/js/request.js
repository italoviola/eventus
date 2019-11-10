var RequestClass = function() {
    getList()
}; 

RequestClass.prototype.getList = function() {
    return "My List";
};

exports.Request = RequestClass;