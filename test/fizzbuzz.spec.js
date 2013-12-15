describe('fizzbuzz', function() {
  it('3を入力したらFizzが返る', function() {
    expect(fizzbuzz(3)).to.be('Fizz');
  });

  it('5を入力したらBuzzが返る', function() {
    expect(fizzbuzz(5)).to.be('Buzz');
  });

  it('15を入力したらFizzBuzzが返る', function() {
    expect(fizzbuzz(15)).to.be('FizzBuzz');
  });

  it('1を入力したら1が返る', function() {
    expect(fizzbuzz(1)).to.be(1);
  });
});
