/*
 * pwix:typed-message/src/common/interfaces/ityped-message.iface.js
 *
 * The ITypedMessage interface provides methods to have a typed message, suitable for example for logs and error messages in a UI.
 *
 * Partially based on:
 * - https://datatracker.ietf.org/doc/html/rfc5424 Syslog protocol
 * - man 3 syslog
 */

import _ from 'lodash';
const assert = require( 'assert' ).strict;
import { DeclareMixin } from '@vestergaard-company/js-mixin';

import { MessageLevel } from '../definitions/message-level.def.js';
import { LevelOrder } from '../definitions/level-order.def.js';

export const ITypedMessage = DeclareMixin(( superclass ) => class extends superclass {

    // private data

    #emitter = null;
    #level = null;
    #message = null;

    /**
     * @summary Constructor
     * @param {Object|String} args either a message string or an object with following keys:
     *  - emitter {String} the emitter, defaulting to null
     *  - level {String} a key from MessageLevel.C, defaulting to MessageLevel.C.LOG
     *  - message {String} the message itself (mandatory)
     * @returns {ITypedMessage} this instance
     */
    constructor( args ){
        super( ...arguments );

        assert( args, 'arguments must be set' );
        if( _.isObject( args )){
            assert( !args.type || Object.keys( MessageLevel.C ).includes( args.type ), 'type is invalid' );
            assert( args.message && _.isString( args.message ) && args.message.length, 'message must be a non-empty string' );
        } else {
            assert( _.isString( args ) && args.length, 'if not an object, argument must be a non-empty string' );
        }

        this.#emitter = args.emitter || null;
        this.#level = args.level || MessageLevel.C.LOG;
        this.#message = _.isString( args ) ? args : args.message;

        return this;
    }

    /**
     * @summary Compare the severity level of this ITypedMessage with another one
     * @param {ITypedMessage} tm
     * @returns -1 if this has a lower priority (aka severity) level than tm
     *           0 if this and tm have the same priority level
     *          +1 if this has a greater priority level than tm
     * Note:
     *  We keep the usual semantic where 'EMERGENCY' is greater (has a higher priority level, is more severe) than 'DEBUG'
     *  so sort the levels in the reverse order of their index.
     *  We so have EMERG > ALERT > CRIT > ERR > WARNING > NOTICE > INFO > DEBUG.
     */
    iTypedMessageCompare( tm ){
        assert( tm instanceof ITypedMessage, 'expected an ITypedMessage instance, got '+tm );
        const level_this = this.iTypedMessageLevel();
        const level_tm = tm.iTypedMessageLevel();
        return -1 * LevelOrder.compare( level_this, level_tm );
    }

    /**
     * @returns {String} the emitter
     */
    iTypedMessageEmitter(){
        return this.#emitter;
    }

    /**
     * @returns {String} the type
     */
    iTypedMessageLevel(){
        return this.#level;
    }

    /**
     * @returns {String} the message
     */
    iTypedMessageMessage(){
        return this.#message;
    }
});
