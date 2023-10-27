import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Card = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.card, styles.bg1Bg]}>
      <LinearGradient
        style={[styles.bg, styles.bgPosition]}
        locations={[0.01, 0.7, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.83)", "#000"]}
      />
      <Image
        style={[styles.apples100488612801Icon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/apples1004886-1280-1@3x.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-62@3x.png")}
        />
      </Pressable>
      <View style={[styles.bg1, styles.bgPosition]}>
        <View style={styles.name}>
          <Text style={[styles.fromGrandfillHut1, styles.maaFlexBox]}>
            from Grandfill Hut
          </Text>
          <Text style={[styles.maa, styles.maaTypo]}>Maça</Text>
        </View>
        <View style={styles.button}>
          <Text style={[styles.comprarAgora, styles.descrioTypo]}>
            Comprar Agora
          </Text>
        </View>
        <View style={[styles.rating, styles.ratingLayout1]}>
          <View style={[styles.ratingChild, styles.ratingLayout1]} />
          <Image
            style={styles.ratingItem}
            contentFit="cover"
            source={require("../assets/star@3x.png")}
          />
          <Text style={[styles.maisVendidas, styles.maisVendidasTypo]}>
            Mais Vendidas
          </Text>
        </View>
        <View
          style={[
            styles.perfeitasParaUmLancheRpidParent,
            styles.perfeitasLayout,
          ]}
        >
          <Text style={[styles.perfeitasParaUm1, styles.perfeitasLayout]}>
            Perfeitas para um lanche rápido e nutritivo em qualquer momento do
            dia.
          </Text>
          <Text style={[styles.descrio, styles.descrioTypo]}>Descrição</Text>
        </View>
        <View style={[styles.price, styles.priceLayout]}>
          <View style={[styles.r050Wrapper, styles.priceLayout]}>
            <Text style={[styles.r050, styles.maaTypo]}>R$0,50</Text>
          </View>
          <View style={styles.r060Parent}>
            <Text style={[styles.r060, styles.maaTypo]}>R$0,60</Text>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/vector-14@3x.png")}
            />
          </View>
        </View>
        <View style={[styles.rating1, styles.ratingLayout]}>
          <Image
            style={[styles.ratingInner, styles.ratingLayout]}
            contentFit="cover"
            source={require("../assets/star1@3x.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>4.1</Text>
          <Image
            style={styles.ratingChild1}
            contentFit="cover"
            source={require("../assets/vector-17@3x.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>2123</Text>
        </View>
      </View>
      <Image
        style={styles.apples15061196402Icon}
        contentFit="cover"
        source={require("../assets/apples1506119-640-2@3x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg1Bg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  bgPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  maaFlexBox: {
    textAlign: "left",
    left: 0,
  },
  maaTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.rubik,
    top: 0,
    position: "absolute",
  },
  descrioTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
  },
  ratingLayout1: {
    height: 32,
    width: 154,
    position: "absolute",
  },
  maisVendidasTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
  },
  perfeitasLayout: {
    width: 288,
    position: "absolute",
  },
  priceLayout: {
    height: 28,
    position: "absolute",
  },
  ratingLayout: {
    height: 20,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    top: 2,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    position: "absolute",
  },
  bg: {
    backgroundColor: "transparent",
    top: 0,
    height: 926,
  },
  apples100488612801Icon: {
    height: 342,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 16,
    top: 59,
    width: 40,
    height: 40,
    position: "absolute",
  },
  fromGrandfillHut1: {
    top: 32,
    fontSize: FontSize.size_lg,
    color: Color.subTextGray,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: -0.4,
    position: "absolute",
  },
  maa: {
    fontSize: 28,
    color: Color.textColour,
    textAlign: "left",
    left: 0,
  },
  name: {
    top: 214,
    width: 150,
    height: 53,
    left: 34,
    position: "absolute",
  },
  comprarAgora: {
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
    color: Color.white,
    letterSpacing: -0.4,
    fontSize: FontSize.size_3xl,
  },
  button: {
    top: 563,
    left: 51,
    borderRadius: Border.br_81xl,
    width: 327,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.forestgreen,
    position: "absolute",
  },
  ratingChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.forestgreen,
    left: 0,
    top: 0,
  },
  ratingItem: {
    top: 8,
    left: 12,
    width: 23,
    height: 23,
    borderRadius: 1,
    position: "absolute",
  },
  maisVendidas: {
    top: 7,
    left: 37,
    color: Color.white,
    position: "absolute",
  },
  rating: {
    top: 281,
    left: 34,
  },
  perfeitasParaUm1: {
    top: 33,
    letterSpacing: -0.3,
    lineHeight: 20,
    height: 43,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    color: Color.textColour,
    left: 0,
  },
  descrio: {
    left: 1,
    color: Color.textColour,
    fontWeight: "600",
    fontFamily: FontFamily.rubik,
    top: 0,
    position: "absolute",
  },
  perfeitasParaUmLancheRpidParent: {
    top: 341,
    height: 76,
    left: 34,
  },
  r050: {
    fontSize: 24,
    color: Color.black,
    textAlign: "left",
    left: 0,
  },
  r050Wrapper: {
    left: 82,
    width: 86,
    top: 0,
  },
  r060: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 0,
    color: Color.subTextGray,
  },
  groupChild: {
    top: 12,
    width: 71,
    height: 2,
    left: 0,
    position: "absolute",
  },
  r060Parent: {
    width: 72,
    height: 24,
    top: 2,
    left: 0,
    position: "absolute",
  },
  price: {
    top: 505,
    width: 168,
    left: 37,
  },
  ratingInner: {
    left: 3,
    width: 20,
    top: 2,
    borderRadius: 1,
  },
  text2: {
    left: 23,
    color: Color.textColour,
  },
  ratingChild1: {
    left: 49,
    width: 2,
    height: 16,
    top: 2,
    position: "absolute",
  },
  text3: {
    left: 58,
    color: Color.subTextGray,
  },
  rating1: {
    top: 220,
    left: 302,
    width: 92,
  },
  bg1: {
    top: 263,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    shadowColor: "rgba(137, 137, 137, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    height: 663,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  apples15061196402Icon: {
    marginLeft: -124,
    top: 163,
    left: "11%",
    borderRadius: 125,
    width: 250,
    height: 250,
    position: "absolute",
  },
  card: {
    flex: 1,
    height: 926,
    width: "100%",
  },
});

export default Card;
