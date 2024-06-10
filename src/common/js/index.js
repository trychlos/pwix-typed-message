/*
 * pwix:typed-message/src/common/js/index.js
 */

// definitions
import { MessageType } from '../definitions/message-type.def';
import { TypeOrder } from '../definitions/type-order.def';

// interfaces
import { ITypedMessage } from '../interfaces/ityped-message.iface';

// classes
import { MessagesSet } from '../classes/messages-set.class';
import { TypedMessage } from '../classes/typed-message.class';

import './global.js';
import './constants.js';
//
import './configure.js';
import './i18n.js';

TM.MessageType = MessageType;
TM.TypeOrder = TypeOrder;

TM.ITypedMessage = ITypedMessage;

TM.MessagesSet = MessagesSet;
TM.TypedMessage = TypedMessage;
