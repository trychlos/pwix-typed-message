/*
 * pwix:typed-message/src/common/classes/typed-message.class.js
 *
 * A simple class which implements the ITypedMessage interface.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict; // up to nodejs v16.x
import mix from '@vestergaard-company/js-mixin';

import { ITypedMessage } from '../interfaces/ityped-message.iface.js';

import { Base } from './base.class.js';

export class TypedMessage  extends  mix( Base ).with( ITypedMessage ){

    // static data

    // static methods

    // private data

    // private methods

    // public data

    /**
     * Constructor
     * @returns {TypedMessage} this instance
     */
    constructor(){
        super( ...arguments );
        return this;
    }
}
