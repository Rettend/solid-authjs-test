/* eslint-disable no-var */
/* eslint-disable vars-on-top */
// declare global {
//   var fetch: typeof globalThis.fetch
// }

// if (typeof globalThis.fetch !== 'function') {
//   globalThis.fetch = fetch.bind(globalThis)
// }

// export {}

if (typeof globalThis.fetch === 'function') {
  const originalFetch = globalThis.fetch
  globalThis.fetch = function (...args) {
    return originalFetch.apply(globalThis, args)
  }
}

export {}
