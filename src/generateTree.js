export default function generateTree() {
  let tree = {
    0: {
      id: 0,
      counter: 0,
      childIds: []
    }
  }

  for (let i = 1; i < 1; i++) {
    let parentId = 0
    tree[i] = {
      id: i,
      counter: 0,
      childIds: []
    }
    console.log(tree[i]);
    tree[parentId].childIds.push(i)
  }

  return tree
}

