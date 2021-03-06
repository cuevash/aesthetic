import React from 'react';

declare module 'hoist-non-react-statics' {
  declare type Component = React.Component<Object, Object, Object>;

  declare export default function hoistNonReactStatics(source: Component, target: Component): Component;
}
