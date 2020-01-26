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

## Redux

- store and change logic separate
- one store
- single store with hierarchical reducers
- no dispatcher
- container components utilize connect
- state immutable
- action describes intent, required type property, can have data
- reducer returns new state given state and action
- store updates reflected in react components

## Actions

- must have type property
- data should be serializable

## Store

- one store
- can dispatch, subscribe, getstate, replaceReducer
- cannot change data in store directly

## Immutability

- spread operator is shallow copy
- only deep clone when deep fields change
- immer lib
- perf: instead of checking all properties for change can check if objects are same

## Reducers

- pure functions
- dont call non-pure functions from it
- all reducers called on each dispatch
- reducer composition

## React-Redux

- provider attaches app to store
- connect creates container components, no manual unsubscribe, decalre subset of state wanted, enhanced perf
- memoize for perf

## MapDispatchToProps

- ommitting from connect puts dispatch on props for direct use
- wrap manually with action creator
- bindactionacreators wraps for you
- using as object allows for terse calling on props
