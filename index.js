const {init , types , orderBy , limit} = require('./Library/Utils');
const Model =  require('./Library/index');
const Validator = require('./Library/Validation');

module.exports = {
    Model,
    init,
    types,
    Validator,
    limit,
    orderBy
}

