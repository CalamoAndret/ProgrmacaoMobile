import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CategoriaDoces = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.categoriaDoces}>
      <Pressable
        style={[styles.deliveryAddWrapper, styles.deliveryLayout]}
        onPress={() => navigation.navigate("Location")}
      >
        <View style={[styles.deliveryAdd, styles.deliveryLayout]}>
          <Text
            style={[styles.endereoDeEntregaContainer, styles.deliveryLayout]}
          >
            <Text
              style={[styles.endereoDeEntrega1, styles.procureSuaFruta1Typo]}
            >{`Endereço de Entrega
`}</Text>
            <Text style={[styles.anpolisGo, styles.anpolisGoTypo]}>
              Anápolis, GO
            </Text>
          </Text>
          <Image
            style={[styles.iconlyboldlocation, styles.iconlylightsearchLayout]}
            contentFit="cover"
            source={require("../assets/iconlyboldlocation@3x.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.profileIcon1}
        contentFit="cover"
        source={require("../assets/profile@3x.png")}
      />
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <View style={styles.iconlylightsearchParent}>
          <Image
            style={[styles.iconlylightsearch, styles.iconlylightsearchLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightsearch1@3x.png")}
          />
          <Text style={[styles.procureSuaFruta1, styles.procureSuaFruta1Typo]}>
            Procure sua fruta favorita
          </Text>
        </View>
      </View>
      <View style={[styles.categories, styles.categoriesPosition]}>
        <Text style={[styles.categorias, styles.maTypo]}>Categorias</Text>
        <Text style={[styles.verTudo, styles.maTypo]}>Ver tudo</Text>
        <View style={[styles.categoriesInner, styles.categoriesPosition]}>
          <View style={styles.groupWrapper}>
            <View style={styles.recomendedParent}>
              <View style={styles.recomendedPosition}>
                <View
                  style={[styles.recomendedChild, styles.recomendedPosition]}
                />
                <Text style={[styles.recomendados, styles.nameLayout1]}>
                  Recomendados
                </Text>
              </View>
              <View style={[styles.pizza, styles.pizzaLayout]}>
                <View style={[styles.pizzaChild, styles.pizzaLayout]} />
                <Text style={[styles.doces, styles.pizzaLayout]}>Doces</Text>
              </View>
              <View style={[styles.sandwitch, styles.sandwitchLayout1]}>
                <View style={[styles.sandwitchChild, styles.childBg]} />
                <Text style={[styles.semiCidas, styles.cidasTypo]}>
                  Semi-Ácidas
                </Text>
              </View>
              <View style={[styles.sandwitch1, styles.sandwitchLayout]}>
                <View style={[styles.sandwitchItem, styles.sandwitchLayout]} />
                <Text style={[styles.cidas, styles.cidasTypo]}>Ácidas</Text>
              </View>
              <View style={[styles.chicken, styles.chickenLayout]}>
                <View style={[styles.chickenChild, styles.chickenLayout]} />
                <Text style={[styles.neutras, styles.cidasTypo]}>Neutras</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.foodBox}>
        <Pressable
          style={styles.disBox1Wrapper}
          onPress={() => navigation.navigate("Card")}
        >
          <View style={[styles.disBox11, styles.disShadowBox]}>
            <ImageBackground
              style={[styles.imgIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/img@3x.png")}
            >
              <Image
                style={[styles.apples15061196401Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/apples1506119-640-1@3x.png")}
              />
            </ImageBackground>
            <View style={[styles.nameParent, styles.nameGroupPosition]}>
              <View style={[styles.name, styles.namePosition]}>
                <Text style={[styles.fromGrandfillHut2, styles.anpolisGoTypo]}>
                  from Grandfill Hut
                </Text>
                <Text style={[styles.ma, styles.maTypo]}>Maçã</Text>
              </View>
              <View style={[styles.sub, styles.subPosition]}>
                <Text style={[styles.km, styles.kmTypo]}>1.8 Km</Text>
                <View style={[styles.rating, styles.ratingPosition]}>
                  <Text style={[styles.text7, styles.kmTypo]}>4.1</Text>
                  <Image
                    style={[styles.ratingChild, styles.childLayout]}
                    contentFit="cover"
                    source={require("../assets/star2@3x.png")}
                  />
                </View>
                <Image
                  style={styles.subChild}
                  contentFit="cover"
                  source={require("../assets/vector-1@3x.png")}
                />
              </View>
              <Text style={[styles.r060Un, styles.maTypo]}>R$0,60 Un</Text>
            </View>
            <Image
              style={styles.disBox1Child}
              contentFit="cover"
              source={require("../assets/vector-13@3x.png")}
            />
          </View>
        </Pressable>
        <View style={[styles.disBox21, styles.disShadowBox]}>
          <ImageBackground
            style={[styles.imgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/img1@3x.png")}
          >
            <View style={[styles.imgChild, styles.childLayout]} />
            <Image
              style={[styles.apples15061196401Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/apricots2523272-1280-1@3x.png")}
            />
          </ImageBackground>
          <View style={[styles.nameGroup, styles.nameGroupPosition]}>
            <View style={[styles.name1, styles.namePosition]}>
              <Text style={[styles.fromGrandfillHut2, styles.anpolisGoTypo]}>
                from The Food Land
              </Text>
              <Text style={[styles.ma, styles.maTypo]}>Damasco</Text>
            </View>
            <View style={[styles.sub1, styles.subPosition]}>
              <Text style={[styles.km, styles.kmTypo]}>4.7 Km</Text>
              <View style={[styles.rating1, styles.ratingPosition]}>
                <Text style={[styles.text7, styles.kmTypo]}>4.4</Text>
                <Image
                  style={[styles.ratingChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/star2@3x.png")}
                />
              </View>
              <Image
                style={styles.subChild}
                contentFit="cover"
                source={require("../assets/vector-1@3x.png")}
              />
            </View>
            <Text style={[styles.r060Un, styles.maTypo]}>R$20,00 Kg</Text>
          </View>
          <Image
            style={styles.disBox1Child}
            contentFit="cover"
            source={require("../assets/vector-13@3x.png")}
          />
        </View>
        <View style={[styles.disBox31, styles.disShadowBox]}>
          <ImageBackground
            style={[styles.imgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/img2@3x.png")}
          >
            <View style={[styles.imgChild, styles.childLayout]} />
            <Image
              style={[styles.apples15061196401Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/cherries1534063-1280-1@3x.png")}
            />
          </ImageBackground>
          <View style={[styles.groupView, styles.name2Layout]}>
            <View style={[styles.name2, styles.name2Layout]}>
              <Text style={[styles.fromGrandfillHut2, styles.anpolisGoTypo]}>
                from Food Land
              </Text>
              <Text style={[styles.ma, styles.maTypo]}>Cereja</Text>
            </View>
            <View style={[styles.sub1, styles.subPosition]}>
              <Text style={[styles.km, styles.kmTypo]}>4.7 Km</Text>
              <View style={[styles.rating1, styles.ratingPosition]}>
                <Text style={[styles.text7, styles.kmTypo]}>3.4</Text>
                <Image
                  style={[styles.ratingChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/star2@3x.png")}
                />
              </View>
              <Image
                style={styles.subChild}
                contentFit="cover"
                source={require("../assets/vector-1@3x.png")}
              />
            </View>
            <Text style={[styles.r060Un, styles.maTypo]}>R$5,00 Un</Text>
          </View>
          <Image
            style={styles.disBox1Child}
            contentFit="cover"
            source={require("../assets/vector-13@3x.png")}
          />
        </View>
        <View style={[styles.disBox41, styles.disShadowBox]}>
          <ImageBackground
            style={[styles.imgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/img3@3x.png")}
          >
            <View style={[styles.imgChild, styles.childLayout]} />
            <Image
              style={[styles.apples15061196401Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/guava6873684-1280-1@3x.png")}
            />
          </ImageBackground>
          <View style={[styles.nameParent, styles.nameGroupPosition]}>
            <View style={[styles.name, styles.namePosition]}>
              <Text style={[styles.fromGrandfillHut2, styles.anpolisGoTypo]}>
                from Grandfill Hut
              </Text>
              <Text style={[styles.ma, styles.maTypo]}>Goiaba</Text>
            </View>
            <View style={[styles.sub1, styles.subPosition]}>
              <Text style={[styles.km, styles.kmTypo]}>1.8 Km</Text>
              <View style={[styles.rating1, styles.ratingPosition]}>
                <Text style={[styles.text7, styles.kmTypo]}>3.2</Text>
                <Image
                  style={[styles.ratingChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/star2@3x.png")}
                />
              </View>
              <Image
                style={styles.subChild}
                contentFit="cover"
                source={require("../assets/vector-1@3x.png")}
              />
            </View>
            <Text style={[styles.r060Un, styles.maTypo]}>R$18,90 Kg</Text>
          </View>
          <Image
            style={styles.disBox1Child}
            contentFit="cover"
            source={require("../assets/vector-13@3x.png")}
          />
        </View>
        <View style={[styles.disBox51, styles.disShadowBox]}>
          <ImageBackground
            style={[styles.imgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/img4@3x.png")}
          >
            <View style={[styles.imgChild, styles.childLayout]} />
            <Image
              style={[styles.apples15061196401Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/nature3063035-640-1@3x.png")}
            />
          </ImageBackground>
          <View style={[styles.nameParent2, styles.nameGroupPosition]}>
            <View style={[styles.name2, styles.name2Layout]}>
              <Text style={[styles.fromGrandfillHut2, styles.anpolisGoTypo]}>
                from Food Land
              </Text>
              <Text style={[styles.ma, styles.maTypo]}>Uva</Text>
            </View>
            <View style={[styles.sub1, styles.subPosition]}>
              <Text style={[styles.km, styles.kmTypo]}>4.7 Km</Text>
              <View style={[styles.rating1, styles.ratingPosition]}>
                <Text style={[styles.text7, styles.kmTypo]}>4.4</Text>
                <Image
                  style={[styles.ratingChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/star3@3x.png")}
                />
              </View>
              <Image
                style={styles.subChild}
                contentFit="cover"
                source={require("../assets/vector-11@3x.png")}
              />
            </View>
            <Text style={[styles.r060Un, styles.maTypo]}>R$14,90 Kg</Text>
          </View>
          <Image
            style={styles.disBox1Child}
            contentFit="cover"
            source={require("../assets/vector-121@3x.png")}
          />
        </View>
        <View style={[styles.disBox61, styles.disShadowBox]}>
          <ImageBackground
            style={[styles.imgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/img5@3x.png")}
          >
            <View style={[styles.imgChild, styles.childLayout]} />
            <Image
              style={[styles.apples15061196401Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plum1690579-1280-1@3x.png")}
            />
          </ImageBackground>
          <View style={[styles.nameParent, styles.nameGroupPosition]}>
            <View style={[styles.name5, styles.nameLayout]}>
              <Text style={[styles.fromGrandfillHut2, styles.anpolisGoTypo]}>
                from Indian Loves
              </Text>
              <Text style={[styles.ma, styles.maTypo]}>{`Ameixa
`}</Text>
            </View>
            <View style={[styles.sub1, styles.subPosition]}>
              <Text style={[styles.km, styles.kmTypo]}>1.3 Km</Text>
              <View style={[styles.rating1, styles.ratingPosition]}>
                <Text style={[styles.text7, styles.kmTypo]}>4.4</Text>
                <Image
                  style={[styles.ratingChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/star2@3x.png")}
                />
              </View>
              <Image
                style={styles.subChild}
                contentFit="cover"
                source={require("../assets/vector-1@3x.png")}
              />
            </View>
            <Text style={[styles.r060Un, styles.maTypo]}>R$0,50 Un</Text>
          </View>
          <Image
            style={styles.disBox1Child}
            contentFit="cover"
            source={require("../assets/vector-13@3x.png")}
          />
        </View>
      </View>
      <View style={styles.navPosition}>
        <View style={[styles.navChild, styles.navPosition]} />
        <View style={styles.stats}>
          <Text style={[styles.text13, styles.docesTypo]}>9:41</Text>
          <Image
            style={styles.statsIcon}
            contentFit="cover"
            source={require("../assets/stats@3x.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deliveryLayout: {
    height: 54,
    position: "absolute",
  },
  procureSuaFruta1Typo: {
    fontFamily: FontFamily.rubik,
    fontSize: FontSize.size_lg,
  },
  anpolisGoTypo: {
    color: Color.subTextGray,
    fontWeight: "500",
    fontFamily: FontFamily.rubik,
  },
  iconlylightsearchLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  searchLayout: {
    height: 53,
    width: 396,
    position: "absolute",
  },
  categoriesPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  maTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.rubik,
    position: "absolute",
  },
  recomendedPosition: {
    width: 142,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  nameLayout1: {
    width: 120,
    position: "absolute",
  },
  pizzaLayout: {
    width: 84,
    position: "absolute",
  },
  sandwitchLayout1: {
    width: 116,
    height: 40,
    top: 0,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_81xl,
    left: 0,
  },
  cidasTypo: {
    opacity: 0.7,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    color: Color.textColour,
    fontWeight: "700",
    position: "absolute",
  },
  sandwitchLayout: {
    width: 82,
    height: 40,
    top: 0,
    position: "absolute",
  },
  chickenLayout: {
    width: 100,
    height: 40,
    top: 0,
    position: "absolute",
  },
  disShadowBox: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(137, 137, 137, 0.1)",
    borderRadius: Border.br_5xl,
    height: 140,
    width: 396,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 120,
    width: 136,
    position: "absolute",
  },
  nameGroupPosition: {
    height: 96,
    left: 166,
    top: 22,
  },
  namePosition: {
    height: 38,
    left: 0,
    top: 0,
  },
  subPosition: {
    top: 48,
    height: 16,
    left: 0,
    position: "absolute",
  },
  kmTypo: {
    fontSize: FontSize.size_xs,
    top: 1,
    color: Color.subTextGray,
    fontWeight: "500",
    fontFamily: FontFamily.rubik,
    textAlign: "left",
    position: "absolute",
  },
  ratingPosition: {
    left: 51,
    height: 16,
    top: 0,
    position: "absolute",
  },
  childLayout: {
    width: 16,
    position: "absolute",
  },
  name2Layout: {
    width: 95,
    position: "absolute",
  },
  nameLayout: {
    width: 108,
    position: "absolute",
  },
  navPosition: {
    height: 39,
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
  },
  docesTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  endereoDeEntrega1: {
    color: Color.textColour,
    fontWeight: "700",
    fontFamily: FontFamily.rubik,
  },
  anpolisGo: {
    fontSize: FontSize.size_mini,
    color: Color.subTextGray,
    fontWeight: "500",
  },
  endereoDeEntregaContainer: {
    left: 52,
    width: 191,
    textAlign: "left",
    top: 0,
  },
  iconlyboldlocation: {
    height: "74.53%",
    width: "17.28%",
    top: "0%",
    right: "82.72%",
    bottom: "25.47%",
  },
  deliveryAdd: {
    left: 0,
    top: 0,
    width: 243,
    height: 54,
  },
  deliveryAddWrapper: {
    top: 74,
    width: 243,
    height: 54,
    left: 10,
  },
  profileIcon1: {
    top: 54,
    left: 362,
    width: 50,
    height: 50,
    position: "absolute",
  },
  searchBarChild: {
    backgroundColor: Color.grey,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  iconlylightsearch: {
    height: "90.48%",
    width: "7.97%",
    top: "8.55%",
    right: "92.03%",
    bottom: "0.97%",
  },
  procureSuaFruta1: {
    left: 36,
    color: Color.darkgray,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconlylightsearchParent: {
    height: "39.62%",
    width: "63.38%",
    top: "30.19%",
    right: "33.84%",
    bottom: "30.19%",
    left: "2.78%",
    position: "absolute",
  },
  searchBar: {
    top: 157,
    left: 16,
  },
  categorias: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    top: 0,
    left: 16,
    color: Color.textColour,
    textAlign: "left",
  },
  verTudo: {
    left: 332,
    letterSpacing: -0.4,
    color: Color.mediumslateblue,
    textAlign: "right",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    top: 0,
  },
  recomendedChild: {
    backgroundColor: "#f2f4f7",
    borderRadius: Border.br_81xl,
  },
  recomendados: {
    left: 11,
    color: "#6c6d6e",
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: 8,
  },
  pizzaChild: {
    backgroundColor: Color.mediumslateblue,
    height: 40,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  doces: {
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    top: 9,
    left: 0,
  },
  pizza: {
    left: 153,
    height: 40,
    top: 0,
  },
  sandwitchChild: {
    width: 116,
    height: 40,
    top: 0,
    position: "absolute",
  },
  semiCidas: {
    left: 13,
    width: 96,
    top: 9,
  },
  sandwitch: {
    left: 341,
  },
  sandwitchItem: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_81xl,
    left: 0,
  },
  cidas: {
    left: 7,
    width: 67,
    top: 9,
  },
  sandwitch1: {
    left: 248,
  },
  chickenChild: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_81xl,
    left: 0,
  },
  neutras: {
    width: 80,
    top: 8,
    left: 10,
  },
  chicken: {
    left: 468,
  },
  recomendedParent: {
    width: 568,
    height: 40,
    top: 9,
    left: 16,
    position: "absolute",
  },
  groupWrapper: {
    top: -1,
    width: 612,
    height: 58,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  categoriesInner: {
    top: 31,
    height: 57,
  },
  categories: {
    top: 233,
    height: 88,
  },
  apples15061196401Icon: {
    left: 0,
    top: 0,
  },
  imgIcon: {
    top: 10,
    borderRadius: Border.br_xl,
    left: 10,
    overflow: "hidden",
  },
  fromGrandfillHut2: {
    top: 23,
    fontSize: FontSize.size_smi,
    letterSpacing: -0.3,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  ma: {
    color: Color.textColour,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  name: {
    width: 108,
    position: "absolute",
  },
  km: {
    left: 0,
  },
  text7: {
    left: 20,
  },
  ratingChild: {
    left: 2,
    borderRadius: Border.br_12xs_8,
    top: 2,
    height: 16,
  },
  rating: {
    width: 36,
  },
  subChild: {
    left: 45,
    width: 1,
    height: 12,
    top: 2,
    position: "absolute",
  },
  sub: {
    width: 87,
    height: 16,
  },
  r060Un: {
    top: 75,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 0,
  },
  nameParent: {
    width: 108,
    position: "absolute",
  },
  disBox1Child: {
    left: 313,
    width: 115,
    height: 162,
    top: 0,
    position: "absolute",
  },
  disBox11: {
    top: 0,
  },
  disBox1Wrapper: {
    height: 140,
    width: 396,
    left: 0,
    top: 0,
    position: "absolute",
  },
  imgChild: {
    top: 168,
    left: 170,
    backgroundColor: Color.aliceblue,
    height: 3,
  },
  name1: {
    width: 120,
    position: "absolute",
  },
  rating1: {
    width: 39,
  },
  sub1: {
    width: 90,
    height: 16,
  },
  nameGroup: {
    width: 120,
    position: "absolute",
  },
  disBox21: {
    top: 156,
  },
  name2: {
    height: 38,
    left: 0,
    top: 0,
  },
  groupView: {
    height: 96,
    left: 166,
    top: 22,
  },
  disBox31: {
    top: 312,
  },
  disBox41: {
    top: 468,
  },
  nameParent2: {
    width: 99,
    position: "absolute",
  },
  disBox51: {
    top: 624,
  },
  name5: {
    height: 42,
    left: 0,
    top: 0,
  },
  disBox61: {
    top: 780,
  },
  foodBox: {
    top: 336,
    height: 920,
    width: 396,
    left: 16,
    position: "absolute",
  },
  navChild: {
    backgroundColor: Color.white,
  },
  text13: {
    width: "13.71%",
    fontFamily: FontFamily.poppins,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    left: "0%",
    fontSize: FontSize.size_mini,
    color: Color.textColour,
    top: 0,
    position: "absolute",
  },
  statsIcon: {
    width: "18.16%",
    top: 6,
    right: "0%",
    left: "81.84%",
    height: 11,
    maxWidth: "100%",
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
  categoriaDoces: {
    flex: 1,
    width: "100%",
    height: 1342,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default CategoriaDoces;
