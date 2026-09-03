import { ScrollView } from "react-native";

export default function Main() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 16, gap: 16 }}
      contentInsetAdjustmentBehavior="automatic"
    ></ScrollView>
  );
}
