import {formatMachineReadable, formatHumanReadable} from './formatter'

describe('formatter', () => {
  describe('formatMachineReadable', () => {
    test.each`
      iban                                    | result
      ${null}                                 | ${null}
      ${'AL47 2121 1009 0000 0002 3569 8741'} | ${'AL47212110090000000235698741'}
    `('expect formatMachineReadable($iban) to be $result', ({iban, result}) => {
      expect(formatMachineReadable(iban)).toEqual(result)
    })
  })

  describe('formatHumanReadable', () => {
    test.each`
      iban                              | result
      ${null}                           | ${null}
      ${'AL47212110090000000235698741'} | ${'AL47 2121 1009 0000 0002 3569 8741'}
    `('expect formatHumanReadable($iban) to be $result', ({iban, result}) => {
      expect(formatHumanReadable(iban)).toEqual(result)
    })
  })
})
