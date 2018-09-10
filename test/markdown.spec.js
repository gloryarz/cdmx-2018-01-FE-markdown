const { isAnMDFile, readMDFile, getData, fetching, broken, stats } = require('../app');

describe('isAnMDFile, verifica que sea un archivo .md', () => {
  test('README.MD es un archivo md', () => {
    expect(isAnMDFile('README.md')).toBeTruthy();
  });
  test('README.MD es un archivo md', () => {
    expect(isAnMDFile('hola')).toBe('No es un archivo .md');
  });
});
