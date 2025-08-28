<!-- Anster to the question no:1 -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Ans: The main differences is the getElementById finds only one unique id and getElementByClassname finds all the elements with that class and lastly the querySelector finds the first element that matches a CSS selector.

<!-- Anster to the question no:2-->
2. How do you create and insert a new element into the DOM?

Ans: const divNew = document.createElement("div")
divNew.innerText = "New element create "
document.body.appendChild("divNew")

<!-- Anster to the question no:3-->
3. What is Event Bubbling and how does it work?

Ans: The meaning of Event Bubbling is when we click on a small child element ,the event doesn't stop there.
then it goes to the upper parent.

<!-- Anster to the question no:4-->
4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation means putting an event lister on a parent element ans using it to handle events from child elements.

It is useful because it makes code more simple,faster and easier to manage.

<!-- Anster to the question no:5-->
5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: Tha main difference is 

preventDefault()  Stop browser's default action .
stopPropagation() Stop event moving up or down .