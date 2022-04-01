import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Iconmenu from "../images/menu.png";
import calendar from "../images/calendar.png";
import IconDollar from "../images/dollar.png";
import Icon from "react-native-vector-icons/AntDesign";

export default function Headers() {
  return (
    <View style={styles.container}>
      <View style={styles.box_header}>
        <TouchableOpacity style={styles.base_textheader}>
          <Image source={Iconmenu} style={styles.Icon_menu} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={calendar} style={styles.Icon_menu} />
        </TouchableOpacity>
      </View>
      <View style={styles.box_money}>
        <Text style={styles.text_avalible}>Available Balance</Text>
        <View style={styles.money_content}>
          <Image source={IconDollar} style={styles.image_money} />
          <Text style={styles.text_money}>7,392.00</Text>
        </View>
        <Text style={styles.text_date}>June 9,2018</Text>
      </View>
      <View style={styles.box_banknumber}>
        <View style={styles.banknumber}>
          <Text style={styles.text_NOcard}>42012</Text>
          <Text style={styles.text_NOcard}>3049</Text>
          <Text style={styles.text_NOcard}>2800</Text>
          <Text style={styles.text_NOcard}>9815</Text>
        </View>
        <View style={styles.footer_banknumber}>
          <View style={styles.box_footer}>
            <Text style={styles.text_footer}>EXPIRE</Text>
            <Icon
              name="caretright"
              color="#fff"
              size={7}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text_Datafooter}>20/22</Text>
          </View>
          <View style={styles.box_footer}>
            <Text style={styles.text_footer}>CVC CODE</Text>
            <Icon
              name="caretright"
              color="#fff"
              size={7}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text_Datafooter}>230</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
  },
  box_header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box_money: {
    textAlign: "center",
    alignItems: "center",
    marginBottom:25
  },
  box_banknumber: {
    padding: 10,
    width: "95%",
    height: 80,
    backgroundColor: "#1D4159",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  banknumber: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footer_banknumber: {
    paddingRight: 15,
    paddingLeft: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box_footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#22577E",
  },
  money_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: "gray",
  },
  Icon_menu: {
    tintColor: "#fff",
    width: 25,
    height: 25,
  },
  image_money: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  //   text
  text_money: {
    fontSize: 32,
    color: "#fff",
  },
  text_date: {
    color: "#85C1E9",
  },
  text_avalible: {
    color: "#82E0AA",
  },
  text_NOcard: {
    fontSize: 19,
    color: "#B0D7F1",
  },
  text_footer: {
    fontWeight: "500",
    fontSize: 10,
    marginRight: 5,
    color: "#fff",
  },
  text_Datafooter: {
    fontWeight: "700",
    fontSize: 12,
    color: "#fff",
  },
});
