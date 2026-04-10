import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Surface, Chip } from "react-native-paper";
import { font } from "../theme/fonts";

export function MenuCard({ item, accent, tag }) {
  const { width } = useWindowDimensions();
  const imgH = Math.min(196, width * 0.46);
  const showTag = Boolean(tag && item[tag]);

  return (
    <Surface style={styles.surface} elevation={2}>
      <View style={styles.imgBox}>
        <Image
          source={{ uri: item.imagem }}
          style={[styles.img, { height: imgH }]}
          contentFit="cover"
          transition={180}
        />
        <LinearGradient
          colors={["transparent", "rgba(5,4,8,0.92)"]}
          locations={[0.35, 1]}
          style={styles.imgGrad}
        />
        {showTag ? (
          <View style={styles.tagPos}>
            <Chip
              compact
              mode="flat"
              textStyle={[styles.tagTxt, { color: "#F5EDE0" }]}
              style={styles.tagChip}
            >
              {item[tag]}
            </Chip>
          </View>
        ) : null}
        <View style={styles.pricePos}>
          <Chip
            compact
            mode="flat"
            style={[styles.priceChip, { borderColor: `${accent}55` }]}
            textStyle={[styles.priceTxt, { color: accent }]}
          >
            {item.preco}
          </Chip>
        </View>
        <Text style={styles.overlayTitle} numberOfLines={2}>
          {item.nome}
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    borderRadius: 22,
    marginBottom: 18,
    backgroundColor: "#121018",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  imgBox: {
    position: "relative",
  },
  img: {
    width: "100%",
    backgroundColor: "#1A1720",
  },
  imgGrad: {
    ...StyleSheet.absoluteFillObject,
  },
  tagPos: {
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 2,
  },
  tagChip: {
    backgroundColor: "rgba(8,6,12,0.82)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    height: 28,
  },
  tagTxt: {
    fontFamily: font.semi,
    fontSize: 10,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  pricePos: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
  },
  priceChip: {
    backgroundColor: "rgba(8,6,12,0.82)",
    height: 32,
  },
  priceTxt: {
    fontFamily: font.bold,
    fontSize: 13,
  },
  overlayTitle: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 14,
    fontFamily: font.bold,
    fontSize: 20,
    letterSpacing: -0.3,
    color: "#FFFCF7",
    zIndex: 2,
    textShadowColor: "rgba(0,0,0,0.45)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
  body: {
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 18,
  },
  desc: {
    fontFamily: font.regular,
    fontSize: 14,
    lineHeight: 21,
    color: "rgba(243,238,230,0.55)",
  },
});
