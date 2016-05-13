import {sum} from './a'


let xs, total, token

class Token {
  constructor (type, lexeme) {
    this._type   = type
    this._lexeme = lexeme
  }

  get type () {
    return this._type 
  }

  get lexeme () {
    return this._lexeme 
  }
}


xs  = [1, 2, 3, 4, 5]
total = sum(null)
token = new Token('Text', 'some text content')

console.log(`total of xs is: ${total}`)
