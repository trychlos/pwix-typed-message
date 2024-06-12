# pwix:typed-message

## What is it ?

This Meteor packages aims to provide a way of managing error messages, so that the errors be displayed all before any warnings, themselves being all displayed before any information.

It makes use, and exports, several classes to manage:

- a typed message, where the type is error, warning, etc., mostly like syslog(3) levels

- an ordered set of typed messages, suitable to be used in an application

and also provides ad-hoc Blaze component.

## Installation

This Meteor package is installable with the usual command:

```
    meteor add pwix:typed-message
```

## Usage

```
    import { TM } from 'meteor/pwix:typed-message';
```

## Provides

### `TM`

The exported `TM` global object provides following items:

#### Functions

##### `TM.configure()`

See [below](#configuration).

##### `TM.i18n.namespace()`

Returns the i18n namespace used by the package. Used to add translations at runtime.

#### Interfaces

##### `TM.ITypedMessage`

This interface adds to the implementor the notion of which emitter, for which type (aka level), and which message. It provides the following getters:

- `TM.ITypedMessage.ITypedMessageEmitter()`
- `TM.ITypedMessage.ITypedMessageMessage()`
- `TM.ITypedMessage.ITypedMessageType()`

#### Classes

##### `TM.MessagesSet`

A class, derived from `OStack.OrderableStack`, which aims to manage below `TM.TypedMessage`s instances.

##### `TM.TypedMessage`

A class, derived from `OStack.Orderable`, which also implements the `TM.ITypedMessage` interface.

#### Definitions

##### `TM.MessageType`

The list of known message types, in alpha order:

- `TM.MessageType.C.ALERT`
- `TM.MessageType.C.CRIT`
- `TM.MessageType.C.DEBUG`
- `TM.MessageType.C.EMERG`
- `TM.MessageType.C.ERR`
- `TM.MessageType.C.ERROR`
- `TM.MessageType.C.INFO`
- `TM.MessageType.C.LOG`
- `TM.MessageType.C.NOTICE`
- `TM.MessageType.C.WARNING`

##### `TM.TypeOrder`

The ordering of the types:

- `TM.MessageType.C.EMERG`
- `TM.MessageType.C.ALERT`
- `TM.MessageType.C.CRIT`
- `TM.MessageType.C.ERR`
- `TM.MessageType.C.WARNING`
- `TM.MessageType.C.NOTICE`
- `TM.MessageType.C.INFO`
- `TM.MessageType.C.DEBUG`

### Blaze components

#### `TypedMessage`

Display the topmost in semantic order of the pushed `TypedMessage`'s.

Accepts a data context as:

- `orderable`: an instance of an object compliant with `OStack.IOrderableStack` interface (for example, an instance of `TM.MessagesSet` class).

- `classes`: a list of classes as a String, to be added whatever be the displayed message, defaulting to nothing.

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

Dependencies as of v 1.1.0:
```
    'lodash': '^4.17.0',
    '@vestergaard-company/js-mixin': '^1.0.3'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-typed-message/pulls).

## Cookies and comparable technologies

None at the moment.

---
P. Wieser
- Last updated on 2024, Jun. 12th
