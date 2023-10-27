import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Location = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.location}>
      <Image
        style={[styles.whatsappImage20230911At1, styles.statsPosition]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230911-at-1956-1@3x.png")}
      />
      <View style={[styles.address, styles.rec1Layout]}>
        <View style={[styles.rec1, styles.rec1Layout]} />
        <View style={styles.address1}>
          <Text style={styles.header}>Definir local de entrega</Text>
          <View style={styles.mainAdd}>
            <Image
              style={[styles.locationIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/location@3x.png")}
            />
            <Text style={[styles.anpolisGo, styles.subAddPosition]}>
              Anápolis, GO
            </Text>
          </View>
          <Text
            style={[styles.subAdd, styles.subAddPosition]}
          >{`UniEvangelica - Bloco H,
Anápolis, GO`}</Text>
        </View>
        <View style={[styles.change, styles.changeLayout1]}>
          <View style={[styles.changeChild, styles.changePosition]} />
          <Text style={[styles.mudar, styles.mudarTypo]}>Mudar</Text>
        </View>
        <Pressable
          style={[styles.changeWrapper, styles.changeLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.change1, styles.changeLayout]}>
            <View style={[styles.changeItem, styles.changeLayout]} />
            <Text style={[styles.confirmarLocalizao, styles.mudarTypo]}>
              Confirmar Localização
            </Text>
          </View>
        </Pressable>
      </View>
      <Pressable
        style={[styles.wrapper, styles.changeLayout1]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-63@3x.png")}
        />
      </Pressable>
      <View style={styles.navPosition}>
        <View style={[styles.navChild, styles.navPosition]} />
        <View style={[styles.stats, styles.statsPosition]}>
          <Text style={[styles.text1, styles.mudarTypo]}>9:41</Text>
          <Image
            style={[styles.statsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/stats@3x.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsPosition: {
    top: 11,
    position: "absolute",
  },
  rec1Layout: {
    height: 200,
    width: 428,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  subAddPosition: {
    color: Color.textColour,
    left: 32,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    position: "absolute",
  },
  changeLayout1: {
    height: 40,
    position: "absolute",
  },
  changePosition: {
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
  },
  mudarTypo: {
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  changeLayout: {
    height: 50,
    width: 224,
    position: "absolute",
  },
  navPosition: {
    height: 39,
    top: 0,
    width: 428,
    left: 0,
    position: "absolute",
  },
  whatsappImage20230911At1: {
    width: 666,
    left: 0,
    height: 926,
    top: 11,
  },
  rec1: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    shadowColor: "rgba(36, 36, 36, 0.2)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    top: 0,
    backgroundColor: Color.white,
  },
  header: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    color: Color.subTextGray,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    top: 0,
    left: 0,
    position: "absolute",
  },
  locationIcon1: {
    height: "84.8%",
    width: "11.76%",
    top: "6.45%",
    right: "88.24%",
    bottom: "8.75%",
    maxHeight: "100%",
    left: "0%",
  },
  anpolisGo: {
    fontSize: 26,
    fontWeight: "600",
    letterSpacing: -0.5,
    top: 0,
  },
  mainAdd: {
    height: "30.69%",
    width: "88.21%",
    top: "31.68%",
    right: "11.79%",
    bottom: "37.62%",
    left: "0%",
    position: "absolute",
  },
  subAdd: {
    top: 63,
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    opacity: 0.8,
    fontWeight: "500",
    left: 32,
  },
  address1: {
    top: 9,
    width: 212,
    height: 101,
    left: 16,
    position: "absolute",
  },
  changeChild: {
    backgroundColor: Color.darkGrey,
    opacity: 0.6,
    height: 40,
    position: "absolute",
    width: 102,
  },
  mudar: {
    top: 8,
    width: 69,
    fontFamily: FontFamily.dMSans,
    textAlign: "center",
    fontWeight: "700",
    opacity: 0.8,
    letterSpacing: -0.5,
    color: Color.subTextGray,
    fontSize: FontSize.size_lg,
    left: 16,
  },
  change: {
    top: 41,
    left: 310,
    width: 102,
    height: 40,
  },
  changeItem: {
    backgroundColor: Color.forestgreen,
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
  },
  confirmarLocalizao: {
    top: 12,
    left: 8,
    fontSize: FontSize.size_xl,
    color: Color.white,
    fontFamily: FontFamily.dMSans,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: -0.4,
  },
  change1: {
    top: 0,
    left: 0,
  },
  changeWrapper: {
    top: 134,
    left: 102,
  },
  address: {
    top: 726,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 59,
    width: 40,
    left: 16,
  },
  navChild: {
    backgroundColor: Color.white,
  },
  text1: {
    width: "13.71%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppins,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "700",
    color: Color.textColour,
    left: "0%",
    top: 0,
  },
  statsIcon: {
    width: "18.16%",
    top: 6,
    right: "0%",
    left: "81.84%",
    height: 11,
  },
  stats: {
    width: "85.75%",
    right: "7.01%",
    left: "7.24%",
    height: 23,
  },
  location: {
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Location;
