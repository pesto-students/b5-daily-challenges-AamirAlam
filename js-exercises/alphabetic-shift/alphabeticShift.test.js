import { alphabeticShift } from './alphabeticShift';

describe('Alphabetic Shift Test Cases', () => {
  it('returns a shifted string', () => {
    expect(alphabeticShift('Pseudopseudohypoparathyroidism'))
      .toEqual('Qtfvepqtfvepizqpqbsbuizspjejtn');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Antidisestablishmentarianism'))
      .toEqual('Boujejtftubcmjtinfoubsjbojtn');

    expect(alphabeticShift('supercalifragilisticexpialidocious'))
      .toEqual('tvqfsdbmjgsbhjmjtujdfyqjbmjepdjpvt');
  });

  it('handle Z and z in the string', () => {
    expect(alphabeticShift('zseudopseudohypoparathyroidisZ'))
      .toEqual('atfvepqtfvepizqpqbsbuizspjejtA')
  });

  it('It should throw exeption on invalid inputs', () => {
    expect(() => { alphabeticShift([]) })
      .toThrow()
    
    expect(() => { alphabeticShift(null) })
      .toThrow()
    
    expect(() => { alphabeticShift(undefined) })
      .toThrow()
    
    expect(() => { alphabeticShift({}) })
      .toThrow()

  });
});
