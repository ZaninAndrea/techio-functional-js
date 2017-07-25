const buildTree = (list, parent) =>
    {
        var node = {}
        list
            .filter( x =>x.parent===parent)
            .forEach( x =>{
                node[x.id]=buildTree(list,x.id)
            })
        return node
    }

list = [
  { "id": "Grandad", "parent": null },
  { "id": "Dad", "parent": "Grandad" },
  { "id": "You", "parent": "Dad" },
  { "id": "Son", "parent": "You" },
  { "id": "Daughter", "parent": "You" },
  { "id": "Brother", "parent": "Dad" },
  { "id": "Nephew", "parent": "Brother" },
  { "id": "Niece", "parent": "Brother" },
  { "id": "Sister", "parent": "Dad" },
  { "id": "Uncle", "parent": "Grandad" },
  { "id": "Cousin", "parent": "Uncle" }
]

console.log(JSON.stringify(buildTree(list,null), null, 2));

// { autofold
module.exports = {
  buildTree: buildTree
};
// }
