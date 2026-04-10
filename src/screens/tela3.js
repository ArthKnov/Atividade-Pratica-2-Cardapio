import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { SectionIntro } from "../components/SectionIntro";
import { MenuCard } from "../components/MenuCard";
import { drinks } from "../data/drinks";

const ACCENT = "#7DD3FC";
const INTRO_GRAD = ["#0E2233", "#0A141C", "#05070C"];

export default function Tela3() {
  return (
    <LinearGradient colors={["#04080E", "#081018", "#04080E"]} style={styles.root}>
      <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <SectionIntro
            badge="Refrescância"
            title="Bebidas"
            subtitle="Drinks gelados, sucos na hora e opções zero açúcar sob pedido."
            gradient={INTRO_GRAD}
          />
          {drinks.map((item) => (
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
