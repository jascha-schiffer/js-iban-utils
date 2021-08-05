import dataDump1 from './data-dumps/dump-1'
import {getSpecificationForCountry, isSEPACountry} from './utils'
import {formatMachineReadable} from './formatter'
import {isValidIBAN} from './validators'

describe('data-consistency', () => {
  describe('dataDump1', () => {
    for (let i = 0; i < dataDump1.length; i += 1) {
      const {countryName, countryCode, isSepa, length, exampleIBAN} = dataDump1[i] as {
        countryName: string
        countryCode: string
        isSepa: boolean
        length: string
        exampleIBAN: string
      }
      test(`data for ${countryName} (${countryCode}) is consistent`, () => {
        const spec = getSpecificationForCountry(countryCode)
        expect(spec).toBeTruthy()

        expect(isSEPACountry(countryCode)).toEqual(isSepa)
        expect(spec?.length).toEqual(parseInt(length, 10))

        if (exampleIBAN) {
          expect(isValidIBAN(formatMachineReadable(exampleIBAN))).toBeTruthy()
        }
      })
    }
  })
})
