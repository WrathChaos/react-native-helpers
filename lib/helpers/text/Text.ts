export const numberFormat = (
  value: any,
  locale: string = "tr-TR",
  options: any = {},
) => new Intl.NumberFormat(locale, options).format(value);
