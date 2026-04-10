import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { SectionIntro } from "../components/SectionIntro";
import { MenuCard } from "../components/MenuCard";
import { burgers } from "../data/burgers";

const ACCENT = "#5EEAD4";
const INTRO_GRAD = ["#0E221C", "#0A1210", "#050708"];

export default function Tela2() {
  return (
    <LinearGradient colors={["#040807", "#081210", "#040807"]} style={styles.root}>
      <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <SectionIntro
            badge="Grelha quente"
            title="Hambúrgueres premium"
            subtitle="Blend exclusivo, pão brioche tostado e molhos da casa. Acompanhamentos +R$ 8."
            gradient={INTRO_GRAD}
          />
          {burgers.map((item) => (
            <MenuCard key={item.id} item={item} accent={ACCENT} tag="destaque" />
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 112,
  },
});
