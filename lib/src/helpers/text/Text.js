export const numberFormat = (value, locale = "tr-TR", options = {}) =>
  new Intl.NumberFormat(locale, options).format(value);
