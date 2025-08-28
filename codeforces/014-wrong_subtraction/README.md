# 005. Wrong Subtraction (Codeforces)

> ### 🔗 Link: [Codeforces - Wrong Subtraction](https://codeforces.com/problemset/problem/977/A)

## ❓ Problem

Tanya has a number `n`. She wants to subtract `k` from it. However, she doesn't know how to do this.
She can subtract 1 from the last digit of the number. If the last digit is 0, she can divide the number by 10.
She can do these operations as many times as she wants.

### ✅ Input:

- enter the value of two integer `n` and `k`.
- `1 ≤ n, k ≤ 1000`.
- the number from which Tanya will subtract and the number of subtractions.

### ✅ Output:

- print the result of Tanya's operations.

### 🧪 Example

| Input          | Output |
| -------------- | :----: |
| `154` `5`      |  `15`  |
| `10000000` `7` |  `1`   |
| `100` `1`      |  `10`  |

---

<details>
 <summary> 💡 Solution Approach </summary>

**Greedy**

- if the last digit of the number is non-zero, subtract 1
- if the last digit of the number is zero, divide by 10
- repeat k times

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`brute-force` `greedy`
