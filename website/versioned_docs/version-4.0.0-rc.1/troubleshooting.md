---
id: troubleshooting
title: Troubleshooting
---

Although we try to make the experience of using React Native Elements
hassle-free, time to time you may encounter some problems along the way.

On this page you can find solutions to commonly encountered issues.

:::note

Invariant Violation: Element type is invalid

:::

This error occurs when trying to import a component that doesn't exist. This
usually happens for a few reasons:

### You incorrectly spelt a component

Spelling a component incorrectly though very simple, happens occasionally.

```jsx
// Incorrect
import { Listitem } from '@rneui/themed';

// Correct
import { ListItem } from '@rneui/themed';
```

### Importing a component from the wrong version

This error occurs when you're trying to use a component from the wrong version.
At RNE they're some components that are only available in some versions.

```md
Example:

`<FormInput />` is only available in v0.19.1 and below. `<Input />` is only
available in `v1.0.0-beta1` and higher.
```

To fix this, follow these steps:

1. Check your `package.json` for the version of `@rneui/themed` you are
   using.
2. View the documentation for your particular version on the website. See
   available versions
   [here](/versions)
   or click the version number next to the logo in the header.
3. Checking the list of components on the left side bar, make sure you're using
   the right component.

---

:::note

fontFamily (font-name) is not a system font

:::

This is a general error in react native, where you in your code, or a package
you are using, is trying to use a font that is not bundled with the platform or
is not added to the project.

If you aren't using a custom font in your application, then it's likely that
the error comes from React Native Elements looking for
`react-native-vector-icons`.

They're a couple ways to solve this depending on your setup.

- [You incorrectly spelt a component](#you-incorrectly-spelt-a-component)
- [Importing a component from the wrong version](#importing-a-component-from-the-wrong-version)
- [Using `react-native-init`](#using-react-native-init)
- [Using an Expo app (create-react-native-app or Expo XDE)](#using-an-expo-app-create-react-native-app-or-expo-xde)
- [Using a detached `create-react-native-app` app](#using-a-detached-create-react-native-app-app)

---

### Using `react-native-init`

1. Delete everything to be sure

   ```bash
   rm -rf node_modules yarn.lock
   ```

2. Install React Native Elements

   ```bash
   # yarn
   yarn && yarn add @rneui/base @rneui/themed
   ```

3. Install react-native-vector-icons

   ```bash
   # yarn
   yarn add react-native-vector-icons
   ```

4. Link react-native-vector-icons. Learn more about
   [linking](https://reactnative.dev/docs/linking.html).

   ```bash
   react-native link react-native-vector-icons
   ```

If you encounter any red error screens during the process, try running these
commands:

> "Unrecognized font x"
>
> iOS - `rm -rf ios/build`
>
> Android - `rm -rf android/build && rm -rf android/app/build`

> "Unable to resolve module x"
>
> npm -`rm -rf node_modules && npm i`
>
> yarn - `rm -rf node_modules && yarn`

> "Unable to resolve module x"
>
> `npm start -- --reset-cache`

### Using an Expo app (create-react-native-app or Expo XDE)

1. Delete everything to be sure

   ```bash
   rm -rf node_modules yarn.lock package-lock.json
   ```

2. Install React Native Elements

   ```bash
   # yarn
   yarn && yarn add @rneui/base @rneui/themed
   ```

3. Install `@expo/vector-icons`

   ```bash
   # yarn
   yarn add @expo/vector-icons --save
   ```

### Using a detached `create-react-native-app` app

- If you choose a regular React Native project, use
  [Solution 1](#using-react-native-init)
- If you choose to use Expo SDK (ExpoKit), use
  [Solution 2](#using-an-expo-app-create-react-native-app-or-expo-xde)
