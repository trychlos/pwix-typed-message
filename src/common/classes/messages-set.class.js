/*
 * /src/common/classes/messages-set.class.js
 *
 * A class derived from the OrderableStack base class.
 */

import { OrderableStack } from 'meteor/pwix:orderable-stack';

export class MessagesSet extends OrderableStack.OrderableStack {

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
