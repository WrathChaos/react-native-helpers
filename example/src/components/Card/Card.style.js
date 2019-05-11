export function container(backgroundColor) {
  return {
    padding: 16,
    borderRadius: 16,
    backgroundColor: backgroundColor
  };
}

export function shadowStyle(shadowColor) {
  return {
    shadowRadius: 10,
    shadowOpacity: 0.4,
    shadowColor: shadowColor,
    shadowOffset: { height: 5, width: 0 }
  };
}

export default {
  containerGlue: { flexDirection: "column" }
};
