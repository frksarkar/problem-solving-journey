# 005. Football(Codeforces)

> ### 🔗 Link: [Codeforces - Football](https://codeforces.com/problemset/problem/96/A)

## ❓ Problem

You are given a string consisting of zeroes and ones. There is at least one player from each team present on the field. The situation is dangerous if there are at least 7 consecutive ones or zeroes in the string. Your task is to determine if the situation is dangerous or not.

### ✅ Input:

-   `n` (1 ≤ n ≤ 100) - the length of the string
-   string consisting of zeroes and ones
-   There's at least one player from each team present on the field

### ✅ Output:

-   `YES` if the situation is dangerous, otherwise `NO`

### 🧪 Example

| Input      | Output |
| ---------- | :----: |
| 101010101  |   NO   |
| 0011111110 |  YES   |
| 00000000   |  YES   |

---

<details>
 <summary> 💡 Solution Approach </summary>

-   Check if there are at least 7 consecutive ones or zeroes in the string.
-   If there are, return `YES`.
-   Otherwise, return `NO`.

</details>

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

## 🧠 Tags

`string` `implementation`
