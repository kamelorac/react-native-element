---
id: linearprogress

title: LinearProgress

slug: /linearprogress
---

import Usage from './usage/LinearProgress/LinearProgress.md'

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.

Also receives all [View](https://reactnative.dev/docs/view#props) props

## Usage

<Usage />

---

## Props

### LinearProgress

- [animation](#animation)
- [color](#color)
- [style](#style)
- [trackColor](#trackcolor)
- [value](#value)
- [variant](#variant)

## Reference

### LinearProgress

#### animation

Animation duration

| Type                              | Default            |
| --------------------------------- | ------------------ |
| boolean or { duration?: number; } | { duration: 2000 } |

---

#### color

Color for linear progress.

| Type   | Default   |
| ------ | --------- |
| string | secondary |

---

#### style

Add additional styling for linear progress component.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### trackColor

Track color for linear progress.

| Type   | Default |
| ------ | ------- |
| string | None    |

---

#### value

The value of the progress indicator for the determinate variant. Value between 0 and 1.

| Type   | Default |
| ------ | ------- |
| number | None    |

---

#### variant

Type of button.

| Type                             | Default                                               |
| -------------------------------- | ----------------------------------------------------- |
| "determinate" or "indeterminate" | value === undefined ? 'indeterminate' : 'determinate' |

---
