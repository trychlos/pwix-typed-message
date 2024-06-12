/*
 * pwix:typed-message/src/common/classes/messages-set.class.js
 *
 * A class derived from the OrderableStack base class.
 */

import { OStack } from 'meteor/pwix:orderable-stack';

export class MessagesSet extends OStack.OrderableStack {

    // static data

    // static methods

    // private data

    // private methods

    // public data

    /**
     * Constructor
     * @returns {MessagesSet}
     */
    constructor(){
        super( ...arguments );
        return this;
    }
}
