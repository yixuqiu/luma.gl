// luma.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

import {ShaderPass} from '../../../lib/shader-module/shader-pass';

const fs = /* glsl */ `\
vec4 warp_sampleColor(sampler2D source, vec2 texSize, vec2 coord) {
  vec4 color = texture(source, coord / texSize);
  vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);
  if (coord != clampedCoord) {
    /* fade to transparent if we are outside the image */
    color.a *= max(0.0, 1.0 - length(coord - clampedCoord));
  }

  return color;
}
`;

export type WarpProps = {};

export type WarpUniforms = WarpProps;

export const warp = {
  name: 'warp',
  passes: [],
  fs
} as const satisfies ShaderPass<WarpProps, WarpProps>;
