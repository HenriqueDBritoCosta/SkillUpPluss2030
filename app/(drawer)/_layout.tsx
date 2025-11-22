import { Stack } from "expo-router";

export default function DrawerLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="recomendacoes" />
      <Stack.Screen name="configuracoes" />
    </Stack>
  );
}
