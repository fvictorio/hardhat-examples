// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

/// @title A natspec example
/// @author Arthur Dent
/// @notice This contract is just an example
contract Example {
    uint256 private _x;

    /// @notice Increment x by the given amount
    /// @param by The amount to increment by
    function inc(uint256 by) public {
      _x += by;
    }

    /// @notice Returns the value of x
    /// @return The value of x
    function x() public view returns (uint256) {
      return _x;
    }
}
