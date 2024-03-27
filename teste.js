let i = 13, sum = 0, k = 0
while (k < i) {
  k++
  sum+=k
}
console.log('1:')
console.log('\t',sum)

function isInFibonacci(n){
  if(n == 1 || n == 0){
    return true
  }
  let s1 = 0, s2 = 1, sum = 0
  while(sum < n){
    sum = s1 + s2
    s1 = s2
    s2 = sum
  }
  if(sum == n){
    return true
  }
  return false
}

console.log('2:')
console.log('\tfibo 6: ',isInFibonacci(6))
console.log('\tfibo 8: ',isInFibonacci(8))

let ex3 = "3)\n\ta) soma 2 ao atual -> 9\n\tb) atual*2 -> 128\n\tc) 1 3 5 7  9 -> 47\n\td) ?128\n\te) 13\n\tf) ? 20"
console.log(ex3)

// 3
/*
a) soma 2 ao atual -> 9
b) atual*2 -> 128
c) 1 3 5 7  9 -> 47
d) ?128
e) 13
f) ? 20
*/

/*
  4

  3 switches each to a diff room
  ligo 1º
  |Z|Y|X| // se ligado já sei que 1-> X se não 1->Y || 1->Z
  ligo 2º
  |Z|Y|X| // vou em outra sala, se estiver ligado sei que é 2->Y se não Z ou X
  se tudo sim: 1->X,2->Y,3->Z,
  se tudo não: 1->Z, 2->X, 3->Y,
  sim e não: 1->X,2->Z,3->Y,
  não e sim: 1->Z, 2->Y,3->X
*/

let ex4 = "4)\n\t3 switches each to a diff room\n\tligo 1º\n\t|Z|Y|X| // se ligado já sei que 1-> X se não 1->Y || 1->Z\n\tligo 2º\n\t|Z|Y|X| // vou em outra sala, se estiver ligado sei que é 2->Y se não Z ou X\n\tse tudo sim: 1->X,2->Y,3->Z,\n\tse tudo não: 1->Z, 2->X, 3->Y,\n\tsim e não: 1->X,2->Z,3->Y,\n\tnão e sim: 1->Z, 2->Y,3->X"
console.log(ex4)

//5
/*
(ps: engraçadamente vi como resolver isso hoje no linkedin com O(1) na memória em Python: https://www.linkedin.com/posts/augusto-galego-60a0b1160_invertendo-uma-string-com-espa%C3%A7o-constante-activity-7178449078001811458-NCSu?utm_source=share&utm_medium=member_desktop)
*/
function inverterString(string){
  let new_string = ''
  let end = string.length
  while(end>=0){
    new_string = new_string.concat('',string.charAt(end))
    end--
  }
  return new_string
}
// tentei fazer algo semelhante ao do link do linkedin, demorei e não consegui :(
console.log('5)\n\t',inverterString("hello"))
