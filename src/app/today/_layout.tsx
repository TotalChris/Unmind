import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function TodayLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Today",
          headerLargeTitleEnabled: true,
          headerLargeStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
          headerBlurEffect: "regular",
        }}
      />
    </Stack>
  );
}
