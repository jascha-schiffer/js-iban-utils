export type CountryCode = string

export type CountrySpecification = {
  length?: number
  bbanRegexp?: string
  IBANRegistry?: boolean
  SEPA?: boolean
}
