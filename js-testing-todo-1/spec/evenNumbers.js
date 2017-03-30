describe("Numero Par", function(){
    var evenNumber, oddNumber;
    beforeEach(function(){
      evenNumber = 4;
      oddNumber = 7;
    });
    it("Debe devolver TRUE para un número par", function(){
      expect(isEven(evenNumber)).toBe(true);
    })
})

describe("Numero Impar", function(){
    var evenNumber, oddNumber;
    beforeEach(function(){
      evenNumber = 4;
      oddNumber = 7;
    });
    it("Debe devolver TRUE para un número impar", function(){
      expect(isOdd(oddNumber)).toBe(true);
    })
})
