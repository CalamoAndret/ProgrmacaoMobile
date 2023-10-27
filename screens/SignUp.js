import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp, styles.iconLayout]}>
      <View style={styles.navPosition}>
        <View style={[styles.navChild, styles.navPosition]} />
        <View style={styles.stats}>
          <Text style={[styles.text1, styles.text1FlexBox]}>9:41</Text>
          <Image
            style={styles.statsIcon}
            contentFit="cover"
            source={require("../assets/stats@3x.png")}
          />
        </View>
      </View>
      <Text style={[styles.enviamosUmCdigo1, styles.eiclosePosition]}>
        Enviamos um código para o número informado
      </Text>
      <View style={[styles.signUpChild, styles.signChildLayout]} />
      <View style={[styles.signUpItem, styles.signChildLayout]} />
      <View style={[styles.signUpInner, styles.signChildLayout]} />
      <View style={[styles.rectangleView, styles.signChildLayout]} />
      <View style={[styles.signUpChild1, styles.signChildLayout]} />
      <Text style={styles.noRecebiCdigoContainer}>
        <Text style={styles.noRecebiCdigo1}>{`Não recebi código?
 
`}</Text>
        <Text style={styles.reenviar}>Reenviar</Text>
      </Text>
      <Pressable
        style={[styles.eiclose, styles.eiclosePosition]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eiclose@3x.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navPosition: {
    height: 39,
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.textColour,
  },
  eiclosePosition: {
    left: 14,
    position: "absolute",
  },
  signChildLayout: {
    height: 48,
    width: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    left: "50%",
    top: "50%",
    marginTop: -242,
    position: "absolute",
    backgroundColor: Color.white,
  },
  navChild: {
    backgroundColor: Color.white,
  },
  text1: {
    width: "13.71%",
    left: "0%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  statsIcon: {
    width: "18.16%",
    top: 6,
    right: "0%",
    left: "81.84%",
    maxWidth: "100%",
    height: 11,
    position: "absolute",
    overflow: "hidden",
  },
  stats: {
    width: "85.75%",
    top: 11,
    right: "7.01%",
    left: "7.24%",
    height: 23,
    position: "absolute",
  },
  enviamosUmCdigo1: {
    top: 114,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0.3,
    fontWeight: "800",
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.textColour,
  },
  signUpChild: {
    marginLeft: -152,
  },
  signUpItem: {
    marginLeft: -88,
  },
  signUpInner: {
    marginLeft: -24,
  },
  rectangleView: {
    marginLeft: 40,
  },
  signUpChild1: {
    marginLeft: 104,
  },
  noRecebiCdigo1: {
    color: Color.textColour,
  },
  reenviar: {
    color: Color.mediumslateblue,
  },
  noRecebiCdigoContainer: {
    top: 306,
    left: 67,
    fontSize: FontSize.size_sm,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: FontFamily.manrope,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  eiclose: {
    top: 56,
    width: 30,
    height: 30,
  },
  signUp: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SignUp;
