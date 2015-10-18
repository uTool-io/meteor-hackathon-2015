Trades = new Mongo.Collection('trades');

//@TODO: Refactor and create global permissions for all Collections

//ownsDocument = function (userId, doc) {
//    return doc && doc.userId === userId;
//}
//
//Trades.allow({
//    insert: ownsDocument,
//    update: ownsDocument,
//    remove: ownsDocument
//});
//
//
//Trades.allow({
//    'insert': function (userId, doc) {
//        /* user and doc checks ,
//         return true to allow insert */
//        return true;
//    }
//});
