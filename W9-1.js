
const parser = new DOMParser();

const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");

let elements = [];

for (let node of listNode.children) {
  const nameNode = node.querySelector("name");
  const firstNameNode = node.querySelector("first");
  const secondNameNode = node.querySelector("second");
  const ageNode = node.querySelector("age");
  const profNode = node.querySelector("prof");
  const langAttr = nameNode.getAttribute('lang');
   
  const studentAttr = {
   name: firstNameNode.textContent+" "+secondNameNode.textContent, 
   age: Number(ageNode.textContent), 
   prof: profNode.textContent, 
   lang: langAttr,
  };  
   
   elements.push(studentAttr);   
};

const result = {
  list: elements,  
};

console.log(result);