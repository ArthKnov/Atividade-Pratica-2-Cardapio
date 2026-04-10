import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { SectionIntro } from "../components/SectionIntro";
import { MenuCard } from "../components/MenuCard";
import { pizzas } from "../data/pizzas";

const ACCENT = "#FFB86B";
const INTRO_GRAD = ["#2A1A12", "#120E16", "#07060A"];

export default function Tela1() {
  return (
    <LinearGradient colors={["#050408", "#0C0A10", "#050408"]} style={styles.root}>
      <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <SectionIntro
            badge="Forno a lenha"
            title="Pizzas artesanais"
            subtitle="Massa de longa fermentação, molho de tomates pelati e acabamento no ponto."
            gradient={INTRO_GRAD}
          />
          {pizzas.map((item) => (
            <MenuCard key={item.id} item={item} accent={ACCENT} />
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
