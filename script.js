// Function to apply the ROT13 cipher to a string
function rot13(str) {
  // Replace each uppercase letter in the string using a regular expression
  return str.replace(/[A-Z]/g, (char) =>
    // Convert each character to its corresponding ROT13 character
    String.fromCharCode((char.charCodeAt(0) % 26) + 65)
  );
}

// Example tests
console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // Output: FREE PIZZA!
console.log(rot13("SERR YBIR?")); // Output: FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

console.log(rot13("A")); // Output: N

// Example using specific characters and their character codes
// let char = "N";
// console.log(char.charCodeAt(0)); // 78

// let charCode = String.fromCharCode(13+65);
// console.log(charCode) // N

/*
A ⇨ N
B ⇨ O
C ⇨ P
D ⇨ Q
E ⇨ R
F ⇨ S
G ⇨ T
H ⇨ U
I ⇨ V
J ⇨ W
K ⇨ X
L ⇨ Y
M ⇨ Z
N ⇨ A
O ⇨ B
P ⇨ C
Q ⇨ D
R ⇨ E
S ⇨ F
T ⇨ G
U ⇨ H
V ⇨ I
W ⇨ J
X ⇨ K
Y ⇨ L
Z ⇨ M
 */

/*
Certainly, here are the results of the modulus operation `% 26` for 
the values from 65 to 90:

1. 65 % 26 = 13
2. 66 % 26 = 14
3. 67 % 26 = 15
4. 68 % 26 = 16
5. 69 % 26 = 17
6. 70 % 26 = 18
7. 71 % 26 = 19
8. 72 % 26 = 20
9. 73 % 26 = 21
10. 74 % 26 = 22
11. 75 % 26 = 23
12. 76 % 26 = 24
13. 77 % 26 = 25
14. 78 % 26 = 0
15. 79 % 26 = 1
16. 80 % 26 = 2
17. 81 % 26 = 3
18. 82 % 26 = 4
19. 83 % 26 = 5
20. 84 % 26 = 6
21. 85 % 26 = 7
22. 86 % 26 = 8
23. 87 % 26 = 9
24. 88 % 26 = 10
25. 89 % 26 = 11
26. 90 % 26 = 12

These results illustrate the remainder when each of the values from 65 to 90 
is divided by 26.
*/
