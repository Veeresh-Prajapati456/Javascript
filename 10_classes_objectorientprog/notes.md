# javaScript and classes

## OOP

## Object
- collection of properties(means variables and const) and methods(means function)
-Few objects: toLowerCase etc.

## why use OOP
OOP promotes breaking down a program into smaller, manageable, and independent components (classes and objects).


## parts of OOP

## Object Literal 
- (means literally a Object)
// An object literal is a short way to create an object. It consists of key-value pairs enclosed in curly braces ({}).

Example:-

let person = {
  name: "John",
  age: 30,
  isStudent: false
};

## keywords
- Constructor function
- Protorypes
- classes
- Instances (new, this)

## 4 Pillars

Abstraction: (means Hide the details). OOP allows developers to focus on what an object does rather than how it does it.

(Example of abstraction: fetch() because we don't know what is doing fetch internally it means fetch() hide the details from us)

---

Encapsulation (means Wrapup the data). Encapsulation is like a protective shield that keeps the internal details of an object hidden from the outside world, while exposing only the necessary parts.

(Example of Encapsulation:- 

Think of a bank ATM machine:

- What you see (Public):

The ATM screen, keypad, and cash dispenser are the interface.
You interact with these components to withdraw cash, check your balance, or deposit money.

- What you don't see (Private):

The internal workings of the ATM: how it processes your PIN, accesses your account, and retrieves cash.
These are hidden from you for security and simplicity.

---


Inheritance: Classes can inherit properties and methods from other classes, promoting the reuse of common logic.

                                        OR
                                
Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class (called a child class or subclass) to inherit properties and methods from another class (called a parent class or superclass).                               

                                        OR

The child class can also add its own unique properties and methods, or override the parent class's methods to provide exact behavior.

(Example of Inheritance:- 

Family Traits

- A parent might have quality like hair color, eye color, or height.
- A child inherits these quality but can also have unique characteristics like a specific hobby or talent.)

---

Polymorphism: (Polymorphism is a concept in Object-Oriented Programming (OOP) that means "many forms." ). It allows objects to be treated as instances of their parent class while still maintaining their specific behavior.

                                      OR

Polymorphism: The same person behaves differently in different contexts (roles), but they are still the same person.

(Example of Polymorphism:-  

Person's Role Changes Based on Context

- A person can be a teacher in a classroom, explaining lessons.
- The same person can be a player on a sports field, playing a game.
- The same person can be a parent at home, taking care of children.)

---

#### In JavaScript, a prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects.

#### Every function in JavaScript (except arrow functions) has a prototype property. This property is used when the function is used as a constructor

#### Prototypes form the backbone of JavaScript’s object-oriented programming, even with modern syntax like class.

---
prototypal behavior is a feature of JavaScript, not its overall default behavior.