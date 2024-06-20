/*
 * pwix:typed-message/src/common/js/index.js
 */

// definitions
import { MessageLevel } from '../definitions/message-level.def';
import { LevelOrder } from '../definitions/level-order.def';

// interfaces
import { ITypedMessage } from '../interfaces/ityped-message.iface';

// classes
import { MessagesSet } from '../classes/messages-set.class';
import { TypedMessage } from '../classes/typed-message.class';

import './global.js';
import './constants.js';
import './i18n.js';
//
import './configure.js';

TM.MessageLevel = MessageLevel;
TM.LevelOrder = LevelOrder;

TM.ITypedMessage = ITypedMessage;

TM.MessagesSet = MessagesSet;
TM.TypedMessage = TypedMessage;
