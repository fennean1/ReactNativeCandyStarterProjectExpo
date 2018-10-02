/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  PanResponder,
  Image,
  TouchableHighlight,
  ImageBackground
} from "react-native";

import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

import { BEANS } from "../lib/Images"
import {TileData} from "../lib/TileData"
import Tile from "./Tile";


export default class SwappableGrid extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      // tileDataSource: this.initializeDataSource()
    };

  }

  render() {
    return (
          <GestureRecognizer/>
    );
  }
}

let Window = Dimensions.get("window");
let windowSpan = Math.min(Window.width, Window.height);
let TILE_WIDTH = windowSpan / 6;

let colored = false

let blue = colored ? "#3c44d8" : null
let red = colored ? "#f24646" : null
let yellow = colored ? "#faff7f" : null
let green = colored ? "#168e3a" : null
let orange = colored ? "#ea0e62" : null
let pink = colored ? "#ff51f3" : null
let white = "#ffffff";

let styles = StyleSheet.create({
  backGroundImage: {
    flex: 1,
    width: 300,
    height: 300,
    backgroundColor: blue
  },
  gestureContainer: {
    flex: 1,
    width: TILE_WIDTH * 5,
    height: TILE_WIDTH * 5,
    position: "absolute",
    backgroundColor: green,
  },
});
