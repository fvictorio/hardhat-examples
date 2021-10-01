//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Foo {
  uint x = 42;
  bool isEven = true;

  function inc() public returns (uint, bool) {
    x++;
    isEven = !isEven;

    return (x, isEven);
  }
}
