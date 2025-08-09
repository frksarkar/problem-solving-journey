# 004. Only One Digit(Codeforces)

> ### 🔗 Link: [Codeforces - Only One Digit](https://codeforces.com/problemset/problem/2126/A)

## ❓ Problem

You are given an integer `x`. You need to find the smallest non-negative integer `y` such that the numbers `x` and `y` share at least one common digit. In other words, there must exist a decimal digit `d` that appears in both the representation of the number `x` and the number `y`

### ✅ Input:

-   enter the value of integer `x`.

### ✅ Output:

-   the smallest non-negative integer `y` such that the numbers `x` and `y` share at least one common digit.

### 🧪 Example

| Input | Output |
| ----- | :----: |
| 6     |   6    |
| 123   |   1    |
| 456   |   4    |

---

<details>
 <summary> 💡 Solution Approach </summary>

-   If `x` non-negative integer and `x` contains only one digit, then `y` is `x`.
-   check if `x` contain two digit or more, then find the smallest number `y` that contain at lasts one digit that is common with `x`.
-   Example: `x = 6` → `y = 6`.
-   `x = 123` → `y = 1`. `y` is the smallest number that contain at least one digit.

</details>

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

## 🧠 Tags

`math` `brute-force`
