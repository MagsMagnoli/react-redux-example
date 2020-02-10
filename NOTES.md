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

## Binding in Classes

- bind functions to `this` in constructor not html to prevent recreation on change or use arrow function in class
- can create state as class field instead of inside constructor with `this`

## Create Action

- function that creates action called `actionCreator`

## Instantiate store

- may want to give initial value if hydrating from server or local storage

## Enzyme vs React-Testing-Library

- Enzyme allows for shallow or mount modes
  - shallow: isolated component
  - mount: load component and children
- RTL only has mount mode
- In RTL, assertions are automatic in their query functions
- both have `debug` method to print component output
  - RTL's is color coded

## Testing container components

- container components exported with connect pose issue for tests
  - need to wrap with provider and give store
  - alternatively can export component outside of connect for tests
    - may see lint errors when importing connected form as default, safe to disable

## Testing action creators

- if done right, is almost waste of time to test
  - is mostly repeating action creator code

## React production build

- prod mode tells react to make optimizations

  - `PropTypes` validation removed
  - smaller bundle size

## Production Webpack

- `MiniCssExtractPlugin` writes css to a file

  - give a name and contenthash to only expire for clients that are out of date

- add minify properties to `HTMLWebpackPlugin`

- add `MiniCssExtractPlugin.loader` to css rules
- add `sourceMap` to `css-loader` and `postcss-loader`
- loaders in webpack run from bottom up
