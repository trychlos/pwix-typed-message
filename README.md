# pwix:typed-message

## What is it ?

A simple extendable class to manage messages with a priority level, mostly like syslog(3).

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:typed-message
```

## Usage

```js
    import { TM } from 'meteor/pwix:typed-message';

    const tm = new TM.TypedMessage({
        emitter: 'mySelf',
        level: TM.MessageLevel.C.NOTICE,
        message: 'My log message'
    });
```

## Provides

### `TM`

The exported `TM` global object provides following items:

#### Functions

##### `TM.configure()`

See [below](#configuration).

#### Interfaces

##### `TM.ITypedMessage`

This interface adds to the implementor the notion of which emitter, for which level, and which message. It provides the following getters:

- `TM.ITypedMessage.iTypedMessageCompare( a<ITypedMessage>, b<ITypedMessage>)`

    A comparison function between two `ITypedMessage`'s, which itself relies on `LevelOrder.compare()`.

- `TM.ITypedMessage.iTypedMessageEmitter()`
- `TM.ITypedMessage.iTypedMessageLevel()`
- `TM.ITypedMessage.iTypedMessageMessage()`

    Getters for the corresponding data.

#### Classes

##### `TM.TypedMessage`

A simple class which implements the `TM.ITypedMessage` interface.

The constructor take arguments as:

- either a single string, which acts as the `message`, and

    - `emitter` is set to `null`
    - `level` is set to `TM.MessageLevel.C.LOG`

- or an object with following keys:

    - `emitter`
    - `level`
    - `message`

#### Definitions

##### `TM.MessageLevel`

The list of known message levels, in alpha order:

- `TM.MessageLevel.C.ALERT`
- `TM.MessageLevel.C.CRIT`
- `TM.MessageLevel.C.DEBUG`
- `TM.MessageLevel.C.EMERG`
- `TM.MessageLevel.C.ERR`
- `TM.MessageLevel.C.ERROR`, an alias for `TM.MessageLevel.C.ERR`
- `TM.MessageLevel.C.INFO`
- `TM.MessageLevel.C.LOG`, an alias for `TM.MessageLevel.C.INFO`
- `TM.MessageLevel.C.NOTICE`
- `TM.MessageLevel.C.WARNING`

##### `TM.LevelOrder`

The ordering of the levels:

- `TM.MessageLevel.C.EMERG`
- `TM.MessageLevel.C.ALERT`
- `TM.MessageLevel.C.CRIT`
- `TM.MessageLevel.C.ERR`
- `TM.MessageLevel.C.WARNING`
- `TM.MessageLevel.C.NOTICE`
- `TM.MessageLevel.C.INFO`
- `TM.MessageLevel.C.DEBUG`

This is the usual used semantic where 'EMERG' is greater (has a higher priority level) than 'DEBUG'.

Example:

```js
    console.debug( TM.LevelOrder.compare( TM.MessageLevel.C.CRIT, TM.MessageLevel.C.INFO ));
    // 1
```

## Configuration

The package's behavior can be configured through a call to the `TM.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `TM.C.Verbose.NONE`

        Do not display any trace log to the console

    - `TM.C.Verbose.CONFIGURE`

        Trace `TM.configure()` calls and their result

Please note that `TM.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `TM.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.2.0:
```
    'lodash': '^4.17.0',
    '@vestergaard-company/js-mixin': '^1.0.3'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [issues tracker](https://github.com/trychlos/pwix-typed-message/issues).

---
P. Wieser
- Last updated on 2024, Jun. 20th
