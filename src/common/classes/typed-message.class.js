/*
 * pwix:typed-message/src/common/classes/typed-message.class.js
 *
 * A class which implements the ITypedMessage interface.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict; // up to nodejs v16.x
import mix from '@vestergaard-company/js-mixin';

import { OStack } from 'meteor/pwix:orderable-stack';

import { ITypedMessage } from '../interfaces/ityped-message.iface.js';

import { TypeOrder } from '../definitions/type-order.def.js';

export class TypedMessage  extends  mix( OStack.Orderable ).with( ITypedMessage ){

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

    // the method each IOrderable implementation must provide
    IOrderableCompare( a, b ){
        assert( a instanceof ITypedMessage, 'expected an ITypedMessage instance' );
        assert( b instanceof ITypedMessage, 'expected an ITypedMessage instance' );
        const level_a = a.ITypedMessageType();
        const level_b = b.ITypedMessageType();
        return TypeOrder.compare( level_a, level_b );
    }
}
