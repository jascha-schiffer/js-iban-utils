import {isValidIBAN} from './validators'

describe('isValidIBAN', () => {
  describe('verify expected results', () => {
    test.each`
      iban
      ${'AL47212110090000000235698741'}
      ${'AO44123412341234123412341'}
      ${'AT611904300234573201'}
      ${'BF42BF0840101300463574000390'}
      ${'BI33123412341234'}
      ${'BJ83A12312341234123412341234'}
      ${'BY13NBRB3600900000002Z00AB00'}
      ${'CF4220001000010120069700160'}
      ${'CG3930011000101013451300019'}
      ${'CI77A12312341234123412341234'}
      ${'CM1512341234123412341234123'}
      ${'CR25010200009074883572'}
      ${'CV05123412341234123412341'}
      ${'CV64000300008885500810176'}
      ${'DE89370400440532013000'}
      ${'DJ2110002010010409943020008'}
      ${'DZ580002100001113000000570'}
      ${'EG380019000500000000263180002'}
      ${'ES9121000418450200051332'}
      ${'GA2140021010032001890020126'}
      ${'GB29NWBK60161331926819'}
      ${'GL8964710001000206'}
      ${'GQ7050002001003715228190196'}
      ${'GT82TRAJ01020000001210029690'}
      ${'GW04GW1430010181800637601'}
      ${'HN54PISA00000000000000123124'}
      ${'HR1210010051863000160'}
      ${'IQ98NBIQ850123456789012'}
      ${'IR081234123412341234123412'}
      ${'JO94CBJO0010000000000131000302'}
      ${'KM4600005000010010904400137'}
      ${'LY83002048000020100120361'}
      ${'MA64011519000001205000534921'}
      ${'MG4012341234123412341234123'}
      ${'ML75A12312341234123412341234'}
      ${'MZ97123412341234123412341'}
      ${'NE58NE0380100100130305000268'}
      ${'NI92BAMC000000000000000003123123'}
      ${'NL91ABNA0417164300'}
      ${'PS92PALS000000000400123456702'}
      ${'RS35260005601001611379'}
      ${'SC52BAHL01031234567890123456USD'}
      ${'SN15A12312341234123412341234'}
      ${'SV62CENR00000000000000700025'}
      ${'SV62CENR00000000000000700025'}
      ${'TD8960002000010271091600153'}
      ${'TG53TG0090604310346500400070'}
      ${'TL380080012345678910157'}
      ${'UA213996220000026007233566001'}
      ${'VA59001123000012345678'}
    `('iban $iban is valid', ({iban}) => {
      expect(isValidIBAN(iban)).toBeTruthy()
    })

    test.each`
      iban
      ${'GB00HLFX11016111455365'}
      ${'GB2LABBY09012857201707'}
      ${'GL89647100010002067'}
      ${'IQ98 NBIQ 8501 2345 6789 012'}
      ${'NL91ABNA0517164300'}
      ${'RS36260005601001611379'}
      ${'TL380080012345688910157'}
      ${'US380080012345688910157'}
      ${null}
    `('iban $iban is invalid', ({iban}) => {
      expect(isValidIBAN(iban)).toBeFalsy()
    })
  })
})
