// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by typed-message.js.
import { name as packageName } from "meteor/pwix:typed-message";

// Write your tests here!
// Here is an example.
Tinytest.add( 'typed-message - example', function( test ){
    test.equal( packageName, 'typed-message' );
});
