import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles, { _titleStyle, _subtitleStyle } from "./Container.style";

const Container = props => {
  const {
    title,
    subtitle,
    titleColor,
    titleStyle,
    subtitleStyle,
    titleFontSize,
    subtitleColor,
    subtitleFontSize
  } = props;
  return (
    <View style={styles.container}>
      <Text style={titleStyle || _titleStyle(titleColor, titleFontSize)}>
        {title}
      </Text>
      <Text
        style={subtitleStyle || _subtitleStyle(subtitleColor, subtitleFontSize)}
      >
        {subtitle}
      </Text>
    </View>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  titleFontSize: PropTypes.number,
  subtitleFontSize: PropTypes.number
};

Container.defaultProps = {
  title: "Device OS",
  titleColor: "gray",
  titleFontSize: 13,
  subtitleFontSize: 15,
  subtitleColor: "#222222"
};

export default Container;
