# Floating.js 🎉

Floating.js is a lightweight library for creating animated floating elements on your webpage. Perfect for festive effects like snowflakes, sparkles, or any other decorative floating items. 🚀

---

## Features ✨

* Customizable elements: Use text, emojis, or even HTML elements.
* Control animation frequency: Adjust the number of floating elements and the interval between appearances.
* Lightweight and modular: No external dependencies.
* Easy-to-use API: Start with minimal setup.

---

## Installation

You can include Floating.js in your project via npm:

```bash
npm install --save @janmarkuslanger/floatingjs
```

---

## Usage

Here’s how to get started with Floating.js:

### 1. Import the Library

``` javacript
import { Floating } from '@janmarkuslanger/floatingjs';
```

### 2. Initialize the Floating Effect

``` javascript
const floating = new Floating({
  elements: ['❄️', '✨', '🎉', '⭐️'], // Elements to float (strings or custom HTML elements)
  maxElements: 20,                  // Maximum number of floating elements (default: 10)
  interval: 1000,                   // Interval in milliseconds between new elements (default: 2000)
});
```

### 3. Start or Stop the Animation

``` javascript
// Start the animation
floating.start();

// Stop the animation
floating.stop();
```

---

## Options 🛠️

| Option        | Type                      | Default           | Description                                                                 |
|---------------|---------------------------|-------------------|-----------------------------------------------------------------------------|
| `elements`    | `string[]` or `Function[]` | `[]`              | Elements to float. Strings (e.g., `'⭐️'`) or functions returning HTML elements. |
| `maxElements` | `number`                  | `10`              | Maximum number of floating elements visible at any time.                   |
| `interval`    | `number` (ms)             | `2000`            | Interval between the creation of new floating elements (in milliseconds).  |
| `root`        | `HTMLElement`             | `document.body`   | The container where floating elements will be appended.                     |


---

## Example 🎨

``` javascript
import { Floating } from 'floating-js';

const snowflakes = new Floating({
  elements: ['❄️', '❅', '❆'], // Snowflake shapes
  maxElements: 30,
  interval: 500,
});

// Start the animation
snowflakes.start();

```

---

## Advanced Usage 🚀

``` javascript
const customFloating = new Floating({
  elements: [
    '✨',
    () => {
      const customElement = document.createElement('div');
      customElement.textContent = 'Custom!';
      customElement.style.color = 'gold';
      return customElement;
    },
  ],
  maxElements: 15,
  interval: 800,
});

customFloating.start();

```

---

## Contributing 🤝

We welcome contributions! If you have suggestions, feature requests, or find a bug, please open an issue or submit a pull request.

---

## License 📜

This project is licensed under the MIT License.
