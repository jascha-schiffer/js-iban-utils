import {CountrySpecification, CountryCode} from './types'

export const countrySpecs: Record<CountryCode, CountrySpecification> = {
  AD: {
    length: 24,
    bbanRegexp: '^[0-9]{8}[A-Z0-9]{12}$',
    IBANRegistry: true,
    SEPA: true,
  },
  AE: {
    length: 23,
    bbanRegexp: '^[0-9]{3}[0-9]{16}$',
    IBANRegistry: true,
  },
  AL: {
    length: 28,
    bbanRegexp: '^[0-9]{8}[A-Z0-9]{16}$',
    IBANRegistry: true,
  },
  AO: {
    length: 25,
    bbanRegexp: '^[0-9]{21}$',
  },
  AT: {length: 20, bbanRegexp: '^[0-9]{16}$', IBANRegistry: true, SEPA: true},
  AX: {
    length: 18,
    bbanRegexp: '^[0-9]{14}$',
    IBANRegistry: true,
  },
  AZ: {
    length: 28,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{20}$',
    IBANRegistry: true,
  },
  BA: {
    length: 20,
    bbanRegexp: '^[0-9]{16}$',
    IBANRegistry: true,
  },
  BE: {length: 16, bbanRegexp: '^[0-9]{12}$', IBANRegistry: true, SEPA: true},
  BF: {
    length: 28,
    bbanRegexp: '^[A-Z0-9]{2}[0-9]{22}$',
  },
  BG: {
    length: 22,
    bbanRegexp: '^[A-Z]{4}[0-9]{6}[A-Z0-9]{8}$',
    IBANRegistry: true,
    SEPA: true,
  },
  BH: {
    length: 22,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{14}$',
    IBANRegistry: true,
  },
  BI: {
    length: 16,
    bbanRegexp: '^[0-9]{12}$',
  },
  BJ: {
    length: 28,
    bbanRegexp: '^[A-Z0-9]{2}[0-9]{22}$',
  },
  BL: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  BR: {
    length: 29,
    bbanRegexp: '^[0-9]{23}[A-Z]{1}[A-Z0-9]{1}$',
    IBANRegistry: true,
  },
  BY: {
    length: 28,
    bbanRegexp: '^[A-Z]{4}[0-9]{4}[A-Z0-9]{16}$',
    IBANRegistry: true,
  },
  CF: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  CG: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  CH: {
    length: 21,
    bbanRegexp: '^[0-9]{5}[A-Z0-9]{12}$',
    IBANRegistry: true,
    SEPA: true,
  },
  CI: {
    length: 28,
    bbanRegexp: '^[A-Z]{1}[0-9]{23}$',
  },
  CM: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  CR: {
    length: 22,
    bbanRegexp: '^[0-9]{18}$',
    IBANRegistry: true,
  },
  CV: {length: 25, bbanRegexp: '^[0-9]{21}$'},
  CY: {
    length: 28,
    bbanRegexp: '^[0-9]{8}[A-Z0-9]{16}$',
    IBANRegistry: true,
    SEPA: true,
  },
  CZ: {length: 24, bbanRegexp: '^[0-9]{20}$', IBANRegistry: true, SEPA: true},
  DE: {length: 22, bbanRegexp: '^[0-9]{18}$', IBANRegistry: true, SEPA: true},
  DJ: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  DK: {length: 18, bbanRegexp: '^[0-9]{14}$', IBANRegistry: true, SEPA: true},
  DO: {
    length: 28,
    bbanRegexp: '^[A-Z]{4}[0-9]{20}$',
    IBANRegistry: true,
  },
  DZ: {
    length: 26,
    bbanRegexp: '^[0-9]{22}$',
  },
  EE: {length: 20, bbanRegexp: '^[0-9]{16}$', IBANRegistry: true, SEPA: true},
  EG: {length: 29, bbanRegexp: '^[0-9]{25}', IBANRegistry: true},
  ES: {length: 24, bbanRegexp: '^[0-9]{20}$', IBANRegistry: true, SEPA: true},
  FI: {length: 18, bbanRegexp: '^[0-9]{14}$', IBANRegistry: true, SEPA: true},
  FO: {length: 18, bbanRegexp: '^[0-9]{14}$', IBANRegistry: true},
  FR: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
    SEPA: true,
  },
  GA: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  GB: {
    length: 22,
    bbanRegexp: '^[A-Z]{4}[0-9]{14}$',
    IBANRegistry: true,
    SEPA: true,
  },
  GE: {
    length: 22,
    bbanRegexp: '^[A-Z0-9]{2}[0-9]{16}$',
    IBANRegistry: true,
  },
  GF: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  GI: {
    length: 23,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{15}$',
    IBANRegistry: true,
    SEPA: true,
  },
  GL: {length: 18, bbanRegexp: '^[0-9]{14}$', IBANRegistry: true},
  GP: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  GQ: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  GR: {
    length: 27,
    bbanRegexp: '^[0-9]{7}[A-Z0-9]{16}$',
    IBANRegistry: true,
    SEPA: true,
  },
  GT: {
    length: 28,
    bbanRegexp: '^[A-Z0-9]{24}$',
    IBANRegistry: true,
  },
  GW: {
    length: 25,
    bbanRegexp: '^[A-Z]{2}[0-9]{19}$',
  },
  HN: {
    length: 28,
    bbanRegexp: '^[A-Z]{4}[0-9]{20}$',
  },
  HR: {length: 21, bbanRegexp: '^[0-9]{17}$', IBANRegistry: true, SEPA: true},
  HU: {length: 28, bbanRegexp: '^[0-9]{24}$', IBANRegistry: true, SEPA: true},
  IE: {
    length: 22,
    bbanRegexp: '^[A-Z0-9]{4}[0-9]{14}$',
    IBANRegistry: true,
    SEPA: true,
  },
  IL: {
    length: 23,
    bbanRegexp: '^[0-9]{19}$',
    IBANRegistry: true,
  },
  IQ: {
    length: 23,
    bbanRegexp: '^[A-Z]{4}[0-9]{15}$',
    IBANRegistry: true,
  },
  IR: {
    length: 26,
    bbanRegexp: '^[0-9]{22}$',
  },
  IS: {length: 26, bbanRegexp: '^[0-9]{22}$', IBANRegistry: true, SEPA: true},
  IT: {
    length: 27,
    bbanRegexp: '^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$',
    IBANRegistry: true,
    SEPA: true,
  },
  JO: {
    length: 30,
    bbanRegexp: '^[A-Z]{4}[0-9]{4}[A-Z0-9]{18}$',
    IBANRegistry: true,
  },
  KM: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  KW: {
    length: 30,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{22}$',
    IBANRegistry: true,
  },
  KZ: {
    length: 20,
    bbanRegexp: '^[0-9]{3}[A-Z0-9]{13}$',
    IBANRegistry: true,
  },
  LB: {
    length: 28,
    bbanRegexp: '^[0-9]{4}[A-Z0-9]{20}$',
    IBANRegistry: true,
  },
  LC: {
    length: 32,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{24}$',
    IBANRegistry: true,
  },
  LI: {
    length: 21,
    bbanRegexp: '^[0-9]{5}[A-Z0-9]{12}$',
    IBANRegistry: true,
    SEPA: true,
  },
  LT: {length: 20, bbanRegexp: '^[0-9]{16}$', IBANRegistry: true, SEPA: true},
  LU: {
    length: 20,
    bbanRegexp: '^[0-9]{3}[A-Z0-9]{13}$',
    IBANRegistry: true,
    SEPA: true,
  },
  LV: {
    length: 21,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{13}$',
    IBANRegistry: true,
    SEPA: true,
  },
  LY: {
    length: 25,
    bbanRegexp: '^[0-9]{21}$',
    IBANRegistry: true,
  },
  MA: {
    length: 28,
    bbanRegexp: '^[0-9]{24}$',
  },
  MC: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
    SEPA: true,
  },
  MD: {
    length: 24,
    bbanRegexp: '^[A-Z0-9]{2}[A-Z0-9]{18}$',
    IBANRegistry: true,
  },
  ME: {
    length: 22,
    bbanRegexp: '^[0-9]{18}$',
    IBANRegistry: true,
  },
  MF: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  MG: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  MK: {
    length: 19,
    bbanRegexp: '^[0-9]{3}[A-Z0-9]{10}[0-9]{2}$',
    IBANRegistry: true,
  },
  ML: {
    length: 28,
    bbanRegexp: '^[A-Z0-9]{2}[0-9]{22}$',
  },
  MQ: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  MR: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
    IBANRegistry: true,
  },
  MT: {
    length: 31,
    bbanRegexp: '^[A-Z]{4}[0-9]{5}[A-Z0-9]{18}$',
    IBANRegistry: true,
    SEPA: true,
  },
  MU: {
    length: 30,
    bbanRegexp: '^[A-Z]{4}[0-9]{19}[A-Z]{3}$',
    IBANRegistry: true,
  },
  MZ: {
    length: 25,
    bbanRegexp: '^[0-9]{21}$',
  },
  NC: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  NE: {
    length: 28,
    bbanRegexp: '^[A-Z]{2}[0-9]{22}$',
  },
  NI: {
    length: 32,
    bbanRegexp: '^[A-Z]{4}[0-9]{24}$',
  },
  NL: {
    length: 18,
    bbanRegexp: '^[A-Z]{4}[0-9]{10}$',
    IBANRegistry: true,
    SEPA: true,
  },
  NO: {length: 15, bbanRegexp: '^[0-9]{11}$', IBANRegistry: true, SEPA: true},
  PF: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  PK: {
    length: 24,
    bbanRegexp: '^[A-Z0-9]{4}[0-9]{16}$',
    IBANRegistry: true,
  },
  PL: {length: 28, bbanRegexp: '^[0-9]{24}$', IBANRegistry: true, SEPA: true},
  PM: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  PS: {
    length: 29,
    bbanRegexp: '^[A-Z0-9]{4}[0-9]{21}$',
    IBANRegistry: true,
  },
  PT: {length: 25, bbanRegexp: '^[0-9]{21}$', IBANRegistry: true, SEPA: true},
  QA: {
    length: 29,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{21}$',
    IBANRegistry: true,
  },
  RE: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  RO: {
    length: 24,
    bbanRegexp: '^[A-Z]{4}[A-Z0-9]{16}$',
    IBANRegistry: true,
    SEPA: true,
  },
  RS: {
    length: 22,
    bbanRegexp: '^[0-9]{18}$',
    IBANRegistry: true,
  },
  SA: {
    length: 24,
    bbanRegexp: '^[0-9]{2}[A-Z0-9]{18}$',
    IBANRegistry: true,
  },
  SC: {
    length: 31,
    bbanRegexp: '^[A-Z]{4}[0-9]{20}[A-Z]{3}$',
    IBANRegistry: true,
  },
  SE: {length: 24, bbanRegexp: '^[0-9]{20}$', IBANRegistry: true, SEPA: true},
  SI: {length: 19, bbanRegexp: '^[0-9]{15}$', IBANRegistry: true, SEPA: true},
  SK: {length: 24, bbanRegexp: '^[0-9]{20}$', IBANRegistry: true, SEPA: true},
  SM: {
    length: 27,
    bbanRegexp: '^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$',
    IBANRegistry: true,
    SEPA: true,
  },
  SN: {
    length: 28,
    bbanRegexp: '^[A-Z]{1}[0-9]{23}$',
  },
  ST: {
    length: 25,
    bbanRegexp: '^[0-9]{21}$',
    IBANRegistry: true,
  },
  SV: {
    length: 28,
    bbanRegexp: '^[A-Z]{4}[0-9]{20}$',
    IBANRegistry: true,
  },
  TD: {
    length: 27,
    bbanRegexp: '^[0-9]{23}$',
  },
  TF: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  TG: {
    length: 28,
    bbanRegexp: '^[A-Z]{2}[0-9]{22}$',
  },
  TL: {
    length: 23,
    bbanRegexp: '^[0-9]{19}$',
    IBANRegistry: true,
  },
  TN: {
    length: 24,
    bbanRegexp: '^[0-9]{20}$',
    IBANRegistry: true,
  },
  TR: {
    length: 26,
    bbanRegexp: '^[0-9]{5}[A-Z0-9]{17}$',
    IBANRegistry: true,
  },
  UA: {
    length: 29,
    bbanRegexp: '^[0-9]{6}[A-Z0-9]{19}$',
    IBANRegistry: true,
  },
  VA: {length: 22, bbanRegexp: '^[0-9]{18}', IBANRegistry: true},
  VG: {
    length: 24,
    bbanRegexp: '^[A-Z0-9]{4}[0-9]{16}$',
    IBANRegistry: true,
  },
  WF: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
  XK: {
    length: 20,
    bbanRegexp: '^[0-9]{16}$',
    IBANRegistry: true,
  },
  YT: {
    length: 27,
    bbanRegexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
    IBANRegistry: true,
  },
}
