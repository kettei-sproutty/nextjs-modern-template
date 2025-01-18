/** @type {import('next').NextConfig} */
export default {
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] },
    removeConsole: {
      exclude: ['error'],
    },
  },
}
