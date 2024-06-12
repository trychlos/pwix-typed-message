/*
 * pwix:typed-message/src/common/definitions/type-order.def.js
 *
 * Only define here standard levels as defined in man 3 syslog.
 * Synonyms are managed in MessageType.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict;

import { MessageType } from '../definitions/message-type.def.js';

export const TypeOrder = {
    K: [
        MessageType.C.EMERG,
        MessageType.C.ALERT,
        MessageType.C.CRIT,
        MessageType.C.ERR,
        MessageType.C.WARNING,
        MessageType.C.NOTICE,
        MessageType.C.INFO,
        MessageType.C.DEBUG
    ],

    /**
     * @returns {Array<String>} the list of ordered MessageType's
     */
    Knowns(){
        return this.K;
    },

    /**
     * @param {String} a a message type
     * @param {String} b another message type
     * @returns {Integer} -1 if a < b, +1 if a > b, 0 else
     */
    compare( a, b ){
        const idx_a = this.index( a );
        const idx_b = this.index( b);
        return idx_a < idx_b ? -1 : ( idx_a > idx_b ? +1 : 0 );
    },

    /**
     * @param {String} type a message type
     * @returns {Integer} the index of the message type in the order array
     */
    index( type ){
        for( let i=0; i<TypeOrder.K.length ; ++i ){
            if( TypeOrder.K[i] === type ){
                return i;
            }
        }
        assert( false, 'message type "'+type+'" is unknowned' );
    }
};
