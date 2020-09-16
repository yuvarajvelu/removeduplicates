//Initial data
const myLinkedList = [
    {
        "item_id": 1,
        "data": "12",
        "next_item_id": 2
    },
    {
        "item_id": 2,
        "data": "14",
        "next_item_id": 3
    },
    {
        "item_id": 3,
        "data": "14",
        "next_item_id": 4
    },
  {
        "item_id": 4,
        "data": "18",
        "next_item_id": null
    },
]
//function to remove duplicates
const removeDuplicates = myLinkedList.reduce((finalList, list) => {
  //if finalList is null push the first value or else search the finalList if it contains same value as the list, if not push the list value
  if(finalList.length > 0 && !(finalList.find(i => i.data === list.data))) {
    const previous = finalList[finalList.length - 1] 
    previous.next_item_id = list.item_id //Inorder to change the previous list to point to the next item
    finalList.push(list)
  } else if(finalList.length === 0) {
    finalList.push(list)
  }
  return finalList
},[])

//console.log(removeDuplicates)