import { Platform, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Tela1 from "../telas/tela1";
import Tela2 from "../telas/tela2";
import Tela3 from "../telas/tela3";
import Tela4 from "../telas/tela4";

const Tab = createBottomTabNavigator();

export function MainTabs() {
  const insets = useSafeAreaInsets();
  const bottomPad = Math.max(insets.bottom, 10);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F0B354",
        tabBarInactiveTintColor: "rgba(255,255,255,0.38)",
        tabBarLabelStyle: {
          fontFamily: "PlusJakartaSans_600SemiBold",
          fontSize: 10,
          letterSpacing: 0.2,
          marginBottom: 4,
        },
        tabBarIconStyle: { marginTop: 4 },
        tabBarStyle: {
          position: "absolute",
          left: 14,
          right: 14,
          bottom: bottomPad,
          height: 62,
          borderRadius: 22,
          borderTopWidth: 0,
          paddingTop: 6,
          overflow: "hidden",
          backgroundColor: "transparent",
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.4,
              shadowRadius: 24,
            },
            android: { elevation: 14 },
            default: {},
          }),
        },
        tabBarBackground: () => (
          <BlurView
            intensity={Platform.OS === "ios" ? 48 : 24}
            tint="dark"
            style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(10,8,14,0.78)" }]}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Pizzas"
        component={Tela1}
        options={{
          tabBarLabel: "Pizzas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pizza" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hambúrgueres"
        component={Tela2}
        options={{
          tabBarLabel: "Burgers",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hamburger" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bebidas"
        component={Tela3}
        options={{
          tabBarLabel: "Bebidas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="glass-cocktail" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobremesas"
        component={Tela4}
        options={{
          tabBarLabel: "Doces",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ice-cream" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
