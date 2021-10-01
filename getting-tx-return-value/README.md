# Read returned value from tx

Check the [script](./scripts/get-return-value.js).

Keep in mind that this only works for networks that support `debug_traceTransaction`.

If a network doesn't support this method but you have access to an archive node, you can use Hardhat's mainnet forking
and send a `debug_traceTransaction` call to get the same result.
