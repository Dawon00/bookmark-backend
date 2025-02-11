const Router = require("koa-router");
const { boardRouteV1 } = require("./boardRouteV1");
const { accountRouteV1 } = require("./accountRouteV1");
const { adminRouteV1 } = require("./adminRouteV1");
const { bookTimerRouteV1 } = require("./bookTimerRouteV1");

const { lastPageRouteV1 } = require("./lastPageRouteV1");
const { libraryRouteV1 } = require('./libraryRouteV1')
const { bookShelfRouteV1 } = require("./bookShelfRouteV1");

const { onelinerRouteV1 } = require("./onelinerRouteV1");

const V1 = () => {
    const router = Router();
    boardRouteV1(router);
    accountRouteV1(router);
    adminRouteV1(router);
    bookTimerRouteV1(router);
    lastPageRouteV1(router);
    libraryRouteV1(router);
    bookShelfRouteV1(router);
    onelinerRouteV1(router);
    return router;
};

module.exports = { V1 };
