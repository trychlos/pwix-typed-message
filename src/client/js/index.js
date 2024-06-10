/*
 * pwix:typed-message/src/client/js/index.js
 */

import '../../common/js/index.js';

// provides base classes in TM global object
import { DisplaySet } from '../classes/display-set.class';
import { DisplayUnit } from '../classes/display-unit.class';
import { EntityChecker } from '../classes/entity-checker.class';
import { FormChecker } from '../classes/form-checker.class';
import { RunContext } from '../classes/run-context.class';

TM.DisplaySet = DisplaySet;
TM.DisplayUnit = DisplayUnit;
TM.EntityChecker = EntityChecker;
TM.FormChecker = FormChecker;
TM.RunContext = RunContext;

// our functions
import './DOM.js';
