### [array-with-modal-filter-map](#array-with-modal-filter-map)

<br>
<br>

---

<br>

# 🥭 Arrays

<br>

#### An array is like a shelf where we store data

- You cannot reassign array variable, so we will be using the const keyword for that reason, since const is a not assignable variable, **however** the elements inside the array can be reassigned as they are **MUTABLE**

<br>

```javascript
const myArray = [];
```

<br>

#### We can add elements to the array by referencing the position they are in, in the array

```javascript
// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
```

<br>

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
console.log(myArray);
```

##### result

- IN the result you can see the length of the array, and the elements inside of the array

```javascript
(3) ['banana', 1985, false]
0: "banana"
1: 1985
2: false
length: 3
[[Prototype]]: Array(0)
```

<br>

#### lets grab the last element of the array length, in this case will be the 'false' which is at position 2

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
console.log(myArray[myArray.length - 1]);
```

##### result

> false

<br>
<br>

---

<br>

# .PUSH 🥬

- WIll add a new item add the end of the array

#### HOW do we add more data to the array?

```javascript
myArray.push("school");
```

##### result

- You can see that the array has now **4 ITEMS**

```javascript
(4) ['banana', 1985, false, 'school']
0: "banana"
1: 1985
2: false
3: "school"
length: 4
[[Prototype]]: Array(0)
```

<br>
<br>

---

<br>

# .POP 🍊

#### HOW do we remove data from the array?

- Pop will remove the last item added to the array

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
// PUSH
myArray.push("school");
//
// POP
myArray.pop();
//
console.log(myArray);
```

<br>

##### result

- So as you can see we have 3 ITEMS again

```javascript
(3) ['banana', 1985, false]
0: "banana"
1: 1985
2: false
length: 3
[[Prototype]]: Array(0)
```

<br>

#### To be sure of what we just removed add the following

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
// PUSH
myArray.push("school");
//
// POP
// myArray.pop();
const lastItem = myArray.pop();
//
console.log(lastItem);
```

##### result

- here we see that it s 'the school' that we just removed

> **school**

<br>

<br>
<br>

---

<br>

# .UNSHIFT 🍊

- Unshift will push another element to the array but instead of pushing it at the end, **it will push it in the beginning**

<br>

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
// PUSH / UNSHIFT
myArray.unshift("apple 👍 ");
//
// POP

//
console.log(myArray);
```

<br>

##### result

```javascript
(4) ['banana 👍 ', 'banana', 1985, false]
0: "banana 👍 "
1: "banana"
2: 1985
3: false
length: 4
[[Prototype]]: Array(0)
```

#### now lets remove from the front of the array

# .SHIFT 🍊

- SHIFT will remove the first item of the array, and will also remove a first item added with push

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
// PUSH / UNSHIFT
myArray.shift();
//
// POP

//
console.log(myArray);
```

##### result

- Here you see that it removed the one we added with push , and the one we added in the beginning of the exercise.

```javascript
2) [1985, false]
0: 1985
1: false
length: 2[[Prototype]]:
Array(0)
```

#### Important to notice

> SINCE we removed 2 elemnts from the array, we must to check if the positions of the elements also changed

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
const firstItem = myArray.shift();

//
console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);
```

##### result

- false is now at position 1 and not at position 3

```javascript
(2) [1985, false]
0: 1985
1: false
length: 2[[Prototype]]: Array(0)
//
//
  false
```

<br>
<br>

---

<br>

### .PUSH 🍊

- WIll add a new item add the end of the array

### .POP 🍊

- Pop will remove the last item added to the array

### .UNSHIFT 🍊

- Unshift will push another element to the array but instead of pushing it at the end, **it will push it in the beginning**

### .SHIFT 🍊

- SHIFT will remove the first item of the array, and will also remove a first item added with push

<br>
<br>

---

<br>

### What if I want to add something in the Middle of the Array? There are a couple of ways of doing it.

<br>

#### 1. delete 🍊

- **delete** , will delete the item from the array, will keep the position as **empty**, and when you will try to console.log it, it will show **undefined**. **delete** is not recommended but it s good to know

<br>

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
delete myArray[1];

//

console.log(myArray);
```

#### result

- As you can see, we have a **empty** instead of **1985**

```javascript
(3) ['banana', empty, false]
0: "banana"
2: false
length: 3
[[Prototype]]: Array(0)
```

<br>
<br>

### Instead of directly 'deleting' an element from an array with <u>delete</u>, we can just use a method, this method will allows to remove and replace elements from an array

<br>

#### 2. SPLICE 🍊

- Splice is used to **delete or replace**

- With splice we will define where we want to begin **(to remove)**

- here we tell it that **we want to delete 1 item from the array and at that position 1**

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
myArray.splice(1, 1);

//

console.log(myArray);
```

#### result

```javascript
(2) ['banana', false]
0: "banana"
1: falselength: 2
[[Prototype]]: Array(0)
```

<br>

#### What about replacing at a certain position and add the replacement instantly

<br>

- (1, 1, 42); we want to delete 1 item from the array and at position 1, we want to replace it with 'rainbow' for example ✋

```javascript
const myArray = [];

// add elements to an array
myArray[0] = "banana";
myArray[1] = 1985;
myArray[2] = false;
//
myArray.splice(1, 1, "rainbow");

//

console.log(myArray);
```

##### result

```javascript
(3) ['banana', 'rainbow', false]
0: "banana"
1: "rainbow"
2: false
length: 3
[[Prototype]]: Array(0)
```

<br>
<br>

---

#### SLICE 🍊

- The **.slice** method accepts starting and ending position parameters **.slice(5, 8)**, a bit like the **.splice**

> (1, 1, 42); we want to start at item 1 (starting from 0) from the array and end at position 5,

```javascript
const myArray = ["A", "B", "C", "D", "E", "F", "G"];

const newArr = myArray.slice(2);
console.log(newArr);
```

#### result

```javascript
['C', 'D', 'E']
0: "C"
1: "D"
2: "E"
length: 3[[Prototype]]: Array(0)
```

<br>

#### As you can see we are only reaching the C because its at position 2, then we are reaching until the 'e' because its one position before 5 (after the 5 all will be excluded), which in this example is the F

<br>
<br>

---

<br>

#### .REVERSE 🍊

- **The reverse() method reverses the order** of the elements in an array.

<br>

```javascript
const myArray = ["A", "B", "C", "D", "E", "F", "G"];

myArray.reverse();
console.log(myArray;
```

##### result

```javascript
(7) ['G', 'F', 'E', 'D', 'C', 'B', 'A']
0: "G"
1: "F"
2: "E"
3: "D"
4: "C"
5: "B"
6: "A"
length: 7
[[Prototype]]: Array(0
```

<br>
<br>

---

<br>

#### .JOIN 🍊

<br>

- **The join() method returns an array as a string.**

- The join() method does not change the original array.

**Any separator can be specified. The default is comma (,).**

<br>

```javascript
const myArray = ["A", "B", "C", "D", "E", "F", "G"];

const newArr = myArray.join();
console.log(newArr);
```

##### result

```javascript
// before
"A", "B", "C", "D", "E", "F", "G";

// after
A, B, C, D, E, F, G;
```

##### As you can see the example above, all of the items in the array are now a single string

<br>

#### Other examples

```javascript
const myArray = ["A", "B", "C", "D", "E", "F", "G"];

const newArr = myArray.join("~");
console.log(newArr);
```

##### result

```javascript
A~B~C~D~E~F~G
```

<br>

---

<br>

```javascript
const myArray = ["A", "B", "C", "D", "E", "F", "G"];

const newArr = myArray.join(" wow ");
console.log(newArr);
```

##### result

```javascript
A wow B wow C wow D wow E wow F wow G
```

<br>

#### .JOIN & .SPLIT 🍊

<br>

- The **.split** method, split the string wherever the character we provided occurs, and returns the result in multiple strings in an array

#### Now lets transform each letter inside the array, in an individual string again

```javascript
const myArray = ["A", "B", "C", "D", "E", "F", "G"];

const newArr = myArray.join();

const newString = newArr.split(",");

//
console.log(newString);
```

##### result

```javascript
(7) ['A', 'B', 'C', 'D', 'E', 'F', 'G']
0: "A"
1: "B"
2: "C"
3: "D"
4: "E"
5: "F"
6: "G"
length: 7
[[Prototype]]: Array(0)
```

<br>
<br>

---

<br>

#### .CONCAT 🍊

- Concat method, will join 2 existing arrays and transform it to 1

```javascript
const arr1 = ["A", "B", "C"];
const arr2 = ["D", "E", "F", "G"];

const wholeArr = arr1.concat(arr2);

console.log(wholeArr);
```

#### result

```javascript
7) ['A', 'B', 'C', 'D', 'E', 'F', 'G']
0: "A"
1: "B"
2: "C"
3: "D"
4: "E"
5: "F"
6: "G"
length: 7
[[Prototype]]: Array(0)
```

<br>

##### But there is NEWER way to do this, we can use the <u>SPREAD OPERATOR </u> instead of the concat

<br>

### SPREAD OPERATOR 🍊

<br>

- The **spread operator is 3 dots, like so ' ... '**

- What the **spread operator** will do in the following example, is practically join the 2 arrays

```javascript
const arr1 = ["A", "B", "C"];
const arr2 = ["D", "E", "F", "G"];

const wholeArr = [...arr1, ...arr2];

console.log(wholeArr);
```

#### result

```javascript
) ['A', 'B', 'C', 'D', 'E', 'F', 'G']
0: "A"
1: "B"
2: "C"
3: "D"
4: "E"
5: "F"
6: "G"
length: 7
[[Prototype]]: Array(0)
```

#### but what happens of we dont add the 3 dots of the spread operator?

```javascript
const arr1 = ["A", "B", "C"];
const arr2 = ["D", "E", "F", "G"];

const wholeArr = [arr1, arr2];

console.log(wholeArr);
```

##### result

```javascript
(2) [Array(3), Array(4)]
0: (3) ['A', 'B', 'C']
1: (4) ['D', 'E', 'F', 'G']
length: 2
[[Prototype]]: Array(0)
```

<br>
<br>
<br>

---

<br>
<br>

## NESTED ARRAYS 🍊

<br>

#### Until now we have been handling <u>single dimensional </u> arrays, so its time to see how <u>multidimensional</u> arrays work

```javascript
const equipA = ["baseball", "football", "volleyball"];
const equipB = ["basketball", "golf balls", "tennis balls"];

//
//
const clothesA = ["tank tops", "t-shirts", "jerseys"];
const clothesB = ["sweat tops", "sweat pants", "hoodies"];
```

#### In this scenario if we want to access 'football' or 'tshirts, we could do it like so:

```javascript
console.log(equipA[1]);
//or
console.log(clothesB[2]);
```

> **result:** football, hoodies

<br>

### But what if we had data nested inside football or hoodies, how could we reach them?

<br>

```javascript
const equipA = ["baseball", "football", "volleyball"];
const equipB = ["basketball", "golf balls", "tennis balls"];

//
//
const clothesA = ["tank tops", "t-shirts", "jerseys"];
const clothesB = ["sweat tops", "sweat pants", "hoodies"];

//
console.log(equipA[1]);
//or
console.log(clothesB[2]);

//
//
const equipDepartmentA = [equipA, equipB];
const equipDepartmentB = [clothesA, clothesB];
//
//the arrays below hold 2 arrays each
console.log(equipDepartmentA);
console.log(equipDepartmentB);
```

#### So as we can see in the example above, we have arrays nested within arrays

##### result

```javascript
2) [Array(3), Array(3)]
0: (3) ['baseball', 'football', 'volleyball']
1: (3) ['basketball', 'golf balls', 'tennis balls']
length: 2
[[Prototype]]: Array(0)

//
//
//
App.js:23
(2) [Array(3), Array(3)]
0: (3) ['tank tops', 't-shirts', 'jerseys']
1: (3) ['sweat tops', 'sweat pants', 'hoodies']
length: 2
[[Prototype]]: Array(0)
```

<br>

# 🍨

#### Now let's reach the items. Since they are now nested we need to reach first the department and then the items

- To get the football item, we will need to reach first the **equipA** which is at [0] position:

> const equipDepartmentA = [**equipA**, equipB];

<br>

- Once that is done, we can reach the **football** which is at position 1:

> console.log(equipDepartmentA[0][1]);

<br>

```javascript
const equipA = ["baseball", "football", "volleyball"];
const equipB = ["basketball", "golf balls", "tennis balls"];

//
//
const clothesA = ["tank tops", "t-shirts", "jerseys"];
const clothesB = ["sweat tops", "sweat pants", "hoodies"];

// //
// console.log(equipA[1]);
// //or
// console.log(clothesB[2]);

//
//
const equipDepartmentA = [equipA, equipB];
const equipDepartmentB = [clothesA, clothesB];
//
//the arrays below hold 2 arrays each
console.log(equipDepartmentA[0][1]);
```

##### result

> football

<br>
<br>

# 🥪

### Add one more level

#### Create another array <u>sportStore</u>, this will nest the array that is already nesting the 2 other arrays: [equipA, equipB];

- Add the following line:
  > const sportStore = [equipDepartmentA, equipDepartmentA];

```javascript
const equipA = ["baseball", "football", "volleyball"];
const equipB = ["basketball", "golf balls", "tennis balls"];

//
//
const clothesA = ["tank tops", "t-shirts", "jerseys"];
const clothesB = ["sweat tops", "sweat pants", "hoodies"];

// //
// console.log(equipA[1]);
// //or
// console.log(clothesB[2]);

//
//
const equipDepartmentA = [equipA, equipB];
const equipDepartmentB = [clothesA, clothesB];
//
//the arrays below hold 2 arrays each
// console.log(equipDepartmentA[0][1]);

//
// One level further
const sportStore = [equipDepartmentA, equipDepartmentA];
console.log(sportStore);
```

<br>

##### result

```javascript
(2) [Array(2), Array(2)]
0: (2) [Array(3), Array(3)]
1: (2) [Array(3), Array(3)]
length: 2
[[Prototype]]: Array(0)
```

#### So to grab the football item, we will need to do the same but go on level further

> console.log(sportStore[0][0][1]);

##### result

> football

<br>
<br>

---

<br>

## filter and map

#### Since I already have some images i found on the web, i don't need the default images he is using, so to reach the image inside the public folder...

- I can individually require it with import or map. it, it will create more lines yes, but it s a nice exercise.

<br>

- I will be using filter. and .map

<br>

- Add a title to the data.js, so to be able to grab the exact image i want:

```javascript
export const popularProducts = [
  {
    id: 1,
    img: "img-store-products/trinh-minh-th-MQOA0n3chA8-unsplash.jpg",
    title: "flower0", //here ********
  },
  {
    id: 2,
    img: "img-store-products/trinh-minh-th-BFJBelj9GDM-unsplash.jpg",
    title: "flower1",
  },
  {
    id: 3,
    img: "img-store-products/trinh-minh-th-Y3ORDf3E90I-unsplash.jpg",
    title: "flower2",
  },
  {
    id: 4,
    img: "img-store-products/trinh-minh-th-ScYGyGhA9HQ-unsplash.jpg",
    title: "flower3",
  },
  {
    id: 5,
    img: "img-store-products/trinh-minh-th-XezTntkSwnA-unsplash.jpg",
    title: "flower4",
  },
  {
    id: 6,
    img: "img-store-products/trinh-minh-th-YakPphiBp4Q-unsplash.jpg",
    title: "flower5",
  },
  {
    id: 7,
    img: "img-store-products/trinh-minh-th-W936fLTXmJA-unsplash.jpg",
    title: "flower6",
  },
  {
    id: 8,
    img: "img-store-products/trinh-minh-th-gjB6CPpbnC8-unsplash.jpg",
    title: "flower7",
  },
];
```

<br>

#### Then i will filter it and map the image i want

```javascript
    <Wrapper>
        <ImgContainer>
          {popularProducts
            .filter((item) => item.title === "flower3")
            .map((item) => (
              <Image src={item.img} />
            ))}
        </ImgContainer>
```

<br>

[<img src="img/filter-map-products.gif"/>]()

<br>

### like so

```javascript
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
//
import { popularProducts } from "../data";

//
import styled from "styled-components";
//
const Container = styled.div``;

//
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
//
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

//
//

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          {popularProducts
            .filter((item) => item.title === "flower3")
            .map((item) => (
              <Image src={item.img} />
            ))}
        </ImgContainer>
        <InfoContainer>
          <Title>Crocodile Embossed bag</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 128</Price>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
```

<br>
<br>
<br>
<br>

---

<br>
<br>
<br>
<br>

# array-with-modal-filter-map

<br>

## 🍯

### ANOTHER SIMPLE WAY of reaching an specific object is by using filter

#### .filter()

> What if you have an array, but only want some of the elements in it? That’s where .filter() comes in!

> note this also is a loop so requires a key ID

```javascript
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];
//
```

##### Say we want two arrays now: one for rebel pilots, the other one for imperials. With .filter() it couldn’t be easier!

```javascript
var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});
```

### TESTING IT IN MY APP

> AFTER HOURS of trying without success to use the filter and the map together, i opted for copying and paste the data from the link [How to filter data in React](https://sebhastian.com/react-filter/), **I wanted to see if there was en error with the code or if the modal was causing the issue** and it was the modal, because after adding the image to the data from the article it worked.

```javascript
const CityOrganicGrid = ({ setSelectedImgCityOrganic }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //JSON FILE IS INSIDE THE COMPONENT
  //
  const cardImgOrg = dataCityOrganic;
  //
  const tasks = [
    {
      taskId: 1,
      taskName: "Clean the bathroom",
      taskImg: "img_cityOrganic/city-camera.jpg",
      taskStatus: "To do",
    },
    {
      taskId: 2,
      taskName: "Learn filtering data in React",
      taskImg: "img_cityOrganic/city-camera2.jpg",
      taskStatus: "To do",
    },
    {
      taskId: 3,
      taskName: "Fix the bug on React project",
      taskImg: "img_cityOrganic/city-camera4.jpg",
      taskStatus: "To do",
    },
    {
      taskId: 4,
      taskName: "Fix the car",
      taskImg: "img_cityOrganic/cityOrganic_proto4.jpg",
      taskStatus: "Complete",
    },
  ];
  //
  return (
    <React.Fragment>
      <section id="cityOrganic">




          <div id="ModalBox__LetheCity">
            <div className="ModalBox__LetheCity__Wrapper">
              <h1>shitty tasks:</h1>
              <div className="ModalBox__LetheCity__Wrapper__Grid_container">
                <div className="img_LetheCityGallery1_card">
                  {tasks
                    .filter((task) => task.taskStatus === "To do")
                    .map((task) => (
                      <div key={task.taskId}>
                        <p>{task.taskName}</p>
                        <img src={task.taskImg} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* --------------- */}
        </div>
      </section>
    </React.Fragment>
  );
};
```

### NOW IT WORKS, i will only have to change the stuff related to the tasks

## 🚀🚀🚀🚀

```javascript
<div id="ModalBox__LetheCity">
  <div className="ModalBox__LetheCity__Wrapper">
    <h1>shitty tasks:</h1>
    <div className="ModalBox__LetheCity__Wrapper__Grid_container">
      {tasks &&
        tasks
          .filter((task) => task.taskStatus === "To do")
          .map((task) => (
            <div
              className="img_LetheCityGallery1_card"
              key={task.taskId}
              onClick={() => setSelectedImgCityOrganic(task.taskImg)}
            >
              <img src={task.taskImg} />
            </div>
          ))}
    </div>
  </div>
</div>
```

<br>

##### the JSON FILE IS INSIDE THE COMPONENT FOLDER, i will try to make this things owrk with the filter and if it works , i will move all the json files into the component, i will have 3 to the respective pages and all the pages will take the data from a single source, until now i have been adding JSON data to all individual pages and maybe there is a way to economize it.

<br>

## the updated example:

> I think this the best option i could find

```javascript
import dataCityOrganic from "./dataCityOrganic.json";

//
//
//setSelectedImgCityOrganic this is coming from another component where the states are, look the vodanova example inside the City organic

// https://github.com/nadiamariduena/preview-volkanuve/blob/master/src/components/cityOrganic/CityOrganic.js
const CityOrganicGrid = ({ setSelectedImgCityOrganic }) => {
  //
  //

  //

  const cardImgOrg = dataCityOrganic;
  //
  //
  //

  return (
    <React.Fragment>
      {/* -------------- */}
      {/* ----MODAL----- */}
      {/* -------------- */}
      <div className="ModalBox__LetheCity__Wrapper">
        <div className="ModalBox__LetheCity__Wrapper__Grid_container">
          {cardImgOrg &&
            cardImgOrg
              .filter((itemCardOrg) => itemCardOrg.title === "environment")
              .map((itemCardOrg) => (
                <div
                  className="img_LetheCityGallery1_card"
                  key={itemCardOrg.id}
                  onClick={() => setSelectedImgCityOrganic(itemCardOrg.img1)}
                >
                  <img src={itemCardOrg.img1} alt={itemCardOrg.alt} />
                </div>
              ))}
        </div>
      </div>
    </React.Fragment>
  );
};
//
// JSON DATA
[
  {
    id: "0",
    img1: "img_cityOrganic/city-camera.jpg",
    title: "environment",
    alt: "img City Organic",
  },
  {
    id: "1",
    img1: "img_cityOrganic/city-camera2.jpg",
    title: "environment",
    alt: "img City Organic",
  },
  {
    id: "2",
    img1: "img_cityOrganic/city-camera4.jpg",
    title: "environment",
    alt: "img City Organic",
  },
  {
    id: "3",
    img1: "img_cityOrganic/cityOrganic_proto4.jpg",
    title: "process",
    alt: "img City Organic",
  },
  {
    id: "4",
    img1: "img_cityOrganic/cityOrganic_proto1.jpg",
    title: "process",
    alt: "img City Organic",
  },
];

//
```

<br>
<br>

---

<br>
<br>

> Jack Herrington, really good teacher

##### [Is JavaScript Spread a Performance Killer? Quick Fix](https://www.youtube.com/watch?v=tcZbY-Q0TIE)

### arrays

##### [Javascript Arrays Made Simple: Iterators (Part 1)](https://youtu.be/NaJI7RkSPx8)

- You will see a for each and a for loop example

- Also why **for each** is **not compatible** with **async await** , and you cant use **break**

<br>

#### for

- **for** loop is great for the creation of data **but** for iterating throught arrays is **noo go**

<br>
<br>

---

<br>
<br>
