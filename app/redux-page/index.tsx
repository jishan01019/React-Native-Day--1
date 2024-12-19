import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCounterValue,
} from "@/redux/features/counterSlice";

const ReduxPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by value"
        onPress={() => dispatch(incrementByAmount(5))}
      />

      <Button
        title="Reset Value"
        onPress={() => dispatch(resetCounterValue())}
      />
    </View>
  );
};

export default ReduxPage;
