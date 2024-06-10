/*
 * /src/common/classes/typed-message.class.js
 *
 * A class which implements the ITypedMessage interface.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict; // up to nodejs v16.x
import mix from '@vestergaard-company/js-mixin';

import { OrderableStack } from 'meteor/pwix:orderable-stack';

import { ITypedMessage } from '../interfaces/ityped-message.iface.js';

export class TypedMessage  extends  mix( OrderableStack.Orderable ).with( ITypedMessage ){

    // static data

    // static methods

    // private data

    // private methods

    // public data

    /**
     * Constructor
     * @returns {TypedMessage}
     */
    constructor(){
        super( ...arguments );
        return this;
    }

    // the method each IOrderable implementation must provde
    IOrderableCompare( a, b ){
        let res = 0;
        return res;
    }
}
