import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.signInWrapper, styles.signLayout]}>
        <View style={[styles.signIn, styles.signInPosition]}>
          <View style={styles.navPosition}>
            <View style={[styles.navChild, styles.navPosition]} />
            <View style={styles.stats}>
              <Text style={[styles.text2, styles.text2FlexBox]}>9:41</Text>
              <Image
                style={[styles.statsIcon, styles.signInPosition]}
                contentFit="cover"
                source={require("../assets/stats@3x.png")}
              />
            </View>
          </View>
          <Text style={[styles.redefinirSenha, styles.text2FlexBox]}>
            Redefinir Senha
          </Text>
          <View style={styles.fullname}>
            <View style={[styles.fullnameChild, styles.emailChildPosition]} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <Text style={[styles.text3, styles.senhaTypo]}>
                ***************
              </Text>
            </View>
            <View style={[styles.novaSenhaWrapper, styles.wrapperPosition]}>
              <Text style={[styles.novaSenha, styles.senhaTypo]}>
                Nova Senha
              </Text>
            </View>
          </View>
          <View style={[styles.emailAddress, styles.emailChildPosition]}>
            <View
              style={[styles.emailAddressChild, styles.emailChildPosition]}
            />
            <Text style={[styles.confirmeSuaSenha1, styles.senhaTypo]}>
              Confirme sua Senha
            </Text>
          </View>
          <View
            style={[styles.redefinirSenhaWrapper, styles.emailChildPosition]}
          >
            <Text style={[styles.redefinirSenha1, styles.senhaPosition]}>
              Redefinir Senha
            </Text>
          </View>
          <Image
            style={[styles.pheyeLightIcon2, styles.pheyeIconLayout]}
            contentFit="cover"
            source={require("../assets/pheyelight@3x.png")}
          />
          <Image
            style={[styles.pheyeLightIcon3, styles.pheyeIconLayout]}
            contentFit="cover"
            source={require("../assets/pheyelight@3x.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    width: 428,
    left: 0,
    top: 0,
    height: 926,
  },
  signInPosition: {
    overflow: "hidden",
    position: "absolute",
  },
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
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.textColour,
    fontWeight: "700",
    position: "absolute",
  },
  emailChildPosition: {
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
  senhaTypo: {
    fontFamily: FontFamily.rubik,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  senhaPosition: {
    left: "50%",
    position: "absolute",
  },
  pheyeIconLayout: {
    height: 24,
    width: 24,
    left: 348,
    overflow: "hidden",
    position: "absolute",
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
  },
  stats: {
    width: "85.75%",
    top: 11,
    right: "7.01%",
    left: "7.24%",
    height: 23,
    position: "absolute",
  },
  redefinirSenha: {
    top: 88,
    left: 14,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0.3,
    width: 400,
  },
  fullnameChild: {
    marginTop: -19.89,
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    marginLeft: -171.5,
    height: 48,
    backgroundColor: Color.white,
  },
  text3: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    color: Color.textColour,
  },
  wrapper: {
    top: 25,
    height: 14,
  },
  novaSenha: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    color: Color.textColour,
  },
  novaSenhaWrapper: {
    height: 16,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
    backgroundColor: Color.white,
    top: 0,
  },
  fullname: {
    marginTop: -291,
    height: 56,
    width: 343,
    left: "50%",
    top: "50%",
    marginLeft: -172,
    position: "absolute",
  },
  emailAddressChild: {
    marginTop: -24,
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    marginLeft: -171.5,
    height: 48,
    backgroundColor: Color.white,
  },
  confirmeSuaSenha1: {
    marginTop: -7,
    marginLeft: -155.25,
    color: Color.darkGrey,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    top: "50%",
    fontFamily: FontFamily.rubik,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
  },
  emailAddress: {
    marginTop: -213,
    marginLeft: -172,
    height: 48,
  },
  redefinirSenha1: {
    marginLeft: -67.5,
    top: 15,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.dMSans,
    color: Color.white,
    textAlign: "left",
    left: "50%",
    fontWeight: "700",
  },
  redefinirSenhaWrapper: {
    marginTop: 333,
    marginLeft: -171,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.forestgreen,
  },
  pheyeLightIcon2: {
    top: 192,
  },
  pheyeLightIcon3: {
    top: 262,
  },
  signIn: {
    backgroundColor: Color.white,
    width: 428,
    left: 0,
    top: 0,
    height: 926,
  },
  signInWrapper: {
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default FrameScreen;
