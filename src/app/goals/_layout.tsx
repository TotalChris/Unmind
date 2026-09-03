import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function GoalsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Goals",
          headerLargeTitleEnabled: true,
          headerLargeStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
          headerBlurEffect: "regular",
        }}
      />
    </Stack>
  );
}
