export const numberFormat = (
  value: any,
  locale: string = "en-GB",
  options: any = {},
) => new Intl.NumberFormat(locale, options).format(value);
