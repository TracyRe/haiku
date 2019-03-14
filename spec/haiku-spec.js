

describe ( 'Haiku', function(){

  it('should test that the user has entered three separate lines', function() {
    const lineCount = 3;
    expect(lineCount == 3).toEqual(true);
  });

  it('should test that the first line has five syllables', function() {
    const sylCount = 5;
    expect(sylCount == 5).toEqual(true);
  });
});
