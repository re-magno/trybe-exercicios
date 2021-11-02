it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();nm
    } catch (error) {
      done(error);
    }
  });
});