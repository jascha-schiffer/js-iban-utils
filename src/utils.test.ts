import {isSEPACountry} from './utils'

describe('utils', () => {
  describe('isSEPACountry', () => {
    test('handles invalid input', () => {
      expect(isSEPACountry(null)).toBeFalsy()
    })

    test('handles sepa country', () => {
      expect(isSEPACountry('DE')).toBeTruthy()
    })

    test('handles lower cased sepa country', () => {
      expect(isSEPACountry('de')).toBeTruthy()
    })

    test('handles non sepa country', () => {
      expect(isSEPACountry('US')).toBeFalsy()
    })
  })
})
