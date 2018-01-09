/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

const ReactNativeRenderer = require('./src/ReactNativeRenderer');

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
module.exports = ReactNativeRenderer.default
  ? ReactNativeRenderer.default
  : ReactNativeRenderer;
