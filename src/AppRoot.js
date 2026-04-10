import { View } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import {
  useFonts,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { paperTheme } from "./theme/paperTheme";
import { MainTabs } from "./navigation/MainTabs";

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#060508",
    card: "#060508",
    border: "transparent",
    primary: paperTheme.colors.primary,
    text: "#F3EEE6",
  },
};

export default function AppRoot() {
  const [loaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  if (!loaded) {
    return <View style={{ flex: 1, backgroundColor: paperTheme.colors.background }} />;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider
        theme={paperTheme}
        settings={{
          icon: (props) => <MaterialCommunityIcons {...props} />,
        }}
      >
        <StatusBar style="light" />
        <NavigationContainer theme={navTheme}>
          <MainTabs />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
