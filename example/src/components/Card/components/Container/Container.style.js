export function _titleStyle(titleColor, titleFontSize) {
  return {
    marginTop: 3,
    textAlign: "center",
    color: titleColor,
    fontSize: titleFontSize
  };
}

export function _subtitleStyle(subtitleColor, subtitleFontSize) {
  return {
    marginTop: 3,
    fontWeight: "500",
    textAlign: "center",
    color: subtitleColor,
    fontSize: subtitleFontSize
  };
}

export default {
  container: {
    marginTop: 8,
    flexDirection: "column",
    alignItems: "center"
  }
};
