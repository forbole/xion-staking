# XION Staking

A proof of concept application to stake tokens in XION, using the native
authentication via the dashboard.

## Development

The only dependency to run the project locally is Node.js. It has been tested
with Node.js v20. Once you have it installed, you can run:

```bash
npm install

npm run dev
```

It integrates the `@burnt-labs/abstraxion` library from
[xion.js](https://github.com/burnt-labs/xion.js).

The main part of the business logic that queries and interacts with XION
is in:

- [./src/features/staking/lib](./src/features/staking/lib)
