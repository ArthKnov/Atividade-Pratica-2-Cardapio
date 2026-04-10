import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Chip } from "react-native-paper";
import { font } from "../theme/fonts";

export function SectionIntro({ badge, title, subtitle, gradient }) {
  const g = gradient || ["#1E1510", "#0F0D12", "#0A090C"];
  return (
    <LinearGradient colors={g} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.wrap}>
      <View style={styles.inner}>
        <Chip
          compact
          mode="flat"
          textStyle={[styles.badgeText, { color: "rgba(255,214,160,0.95)" }]}
          style={[styles.badge, { borderColor: "rgba(255,255,255,0.12)" }]}
        >
          {badge}
        </Chip>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub}>{subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  inner: {
    paddingVertical: 22,
    paddingHorizontal: 20,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.06)",
    height: 30,
  },
  badgeText: {
    fontFamily: font.semi,
    fontSize: 11,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  title: {
    marginTop: 14,
    fontFamily: font.bold,
    fontSize: 28,
    letterSpacing: -0.6,
    color: "#FAF6F0",
  },
  sub: {
    marginTop: 8,
    fontFamily: font.regular,
    fontSize: 15,
    lineHeight: 22,
    color: "rgba(243,238,230,0.62)",
  },
});
