/* eslint-disable max-classes-per-file */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable max-len */
/*
  1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui

  2. Sukurkite sąrašo klasę List.
    * Klasė turi privačias turėti savybes
      * head -> nuoroda į sąrašo pirmajį mazgą
      * taip -> nuoroda į sąrašo paskutinijė mazgą
    * Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
    jį savybėms List.head ir List.tail
    Konstruktoriaus ListNode tipo parametras neprivalomas. Neperdavus parametro, List klasės objekto savybės tail ir head turi būti null

  3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             d -> a -> b -> c

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  4. Sukurkite metodą pridėti sąrašo elementui į sąrašo galą.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             a -> b -> c -> d

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją - callback
  su kiekvieno mazgo reikšme pradedant List.head ir baigiant List.tail
    * ForEachCallback tipas: (value: T) => void
    * List.forEach tipas: ( callback: ForEachCallback) => void)
*/

// ↓↓↓ Tipai ↓↓↓
type ForEachCallback<T> = (value: T) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓
class ListNode<T> {
  constructor(
    public data: T,
    public next: ListNode<T> | null = null,
  ) { }
}
// 1.
class List<Type> {
  // 2.
  private head: ListNode<Type> | null;

  private tail: ListNode<Type> | null;

  // 2.
  constructor(data?: Type) {
    if (data === undefined) {
      this.head = null;
      this.tail = null;
    } else {
      const newNode = new ListNode(data);
      this.head = newNode;
      this.tail = newNode;
    }
  }

  // 3.
  public unshift = (data: Type): void => {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  // 4.
  public push = (data: Type): void => {
    const newNode = new ListNode(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  // 5.
  public forEach = (callback: ForEachCallback<Type>): void => {
    for (let currNode = this.head; currNode !== null; currNode = currNode.next) {
      callback(currNode.data);
    }

    // let currNode = this.head;

    // while (currNode !== null) {
    // callback(currNode.data);
    //   currNode = currNode.next;
    // }
  };
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓
const stringList = new List<string>();
const numberList = new List(5);

// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
  const stringNode1: ListNode<string> = { data: 'labas', next: null };
  const stringNode2: ListNode<string> = { data: 'vakaras', next: stringNode1 };
  console.log({
    listNode1: stringNode1,
    listNode2: stringNode2,
  });
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
  console.log('Tučias string sąrašas');
  console.log(stringList);

  console.log('number sąrašas');
  console.log(numberList);
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
  console.log('String sąrašas');
  console.log(JSON.parse(JSON.stringify(stringList)));

  console.log('Pridedamas 1', 'pirmas');
  stringList.unshift('pirmas');
  console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(stringList)));

  console.log('Pridedamas 2', 'antras');
  stringList.unshift('antras');
  console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(stringList)));

  console.log('Pridedamas Mazgas 3', 'trečias');
  stringList.unshift('trečias');
  console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(stringList)));
}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
  console.log('Number sąrašas');
  console.log(JSON.parse(JSON.stringify(numberList)));

  console.log('Pridedamas Mazgas 1', 1);
  numberList.push(1);
  console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(numberList)));

  console.log('Pridedamas Mazgas 2', 2);
  numberList.push(2);
  console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(numberList)));

  console.log('Pridedamas Mazgas 3', 3);
  numberList.push(3);
  console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(numberList)));
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
  console.log('string sąrašo spausdinimas');
  stringList.forEach((str) => console.log(str));

  const stringArr: string[] = [];
  const putInStringArr = (x: number): void => {
    stringArr.push(String(x));
  };

  console.log('number sąrašo spausdinimas');
  numberList.forEach(putInStringArr);
  const numberListStringRepresentation: string = stringArr.join(' → ');
  console.log(numberListStringRepresentation);
}
console.groupEnd();
