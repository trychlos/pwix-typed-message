/*
 * pwix:typed-message/src/client/components/TypedMessage/TypedMessage.js
 *
 * Display the error message on the bottom of a edition (either modal or page) panel.
 *
 * Error messages may be rather simple: just display a message on the bottom, color it in red, and disable the OK button. That's all.
 * But, when your dialog is a bit more complex, you have several panels or several tabs, some errors are expected to block the panel
 * validation and the recording of the item, but some others only alter its good behavior, which may be fixed later. So should only
 * be considered as warnings.
 *
 * There may be several errors, and the user may want just see all of them, in order to decide himself which one will be first fixed.
 * So:
 *  - this component is just responsible to display the most recent pushed message
 *  - a companion component is able to display all current error/warning/infos messages.
 *
 * Parms:
 *  - orderable: an object compliant with the OStack.IOrderableStack interface
 *  - classes: classes to be added to the displayed message whatever be its type, defaulting to nothing
 */

import './TypedMessage.html';
import './TypedMessage.less';

Template.TypedMessage.onRendered( function(){
    this.autorun(() => {
        //console.debug( 'orderable', Template.currentData().orderable );
    });
});

Template.TypedMessage.helpers({
    // common classes to be added to the displayed message, whatever be its type
    errorClasses(){
        return this.classes || '';
    },

    // the content of the error message as a simple string (not HTML)
    //  because we do not want have several lines, or bold, or any other singularities here
    //  nevertheless the Blaze tempate itself is HTML-capable to be able to handle the '&nbsp;' character
    errorLabel(){
        const o = this.orderable?.IOrderableStackLast();
        return o ? o.ITypedMessageMessage() : '&nbsp;';
    },

    // the class to be associated to the error message: may be an error, a warning, an info, etc.
    errorType(){
        const o = this.orderable?.IOrderableStackLast();
        return o ? o.ITypedMessageType() : '';
    }
});
