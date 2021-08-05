import {createIBANChecksum, getSpecificationForCountry} from './utils'

const twoNumbersRegex = /^\d{2}$/

const verifyBBANFormat = (bban: string, bbanRegexp: string): boolean => {
  const regexp = new RegExp(bbanRegexp)
  return regexp.test(bban)
}

const extractChecksum = (iban: string): string => iban.slice(2, 4)
const extractBBAN = (iban: string): string => iban.slice(4)

export const hasValidIBANChecksum = (iban: string): boolean => {
  const providedChecksum = iban.slice(2, 4)
  const calculatedChecksum = createIBANChecksum(iban)

  return providedChecksum === calculatedChecksum
}

export const isValidIBAN = (iban: string | undefined | null): boolean => {
  if (!iban || iban === '') {
    return false
  }

  const countryCode = iban.slice(0, 2)
  const spec = getSpecificationForCountry(countryCode)
  if (!spec) {
    return false
  }
  return (
    !!spec.bbanRegexp &&
    !!spec.length &&
    spec.length === iban.length &&
    twoNumbersRegex.test(extractChecksum(iban)) &&
    verifyBBANFormat(extractBBAN(iban), spec.bbanRegexp) &&
    hasValidIBANChecksum(iban)
  )
}
