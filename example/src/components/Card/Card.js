import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Header from "./components/Header/Header";
import styles, { container, shadowStyle } from "./Card.style";

const Card = props => {
  const { children, shadowColor, backgroundColor } = props;
  return (
    <View style={[container(backgroundColor), shadowStyle(shadowColor)]}>
      <View style={styles.containerGlue}>
        <Header {...props} />
        {children}
      </View>
    </View>
  );
};

Card.propTypes = {};

Card.defaultProps = {
  shadowColor: "grey",
  backgroundColor: "#fbfbfb"
};

export default Card;
