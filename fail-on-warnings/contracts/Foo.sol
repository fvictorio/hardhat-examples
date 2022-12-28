// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Foo {
  function f() public pure {
    // this produces a warning about an unused variable
    uint x;
  }
}
