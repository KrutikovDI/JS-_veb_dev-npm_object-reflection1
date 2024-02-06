export default function orderByProps(object, sampl) {
  let listKeys = Object.keys(object).sort(); // можно получить свойства объекта for in
    let i = 0;
    while (i < sampl.length) {
        let index = listKeys.indexOf(sampl[i]);
        if (index == -1) {
            throw new Error("Несуществующее свойство объекта")
        } else {
            listKeys.splice(index, 1);
            i++;
        }
    }
    const listKeysSort = sampl.concat(listKeys);
    const answer = [];
    for (let index = 0; index < listKeysSort.length; index++) {
        let item = {'key': listKeysSort[index], 'value': object[listKeysSort[index]]};
        answer.push(item);
    }
      return answer;
  }