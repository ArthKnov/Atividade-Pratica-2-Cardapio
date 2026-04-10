import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { SectionIntro } from "../components/SectionIntro";
import { MenuCard } from "../components/MenuCard";
import { desserts } from "../data/desserts";

const ACCENT = "#D8B4FE";
const INTRO_GRAD = ["#1E1530", "#120E1A", "#07060C"];

export default function Tela4() {
  return (
    <LinearGradient colors={["#06040A", "#0E0A14", "#06040A"]} style={styles.root}>
      <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <SectionIntro
            badge="Fina sobremesa"
            title="Sobremesas da casa"
            subtitle="Receitas do dia, texturas contrastantes e final doce na medida certa."
            gradient={INTRO_GRAD}
          />
          {desserts.map((item) => (
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
