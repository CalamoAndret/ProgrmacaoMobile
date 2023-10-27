import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const SignUp1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={styles.navPosition}>
        <View style={[styles.navChild, styles.navPosition]} />
        <View style={[styles.stats, styles.statsPosition]}>
          <Text style={[styles.text1, styles.text1FlexBox]}>9:41</Text>
          <Image
            style={styles.statsIcon}
            contentFit="cover"
            source={require("../assets/stats1@3x.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.statsPosition]}
        contentFit="cover"
        source={require("../assets/frame1@3x.png")}
      />
      <Text style={[styles.faaParteDa1, styles.text1FlexBox]}>
        Faça parte da Frutopia e desfrute de saúde e sabor a cada clique!
      </Text>
      <View style={[styles.fullname, styles.emailLayout]}>
        <View style={[styles.fullnameChild, styles.childBorder]} />
        <Text
          style={[styles.pedroAfonsoCorrea1, styles.pedroAfonsoCorrea1Layout]}
        >
          Pedro Afonso Correa Neto
        </Text>
        <View style={styles.nomeWrapper}>
          <Text style={[styles.nome, styles.nomeTypo]}>Nome</Text>
        </View>
      </View>
      <View style={[styles.emailAddress, styles.emailLayout]}>
        <View
          style={[styles.emailAddressChild, styles.emailAddressChildPosition]}
        />
        <Text style={styles.xxXXxxxXxxx1}>(xx) x xxxx-xxxx</Text>
      </View>
      <View style={[styles.emailAddress1, styles.emailLayout]}>
        <View
          style={[styles.emailAddressChild, styles.emailAddressChildPosition]}
        />
        <Text style={styles.xxXXxxxXxxx1}>E-mail</Text>
      </View>
      <View style={[styles.emailAddress2, styles.emailLayout]}>
        <View
          style={[styles.emailAddressChild, styles.emailAddressChildPosition]}
        />
        <Text style={styles.xxXXxxxXxxx1}>Senha</Text>
      </View>
      <View style={[styles.groupParent, styles.emailLayout]}>
        <Pressable
          style={[
            styles.jTemUmaContaCliqueAquiWrapper,
            styles.pedroAfonsoCorrea1Layout,
          ]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.jTemUmaContainer, styles.nomeTypo]}>
            <Text style={styles.jTemUma1}>{`Já tem uma conta? `}</Text>
            <Text style={styles.cliqueAqui}>Clique aqui</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.frameWrapper, styles.frameWrapperPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <View
            style={[styles.criarContaWrapper, styles.emailAddressChildPosition]}
          >
            <Text style={styles.criarConta}>Criar Conta</Text>
          </View>
        </Pressable>
      </View>
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
  statsPosition: {
    top: 11,
    position: "absolute",
  },
  text1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.textColour,
    position: "absolute",
  },
  emailLayout: {
    width: 343,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    height: 48,
    backgroundColor: Color.white,
  },
  pedroAfonsoCorrea1Layout: {
    height: 14,
    position: "absolute",
  },
  nomeTypo: {
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
  },
  emailAddressChildPosition: {
    marginTop: -24,
    marginLeft: -171.5,
    width: 343,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameWrapperPosition: {
    marginLeft: -171.5,
    width: 343,
    left: "50%",
    top: "50%",
    position: "absolute",
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
    fontFamily: FontFamily.poppins,
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
    right: "7.01%",
    left: "7.24%",
    height: 23,
  },
  frameIcon: {
    left: 54,
    width: 320,
    height: 320,
    overflow: "hidden",
  },
  faaParteDa1: {
    top: 353,
    left: 14,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0.3,
    fontWeight: "800",
    width: 400,
  },
  fullnameChild: {
    marginTop: -19.89,
    height: 48,
    marginLeft: -171.5,
    width: 343,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  pedroAfonsoCorrea1: {
    top: 25,
    width: 170,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.rubik,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    height: 14,
    left: 16,
  },
  nome: {
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.rubik,
  },
  nomeWrapper: {
    height: 16,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
    flexDirection: "row",
    left: 16,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  fullname: {
    marginTop: 23,
    height: 56,
    left: "50%",
    top: "50%",
    marginLeft: -172,
    width: 343,
  },
  emailAddressChild: {
    height: 48,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
  },
  xxXXxxxXxxx1: {
    marginTop: -7,
    marginLeft: -155.25,
    color: Color.darkGrey,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  emailAddress: {
    marginTop: 100,
    height: 48,
    left: "50%",
    top: "50%",
    marginLeft: -172,
    width: 343,
  },
  emailAddress1: {
    marginTop: 169,
    height: 48,
    left: "50%",
    top: "50%",
    marginLeft: -172,
    width: 343,
  },
  emailAddress2: {
    marginTop: 238,
    height: 48,
    left: "50%",
    top: "50%",
    marginLeft: -172,
    width: 343,
  },
  jTemUma1: {
    color: Color.textColour,
  },
  cliqueAqui: {
    color: Color.mediumslateblue,
  },
  jTemUmaContainer: {
    fontFamily: FontFamily.dMSans,
    textAlign: "center",
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  jTemUmaContaCliqueAquiWrapper: {
    top: 64,
    left: 58,
    width: 205,
  },
  criarConta: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.white,
    fontFamily: FontFamily.dMSans,
    textAlign: "left",
    fontWeight: "700",
  },
  criarContaWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.forestgreen,
    paddingHorizontal: Padding.p_102xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameWrapper: {
    marginTop: -39,
    height: 48,
  },
  groupParent: {
    top: 796,
    left: 43,
    height: 78,
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SignUp1;
