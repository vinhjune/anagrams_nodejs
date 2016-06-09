Requirements: You need NodeJS to run and Mocha to run the test.
------------------------------------------------------------------------------------
How to run:
node main.js <sample words to test separated by space>
How to test:
mocha mocha/test.js
------------------------------------------------------------------------------------
Algorithm:
Each anagram set will be the same string after sorting their character, for example:
'cat', 'tac' >> 'act'
This algorithm loop through each word, sort them and group them into the same sorted string group.
Alternative:
Another algorithm is to map each character into different prime numbers, then each word will be map into the product of the multiple of all characters. However, in case of long word, it requires that the product big enough. I prefer clean, simple code which works in every cases and easy to maintain/understand, therefore I chose the first algorithm.
------------------------------------------------------------------------------------
Choice of language:
I choose NodeJS and Mocha because of several reason:
- It's easy to read, any web developer can understand without trouble
- Easy to run, fast enough without the need to compile
- I want to try something new: I've never used Mocha before, so I want to try it out!
------------------------------------------------------------------------------------
Vinh T. Hoang
hoangthevinh.htv@gmail.com
------------------------------------------------------------------------------------
