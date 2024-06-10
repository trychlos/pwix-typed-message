/*
 * pwix:typed-message/src/common/js/configure.js
 */

import _ from 'lodash';

TM._conf = {};

TM._defaults = {
    verbosity: TM.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
TM.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( TM._conf, TM._defaults, o );
        // be verbose if asked for
        if( TM._conf.verbosity & TM.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:typed-message configure() with', o, 'building', TM._conf );
            console.log( 'pwix:typed-message configure() with', o );
        }
    }
    // also acts as a getter
    return TM._conf;
}

_.merge( TM._conf, TM._defaults );
