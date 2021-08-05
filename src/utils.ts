import {CountrySpecification, CountryCode} from './types'
import {countrySpecs} from './specifications'

export const getSpecificationForCountry = (
  countryCode: CountryCode | string
): CountrySpecification | undefined => countrySpecs[countryCode]

export const isSEPACountry = (countryCode: string | null | undefined): boolean => {
  if (typeof countryCode !== 'string') {
    return false
  }
  const spec = getSpecificationForCountry(countryCode.toUpperCase())
  return spec?.SEPA ?? false
}

export const largeNumberModulo = (dividend: string, divisor: number): number => {
  const partLength = 10

  while (dividend.length > partLength) {
    const part = parseInt(dividend.slice(0, partLength), 10)
    // eslint-disable-next-line no-param-reassign
    dividend = (part % divisor) + dividend.substring(partLength)
  }
  return parseInt(dividend, 10) % divisor
}

export const getNumberOnlyRepresentationOfIBAN = (iban: string): string => {
  let numberRepresentations = ''
  for (let i = 0; i < iban.length; i += 1) {
    // @see https://www.rapidtables.com/code/text/ascii-table.html
    const c = iban.charCodeAt(i)
    if (c >= 65) {
      // if character is a letter
      numberRepresentations += (c - 55).toString(10)
    } else {
      numberRepresentations += iban[i]
    }
  }
  return numberRepresentations
}

export const createIBANChecksum = (iban: string): string => {
  const restructuredIBAN = `${iban.slice(4)}${iban.slice(0, 2)}00`
  const numberRepresentation = getNumberOnlyRepresentationOfIBAN(restructuredIBAN).replace(
    /^0+/,
    ''
  ) // trim leading 0
  const remainder = largeNumberModulo(numberRepresentation, 97)
  const checkSum = 98 - remainder
  if (checkSum < 10) {
    return `0${checkSum.toString(10)}`
  }
  return checkSum.toString(10)
}
