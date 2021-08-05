export const formatMachineReadable = (iban: string | undefined | null): string | null => {
  if (typeof iban !== 'string') {
    return null
  }
  return iban.replace(/[^\d\w]/g, '').toUpperCase()
}

export const formatHumanReadable = (
  iban: string | undefined | null,
  separator = ' '
): string | null => {
  if (typeof iban !== 'string') {
    return null
  }
  const cleanIban = formatMachineReadable(iban)
  /* istanbul ignore if */
  if (cleanIban === null) {
    return null
  }
  return cleanIban.replace(/(.{4})(?!$)/g, `$1${separator}`)
}
