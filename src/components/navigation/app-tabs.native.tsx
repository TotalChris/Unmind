import { NativeTabs } from "expo-router/build/native-tabs";

export default function AppTabs() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="today">
        <NativeTabs.Trigger.Label>Today</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "sun.horizon", selected: "sun.horizon.fill" }}
        ></NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="goals">
        <NativeTabs.Trigger.Label>Goals</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "trophy", selected: "trophy.fill" }}
        ></NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
