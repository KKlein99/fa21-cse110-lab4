1. What will happen at line 12 and why? If the code causes an error, explain why. 
   error no such variable
   since var i is declared in the head of loop it is not a global variable and it can not be used after loop finished
2. What will happen at line 13 and why? If the code causes an error, explain why.
   error no such variable
   since var discountPrice is declared inside the loop it is not a global variable and it can not be used after loop finished
3. What will happen at line 14 and why? If the code causes an error, explain why. 
   it will print: 150
   since finalPrice is a global variable and line 14 right after loop finished, it are able to store the final price of the last one in the loop.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
   this function returns a arrey containing rounded discont prices.
   [50, 100, 150]
   since discounted is a global variable it can be changed in the loop and can be accessed after loop thus, it returns discounted prices successfully.
5. What will happen at line 12 and why?  If the code causes an error, explain why. 
   error no such variable
   let "i" is a block level variable and since it only be declared in the loop, it cant be used after loop
6. What will happen at line 13 and why? If the code causes an error, explain why.
   error no such variable
   let "discountedPrice" is a block level variable and since it only be declared in the loop, it cant be used after loop
7. What will happen at line 14 and why? If the code causes an error, explain why.
   it will print: 150
   since finalPrice is a inside block variable and line 14 right after loop finished, it are able to store the final price of the last one in the loop.
8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
   this function returns a arrey containing rounded discont prices.
   [50, 100, 150]
   since discounted is a inside block variable it can be changed in the loop and can be accessed after loop ended
9. What will happen at line 11 and why? If the code causes an error, explain why.
    error no such variable 
    let "i" is a block level variable and since it only be declared in the loop, it cant be used after loop
10. What will happen at line 12 and why? If the code causes an error, explain why. 
    it will print: 3
    the length of arrey is 3 and been set as const it will never be changed.
11. 11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    it will return: [] and empty arrey
    it is a const. const never change.
12. Given the above Object, write the notation for:  (These should be in your part2.md)
    A. student.name
    B. student['Grad Year']
    C. greeting(student)
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '32'
    B. 1
    C. 3
    D. '3null'
    E. 4
    F. 0
    G. '3undefined'
    H. NaN
14. A.true
    B.false
    C.true
    D.false
    E.false
    F.true
15. A strict equality operator === checks the equality without type conversion.
    == is equality operator checkk with type conversion.
16. Done
17. [2,4,6]
    well, it initialized a empty arrey
    and call doSomething for each variable in the arrey
    doSomething just double the value
    then we got the result
18. Done
19. print 1
    print 2 after 1 second
    print 3
    print 4
