import React from "react";
import store from "../Store/Store";
import { Provider } from "react-redux";
import Counter from "./Counter/Counter";

export default function App() {
  store.subscribe(() => {
    console.log(store.getState());
  });

  //
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
