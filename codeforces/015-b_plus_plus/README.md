# 005. Bit++ (Codeforces)

> ### 🔗 Link: [Codeforces - Bit++](https://codeforces.com/problemset/problem/282/A)

## ❓ Problem

You are given a programme consisting of n statements. Each statement is one of the following:

1. `++X`
2. `X++`

where `X` is a variable. The statements are executed one after another in the order they are given.
The initial value of the variable `X` is 0. After executing the programme, what is the final value of the variable `X`?

### ✅ Input:

- The first line contains a single integer n (1 ≤ n ≤ 100) — the number of statements in the programme.
- The next n lines contain one statement each.

### ✅ Output:

- Print the final value of variable x after executing the programme.

### 🧪 Example

| Input                     | Output |
| ------------------------- | :----: |
| `1` <br> `++X`            |  `1`   |
| `2` <br> `++X` <br> `X++` |  `0`   |

---

<details>
 <summary> 💡 Solution Approach </summary>

- Count the number of ++ operations and subtract the number of -- operations.
- The final value of the variable is the difference between the number of ++ operations and the number of -- operations.
- Print the final value of the variable.

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`greedy` `implementation`
