const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test('teste igual a TESTE', (done) =>{
    uppercase('teste', (maiusculo) => {
        try {
            expect(maiusculo).toBe('TESTE');
            done();
        }catch (error){
            done(error);
        }
    })
  })