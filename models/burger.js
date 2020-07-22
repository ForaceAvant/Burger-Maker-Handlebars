const orm = require("../config/orm");

const burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insertOne: function(burgerName, callback){
        orm.insertOne("burgers", ["burger_name", "devoured"], [burgerName, false], callback);
    },
    updateOne: function(burgerId, callback){
        const setId = "id=" + burgerId;
        orm.updateOne("burgers", {devoured: true}, setId, callback);
    }
};

module.exports = burger;