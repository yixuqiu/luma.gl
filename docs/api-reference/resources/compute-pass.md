# ComputePass

> Proposed luma.gl v9 API. Open for comments.

A configuration for compute.

## Types

### `BufferProps`

| Property      | Type                             | Description                                                                  |
| ------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| `parameters?`  | `Parameters`                    | GPU pipeline parameters                         |


## Members

- `device`: `Device` - holds a reference to the `Device` that created this `ComputePass`.
- `handle`: `unknown` - holds the underlying WebGL or WebGPU shader object
- `props`: `ComputePassProps` - holds a copy of the `ComputePassProps` used to create this `ComputePass`.

## Methods

### `constructor(props: ComputePassProps)`

`ComputePass` is an abstract class and cannot be instantiated directly. Create with `device.beginComputePass(...)`.

### `endPass(): void`

Free up any GPU resources associated with this render pass.

### `pushDebugGroup(groupLabel: string): void`

Adds a debug group (implementation dependent).

### `popDebugGroup(): void`

Removes a debug group (implementation dependent).

### `insertDebugMarker(markerLabel: string): void`

Adds a debug marker (implementation dependent).