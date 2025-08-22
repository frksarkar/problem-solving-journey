# 005. Helpful Maths (Codeforces)

> ### 🔗 Link: [Codeforces - Helpful Maths](https://codeforces.com/problemset/problem/339/A)

## ❓ Problem

Xenia can calculate the sum if the summands follow in non-decreasing order. For example, she can't calculate sum 1+3+2+1 but she can calculate sums 1+1+2 and 3+3.

You've got the sum that was written on the board. Rearrange the summans and print the sum in such a way that Xenia can calculate the sum.

### ✅ Input:

- The first line contains a non-empty string `s`, sting `s` consists of digits `1`, `2` and `3` and characters `+`.
- s length is at most 100.

### ✅ Output:

- Print the sum that Xenia can calculate.

### 🧪 Example

| Input     |  Output   |
| --------- | :-------: |
| `1+3+2`   |  `1+2+3`  |
| `1+3+2+1` | `1+1+2+3` |

---

<details>
 <summary> 💡 Solution Approach </summary>

- first separate the string into an array of numbers
- sort the array
- join the array with `+` character into a string and print

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`brute-force` `greedy`
