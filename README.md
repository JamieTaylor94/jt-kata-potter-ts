# Kata Potter Pricing Calculator

This project is a TypeScript implementation of the book pricing problem, inspired by the [Potter Kata](https://codingdojo.org/kata/Potter/) from Coding Dojo. The goal of this implementation is to calculate the total price of a collection of books, applying discounts based on the number of unique titles in each group of books.

## Overview

The algorithm groups books to have the lowest possible price. This is achieved using a simple equal distribution algorithm as the core optimiser. It ensures that each group of books is as evenly sized as possible while maximising the number of unique titles per group. This method strikes a balance between simplicity and effectiveness to achieve the desired result of the challenge but doesn't cover other edge cases. The solution would not win any awards for efficiency using the filter and sort functions inside the reduce but I do enjoy the readability.
