# 005. Beautiful Matrix (Codeforces)

> ### 🔗 Link: [Codeforces - Beautiful Matrix](https://codeforces.com/problemset/problem/263/A)

## ❓ Problem

You are given a 5 × 5 matrix of zeroes and a single number one. Your task is to find the minimum number of moves needed to make the matrix beautiful.

### ✅ Input:

- the matrix is given as a 5 × 5 matrix, consisting of 24 zeroes and a single number one.

### ✅ Output:

- Print the minimum number of moves needed to make the matrix beautiful.

### 🧪 Example

| Input                                                                   | Output |
| ----------------------------------------------------------------------- | :----: |
| `0 0 0 0 0`<br>`0 0 0 0 1`<br>`0 0 0 0 0`<br>`0 0 0 0 0`<br>`0 0 0 0 0` |   3    |
| `0 0 0 0 0`<br>`0 0 0 0 0`<br>`0 1 0 0 0`<br>`0 0 0 0 0`<br>`0 0 0 0 0` |   1    |

---

<details>
 <summary> 💡 Solution Approach </summary>

- Iterate over the matrix and count the number of zeroes in each row and column.
- Calculate the minimum number of moves needed to make the matrix beautiful by subtracting the number of zeroes in the row and column that contains the one from the total number of zeroes.

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`implementation`
