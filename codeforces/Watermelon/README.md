# 001. Watermelon (Codeforces)

## 🔗 Link:

[Codeforces - Watermelon](https://codeforces.com/problemset/problem/4/A)

---

## ❓ Problem

Pete and Billy want to divide a watermelon of weight `w` into two **even** parts such that both parts are **greater than 0**. You need to determine if this is possible.

### ✅ Input:

-   A single integer `w` (1 ≤ w ≤ 100)

### ✅ Output:

-   Print `YES` if the watermelon can be divided into two even positive weights.
-   Print `NO` otherwise.

---

## 💡 Solution

-   If the weight `w` is greater than 2 **and** is divisible by 2, it's possible.
-   Otherwise, it's not.

### Example:

Input: 8
Output: YES

## 🧪 Test Cases:

```js
canDivideWatermelon(8); // "YES"
canDivideWatermelon(3); // "NO"
canDivideWatermelon(4); // "YES"
```

## 🕒 Complexity:

-   Time: O(1)
-   Space: O(1)
