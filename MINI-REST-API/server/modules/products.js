// sync
exports.all = function ( ) {
    return "[p1, p2]"
}

exports.details = function ( params ) {
    let id = params.find( obj => obj['id'])  // getParam('id)

    if ( id.id == "1") {
        return "p1"
    } else if ( id.id == "2") {
        return "p2"
    } 
    return "No such product"

}

exports.delete = function () {
    return "deleted p1"
}

exports.save = function () {
    return "saved new product"
}