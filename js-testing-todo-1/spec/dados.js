
describe("Dados", function(){
  var tiradaDados;
  beforeEach(function(){
    tiradaDados = parseInt(throwDice());
  });

  it("DICE not null", function(){
    expect(tiradaDados != null).toBe(true);
  })

  it("DICE is integer", function(){
    expect(isNaN(parseInt(tiradaDados))).toBe(false);
  });

  it("DICE > 0", function(){
    expect(tiradaDados).toBeGreaterThan(0);
  });

  it("DICE <= 6", function(){
    expect(tiradaDados).toBeLessThan(7);
  });


  it("Truly random", function(){
      var limite = 1000;
      var cant1 = 0;
      var cant2 = 0;
      var cant3 = 0;
      var cant4 = 0;
      var cant5 = 0;
      var cant6 = 0;
      var tiradaX;
      for(i = 0; i<limite; i++) {
        tiradaX = throwDice();
        switch (tiradaX) {
          case 1: cant1++; break;
          case 2: cant2++; break;
          case 3: cant3++; break;
          case 4: cant4++; break;
          case 5: cant5++; break;
          case 6: cant6++; break;
        }
      }
      console.log('COMO REFERENCIA: 1/6 = '+ 1/6);
      console.log('COMO REFERENCIA: 1/5 = '+ 1/5);
      console.log('COMO REFERENCIA: 1/7 = '+ 1/7);
      console.log(cant1 +' para 1: '+ cant1/limite);
      console.log(cant2 +' para 2: '+ cant2/limite);
      console.log(cant3 +' para 3: '+ cant3/limite);
      console.log(cant4 +' para 4: '+ cant4/limite);
      console.log(cant5 +' para 5: '+ cant5/limite);
      console.log(cant6 +' para 6: '+ cant6/limite);
      var prob1 = (cant1/limite);
      var prob2 = (cant2/limite);
      var prob3 = (cant3/limite);
      var prob4 = (cant4/limite);
      var prob5 = (cant5/limite);
      var prob6 = (cant6/limite);
      expect(
          ( prob1 < (1/5) && prob1 > (1/7) ) &&
          ( prob2 < (1/5) && prob2 > (1/7) ) &&
          ( prob3 < (1/5) && prob3 > (1/7) ) &&
          ( prob4 < (1/5) && prob4 > (1/7) ) &&
          ( prob5 < (1/5) && prob5 > (1/7) ) &&
          ( prob6 < (1/5) && prob6 > (1/7) )
        ).toBe(true);
    });

/*

custom match and use it for some test of function
*/
});
