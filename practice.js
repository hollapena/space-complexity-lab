class Tipper{
    constructor(){
      this.cache = {}
    }
    tipAmt(num){
      if(this.cache[num]){
          console.log('Fetching from cache')
        return this.cache[num]
    } else {
        console.log('Calculating Result')
        let tipAnswer = num * 0.15
        this.cache[num] = tipAnswer
        return tipAnswer
  }}}

  let tipCalculator = new Tipper
  console.log(tipCalculator.tipAmt(10))