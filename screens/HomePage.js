import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.homepage}
      locations={[0, 1]}
      colors={["#fff", "rgba(255, 255, 255, 0)"]}
    >
      <Image
        style={[styles.unsplash1csavdwfiewIcon, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/unsplash1csavdwfiew@3x.png")}
      />
      <Image
        style={[styles.homepageChild, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-11@3x.png")}
      />
      <View style={styles.stats}>
        <Text style={[styles.text1, styles.textFlexBox]}>9:41</Text>
        <Image
          style={styles.statsIcon}
          contentFit="cover"
          source={require("../assets/stats2@3x.png")}
        />
      </View>
      <Text style={[styles.header, styles.textFlexBox]}>{`Bem-Vindo a
Frutopia!`}</Text>
      <Pressable
        style={[styles.homepageInner, styles.homepageInnerPosition]}
        onPress={() => navigation.navigate("SignUp1")}
      >
        <View style={[styles.comearAgoraWrapper, styles.homepageInnerPosition]}>
          <Text style={[styles.comearAgora, styles.subText1Typo]}>
            Começar Agora
          </Text>
        </View>
      </Pressable>
      <Text style={[styles.subText1, styles.subText1Typo]}>
        A loja de frutas que leva sabor, frescor e saúde até você! Descubra um
        mundo repleto de variedades de frutíferas, escolha entres as melhores
        opções da natureza e desfrute de uma experiência de compra única.
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homepageChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 926,
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  homepageInnerPosition: {
    height: 46,
    width: 296,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  subText1Typo: {
    fontFamily: FontFamily.dMSans,
    color: Color.white,
  },
  unsplash1csavdwfiewIcon: {
    width: 434,
  },
  homepageChild: {
    width: 428,
  },
  text1: {
    width: "13.71%",
    left: "0%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Color.white,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    height: 21,
    top: 0,
  },
  statsIcon: {
    width: "18.16%",
    top: 5,
    right: "0%",
    left: "81.84%",
    maxWidth: "100%",
    height: 11,
    position: "absolute",
    overflow: "hidden",
  },
  stats: {
    width: "94.44%",
    top: 11,
    right: "2.78%",
    left: "2.78%",
    height: 21,
    position: "absolute",
  },
  header: {
    top: 528,
    left: 67,
    fontSize: 36,
    lineHeight: 40,
    fontWeight: "800",
    width: 300,
    height: 70,
    color: Color.white,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
  },
  comearAgora: {
    fontSize: 13,
    lineHeight: 12,
    textAlign: "left",
    fontWeight: "700",
  },
  comearAgoraWrapper: {
    marginTop: -23,
    marginLeft: -148.16,
    borderRadius: Border.br_81xl,
    backgroundColor: "rgba(47, 239, 89, 0.7)",
    flexDirection: "row",
    paddingHorizontal: Padding.p_102xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "space-between",
  },
  homepageInner: {
    marginTop: 363,
    marginLeft: -148,
  },
  subText1: {
    top: 656,
    left: 20,
    letterSpacing: -0.3,
    fontWeight: "500",
    width: 387,
    height: 78,
    textAlign: "center",
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  homepage: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 926,
  },
});

export default HomePage;
