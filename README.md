# Vue Toasts Lite

A lightweight toast notifications library for Vue 3.

## Features

- 🚀 Lightweight and easy to use
- 🎨 Multiple toast types (success, error, loading, warn)
- ⚡️ Customizable duration and auto-close behavior
- 🎯 TypeScript support
- 🎭 Simple and clean API
- 📍 Multiple position options
- 🎨 Customizable styling with CSS variables
- 🎯 Promise support
- 🖱️ Pause on hover
- 🎨 Custom toast components via slots

## Installation

```bash
npm install @infectedbyjs/vue-lite-toasts
# or
yarn add @infectedbyjs/vue-lite-toasts
```

## Quick Start

1. Add the `ToastsLiteProvider` to your `App.vue`:

```vue
<script setup>
import { ToastsLiteProvider } from '@infectedbyjs/vue-lite-toasts'
</script>

<template>
  <div>
    <RouterView />
    <ToastsLiteProvider />
  </div>
</template>
```

2. Use the toast function anywhere in your application:

```vue
<script setup>
import { toast } from '@infectedbyjs/vue-lite-toasts'

// Show a success toast
toast.success('Hello')

// Show an error toast
toast.error('Something went wrong')

// Show a loading toast
toast.loading('Loading...')

// Show a warning toast
toast.warn('Warning message')
</script>
```

## Toast Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| type | 'success' \| 'error' \| 'loading' \| 'warn' | - | Type of the toast |
| message | string | - | Message to display |
| duration | number | 3000 | Duration in milliseconds |
| autoClose | boolean | true | Whether to auto-close the toast |
| position | ToastPosition | 'top-center' | Position of the toast |
| id | string | auto-generated | Custom ID for the toast (can be used to remove it later) |

## Available Positions

The toast can be positioned in the following locations:

- `top-left`
- `top-center` (default)
- `top-right`
- `bottom-left`
- `bottom-center`
- `bottom-right`
- `middle-center`

## Customization

### CSS Variables

You can customize the appearance using CSS variables:

```css
:root {
  --tl-font-family: your-font-family;
  --tl-bg: your-background-color;
  --tl-text: your-text-color;
  --tl-border: your-border-color;
  --tl-shadow: your-shadow-color;
  --tl-success: your-success-color;
  --tl-error: your-error-color;
  --tl-warn: your-warning-color;
  --tl-icon-color: your-icon-color;
  --tl-loading-border: your-loading-border-color;
  --tl-loading-bg: your-loading-background-color;
}
```

### Custom Toast Components

You can provide custom components for different toast types using slots:

```vue
<ToastsLiteProvider>
  <template #success="{ toast }">
    <YourCustomSuccessToast :toast="toast" />
  </template>
  <template #error="{ toast }">
    <YourCustomErrorToast :toast="toast" />
  </template>
  <!-- Add other type slots as needed -->
</ToastsLiteProvider>
```

## Examples

### Basic Usage

```js
// Success toast
toast.success('Operation completed successfully')

// Error toast
toast.error('An error occurred')

// Loading toast
toast.loading('Please wait...')

// Warning toast
toast.warn('Please be careful')
```

### Toast with Unsubscribe Function

```js
// Create a toast and get unsubscribe function
const removeToast = toast.success('This toast can be removed')

// Remove the toast using the returned function
removeToast()
```

### Custom Duration

```js
// Toast that stays for 5 seconds
toast.success('Custom duration', { duration: 5000 })
```

### Custom Position

```js
// Toast in bottom-right corner
toast.success('Custom position', { position: 'bottom-right' })
```

### Disable Auto-Close

```js
// Toast that won't auto-close
toast.success('Manual close only', { autoClose: false })
```

### Toast with Custom ID

```js
// Create a toast with custom ID
const toastId = toast.success('This toast can be removed by ID', { id: 'my-custom-toast' })

// Remove the toast by ID
toast.remove(toastId)
```

### Promise Support

```js
// Handle async operations
await toast.promise(
  fetchData(),
  {
    loading: 'Loading data...',
    success: 'Data loaded successfully!',
    error: 'Failed to load data'
  }
)
```

## Live Example

Check out the [example](./example) directory for a complete usage example.

## License

MIT
