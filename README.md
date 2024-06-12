# pwix:typed-message

## What is it ?

This Meteor packages provides both:

- a `ITypedMessage` interface definition, which let us type our message in a syslog-way...

- a `TypedMessage` class definition, derived from `Orderable`, which implements the `ITypedMessage` interface

- a Blaze component which let us use a set of `TypedMessage`'s to display a stack error messages in their gravity order.

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

## Provides

`TM` provides following items:

### Methods

#### `TM.configure()`

See above.

#### `TM.i18n.namespace()`

Returns the i18n namespace used by the package. Used to add translations at runtime.

### Blaze components

#### `TypedMessage`

Display the topmost in semantic order of the pushed `TypedMessage`'s.

Accepts a data context as:

- `orderableStack`: an object compliant with `OrderableStack.IOrderableStack` interface

- `classes`: a list of classes as a String, to be added whatever be the displayed message, defaulting to nothing.

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:
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
- Last updated on 2024, Jun. 10th
