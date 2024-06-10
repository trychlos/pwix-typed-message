Package.describe({
    name: 'pwix:typed-message',
    version: '1.0.0',
    summary: 'Bootstrap-based core package for SPA/Web applications',
    git: 'https://github.com/trychlos/pwix-typed-message.git',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'TM'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:typed-message' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    const _use = function(){
        api.use( ...arguments );
        api.imply( ...arguments );
    };
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    _use( 'check' );
    _use( 'blaze-html-templates@2.0.0 || 3.0.0-alpha300.0', 'client' );
    _use( 'ecmascript' );
    _use( 'less@4.0.0', 'client' );
    _use( 'pwix:orderable-stack@1.0.1' );
    _use( 'pwix:ui-bootstrap5@2.0.0' );
    _use( 'reactive-dict' );
    _use( 'reactive-var' );
    _use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-beta.0', 'server' );
    //_use( 'tracker', 'client' );
    api.addFiles( 'src/client/components/TypedMessage/TypedMessage.js', 'client' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
