'use strict';

const internals = {};

internals.getRootRealm = (realm) => {

    while (realm.parent) {
        realm = realm.parent;
    }

    return realm;
};

internals.getState = (realm) => {

    realm.plugins.sqldb = realm.plugins.sqldb || {};

    return realm.plugins.sqldb;
};


exports.plugin = {
    name: 'hateoas',
    pkg: require('../package.json'),
    multiple: true,
    requirements: {
        hapi: '>17.5.x'
    },
    register: async (server, options) => {

        const rootRealm = internals.getRootRealm(server.realm);
        const rootState = internals.getState(rootRealm);

        if (!rootState.initialized) {


            rootState.initialized = true;
        }
    }
};
