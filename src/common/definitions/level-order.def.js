/*
 * pwix:typed-message/src/common/definitions/level-order.def.js
 *
 * Only define here standard levels as defined in man 3 syslog.
 * Synonyms are managed in MessageLevel.
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict;

import { MessageLevel } from './message-level.def.js';

export const LevelOrder = {
    K: [
        MessageLevel.C.EMERG,
        MessageLevel.C.ALERT,
        MessageLevel.C.CRIT,
        MessageLevel.C.ERR,
        MessageLevel.C.WARNING,
        MessageLevel.C.NOTICE,
        MessageLevel.C.INFO,
        MessageLevel.C.DEBUG
    ],

    /**
     * @returns {Array<String>} the list of ordered MessageLevel's
     */
    Knowns(){
        return this.K;
    },

    /**
     * @param {String} a a message type
     * @param {String} b another message type
     * @returns {Integer} -1 if a < b, +1 if a > b, 0 else
     *  a < b means that a.level is lesser than b.level, which also means that a.severity is greater than b.severity
     */
    compare( a, b ){
        const idx_a = this.index( a );
        const idx_b = this.index( b);
        return idx_a < idx_b ? -1 : ( idx_a > idx_b ? +1 : 0 );
    },

    /**
     * @param {String} type a message type
     * @returns {Integer} the index of the message type (or of one of its synonyms)  in the order array
     */
    index( type ){
        const synonyms = MessageLevel.synonyms( type );
        for( let s=0 ; s<synonyms.length ; ++s ){
            const syn = synonyms[s];
            for( let i=0; i<LevelOrder.K.length ; ++i ){
                if( LevelOrder.K[i] === syn ){
                    return i;
                }
            }
        }
        assert( false, 'message type \''+type+'\' is unknowned' );
    }
};
