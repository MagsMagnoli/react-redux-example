## Class vs Function Components

- after react 16.8 function components on par with class except `componentDidError` and `getSnapshotBeforeUpdate`
- function components output less code

## Container vs Presentation Components

| Container              |     Presentation     |
| ---------------------- | :------------------: |
| minimal markup         |    mostly markup     |
| pass data/actions down | receive data/actions |
| know redux             |   don't know redux   |
| stateful               |      stateless       |
