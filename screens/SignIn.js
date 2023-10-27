import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View style={styles.navPosition}>
        <View style={[styles.navChild, styles.navPosition]} />
        <View style={styles.stats}>
          <Text style={[styles.text2, styles.text2FlexBox]}>9:41</Text>
          <Image
            style={styles.statsIcon}
            contentFit="cover"
            source={require("../assets/stats@3x.png")}
          />
        </View>
      </View>
      <Text style={[styles.naveguePelasCores1, styles.text2FlexBox]}>
        Navegue pelas cores e sabores da natureza em nossa variedade de frutas
        na Frutopia!
      </Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame@3x.png")}
      />
      <View style={styles.fullname}>
        <View style={[styles.fullnameChild, styles.signInInnerPosition]} />
        <View style={[styles.wrapper, styles.wrapperPosition]}>
          <Text style={[styles.text3, styles.text3Typo]}>(62) 98245-5516</Text>
        </View>
        <View style={[styles.nmeroWrapper, styles.wrapperPosition]}>
          <Text style={[styles.nmero, styles.nmeroTypo]}>Número</Text>
        </View>
      </View>
      <View style={[styles.emailAddress, styles.signInInnerPosition]}>
        <View
          style={[styles.emailAddressChild, styles.entrarWrapperPosition]}
        />
        <Text style={[styles.password, styles.text3Typo]}>Password</Text>
      </View>
      <Pressable
        style={[styles.signInInner, styles.signInInnerPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.entrarWrapper, styles.entrarWrapperPosition]}>
          <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
        </View>
      </Pressable>
      <Text style={[styles.novoAquiCrieContainer, styles.entrarTypo]}>
        <Text style={styles.novoAqui}>{`É novo aqui? `}</Text>
        <Text style={styles.crieSuaConta}>Crie sua conta</Text>
      </Text>
      <Pressable
        style={styles.esqueciMinhaSenhaRedefinirWrapper}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.esqueciMinhaSenhaContainer, styles.text3Layout]}>
          <Text style={styles.novoAqui}>{`Esqueci minha senha? `}</Text>
          <Text style={styles.crieSuaConta}>Redefinir</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navPosition: {
    height: 39,
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.textColour,
    fontWeight: "700",
    position: "absolute",
  },
  signInInnerPosition: {
    height: 48,
    width: 343,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  text3Typo: {
    fontFamily: FontFamily.rubik,
    textAlign: "left",
  },
  nmeroTypo: {
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
  },
  entrarWrapperPosition: {
    marginTop: -24,
    height: 48,
    marginLeft: -171.5,
    width: 343,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  entrarTypo: {
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  text3Layout: {
    lineHeight: 14,
    fontSize: FontSize.size_sm,
  },
  navChild: {
    backgroundColor: Color.white,
  },
  text2: {
    width: "13.71%",
    left: "0%",
    fontSize: FontSize.size_mini,
    top: 0,
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
  naveguePelasCores1: {
    top: 381,
    left: 14,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0.3,
    width: 400,
  },
  frameIcon: {
    top: 60,
    left: 64,
    width: 300,
    height: 300,
    position: "absolute",
    overflow: "hidden",
  },
  fullnameChild: {
    marginTop: -19.89,
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    marginLeft: -171.5,
    height: 48,
  },
  text3: {
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    color: Color.textColour,
  },
  wrapper: {
    top: 25,
    height: 14,
  },
  nmero: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    color: Color.textColour,
  },
  nmeroWrapper: {
    height: 16,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
    top: 0,
    backgroundColor: Color.white,
  },
  fullname: {
    marginTop: 78,
    height: 56,
    width: 343,
    left: "50%",
    top: "50%",
    marginLeft: -172,
    position: "absolute",
  },
  emailAddressChild: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
  },
  password: {
    marginTop: -7,
    marginLeft: -155.25,
    color: Color.darkGrey,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.rubik,
    position: "absolute",
  },
  emailAddress: {
    marginTop: 156,
    marginLeft: -172,
    height: 48,
  },
  entrar: {
    top: 15,
    left: 143,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.white,
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
  },
  entrarWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.forestgreen,
  },
  signInInner: {
    marginTop: 333,
    marginLeft: -171,
  },
  novoAqui: {
    color: Color.textColour,
  },
  crieSuaConta: {
    color: Color.mediumslateblue,
  },
  novoAquiCrieContainer: {
    top: 860,
    left: 116,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  esqueciMinhaSenhaContainer: {
    fontWeight: "600",
    fontFamily: FontFamily.manrope,
    textAlign: "center",
    left: 0,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  esqueciMinhaSenhaRedefinirWrapper: {
    top: 688,
    left: 42,
    width: 212,
    height: 14,
    position: "absolute",
  },
  signIn: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SignIn;
