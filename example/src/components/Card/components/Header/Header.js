import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles, { headerTextStyle } from "./Header.style";

const Header = props => {
  const { headerText, headerTextFontColor, headerTextFontSize } = props;
  return (
    <View style={styles.container}>
      <Text style={headerTextStyle(headerTextFontColor, headerTextFontSize)}>
        {headerText}
      </Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
  headerTextFontSize: PropTypes.number
};

Header.defaultProps = {
  headerTextFontSize: 16,
  headerTextFontColor: "#272727",
  headerText: "Screen Information"
};

export default Header;
