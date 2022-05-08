function classnames(...input: Array<string | boolean | undefined>): string {
  return input.filter(Boolean).join(' ');
}

export default classnames;
