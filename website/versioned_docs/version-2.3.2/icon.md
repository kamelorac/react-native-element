---
id: icon
title: Icon
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Icons are visual indicators usually used to describe action or intent.

<img alt="Icon" src={useBaseUrl('img/icons.png')} />

> Hint: use **reverse** to make your icon look like a button

## Available Icon Sets

The icon sets in React Native Elements are made possible through
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

The current list of available icons sets are:

- [material](https://material.io/tools/icons)
- [material-community](https://materialdesignicons.com/)
- [font-awesome](https://fontawesome.com/v4.7.0/)
- [font-awesome-5](https://fontawesome.com/)
- [octicon](https://octicons.github.com/)
- [ionicon](http://ionicons.com/)
- [foundation](http://zurb.com/playground/foundation-icon-fonts-3)
- [evilicon](http://evil-icons.io/)
- [simple-line-icon](https://simplelineicons.github.io/)
- [zocial](http://weloveiconfonts.com/)
- [entypo](http://www.entypo.com/)
- [feather](https://feathericons.com/)
- [antdesign](http://ant.design/components/icon/)
- [fontisto](https://www.fontisto.com/icons)

## Custom Icon Fonts

Register your own custom icons by calling
`registerCustomIconType('customid', customFont)`. Create a custom font by
following the
[ instructions for creating a custom font here](https://github.com/oblador/react-native-vector-icons#custom-fonts).
Also, you can use [Fontello](http://fontello.com/) to generate custom icon
fonts.

## Usage

```js
import { Icon } from 'react-native-elements'

<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
```

---

## Props

- [`brand`](#brand)
- [`color`](#color)
- [`containerStyle`](#containerstyle)
- [`disabled`](#disabled)
- [`disabledStyle`](#disabledstyle)
- [`iconStyle`](#iconstyle)
- [`iconProps`](#iconprops)
- [`name`](#name)
- [`onPress`](#onpress)
- [`onLongPress`](#onlongpress)
- [`raised`](#raised)
- [`reverse`](#reverse)
- [`reverseColor`](#reversecolor)
- [`size`](#size)
- [`solid`](#solid)
- [`type`](#type)
- [`underlayColor`](#underlaycolor)
- [`Component`](#Component)

---

## Reference

### `brand`

Uses the brands font (FontAwesome5 only)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `color`

color of icon (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  black  |

---

### `containerStyle`

add styling to container holding icon (optional)

|        Type         |      Default      |
| :-----------------: | :---------------: |
| View style (object) | inherited styling |

---

### `disabled`

Disables onPress events (optional). Only works when `onPress` has a handler.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `disabledStyle`

Style for the button when disabled (optional). Only works when `onPress` has a
handler.

|        Type         |              Default               |
| :-----------------: | :--------------------------------: |
| View style (object) | `{{ backgroundColor: '#D1D5D8' }}` |

---

### `iconStyle`

additional styling to icon (optional)

|        Type         |     Default     |
| :-----------------: | :-------------: |
| View style (object) | inherited style |

---

### `iconProps`

provide all props from react-native Icon component

|                                          Type                                          | Default |
| :------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](https://github.com/oblador/react-native-vector-icons#icon-component)} |  none   |

---

### `name`

name of icon (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `onPress`

onPress method for button (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onLongPress`

onLongPress method for button (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `raised`

adds box shadow to button (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `reverse`

reverses color scheme (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `reverseColor`

specify reverse icon color (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  white  |

---

### `size`

size of icon (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   26    |

---

### `solid`

Uses the solid font (FontAwesome5 only)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `type`

type of icon set. [Supported sets here](#available-icon-sets).

|  Type  | Default  |
| :----: | :------: |
| string | material |

---

### `underlayColor`

underlayColor for press event

|  Type  |  Default   |
| :----: | :--------: |
| string | icon color |

---

### `Component`

update React Native Component (optional)

|          Type          |                                        Default                                        |
| :--------------------: | :-----------------------------------------------------------------------------------: |
| React Native component | View if no onPress method is defined, TouchableHighlight if onPress method is defined |
