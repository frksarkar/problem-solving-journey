# 005. Fashionable Array (Codeforces)

> ### 🔗 Link: [Codeforces - Fashionable Array ](https://codeforces.com/problemset/problem/2110/A)

## ❓ Problem

In 2077, everything became fashionable among robots, even arrays...

We will call an array of integers a
fashionable if min(a)+max(a)
is divisible by 2
without a remainder, where min(a)
— the value of the minimum element of the array a
, and max(a)
— the value of the maximum element of the array a
.

You are given an array of integers a1,a2,…,an
. In one operation, you can remove any element from this array. Your task is to determine the minimum number of operations required to make the array a
fashionable.

### ✅ Input:

- the first line contains a single integer n (1 ≤ n ≤ 100) — the number of elements in the array.

### ✅ Output:

- For each test case, print the minimum number of operations required to make the array `a` fashionable.

### 🧪 Example

| Input                    | Output |
| ------------------------ | ------ |
| `[5, 2]`                 | 1      |
| `[3, 1, 4, 1, 5, 9, 2]`  | 0      |
| `[2, 7, 4, 6, 9, 11, 5]` | 3      |

---

<details>
 <summary> 💡 Solution Approach </summary>

- If the array is already fashionable, then the minimum number of operations required is 0.
- Otherwise, the minimum number of operations required is the number of elements in the array minus 1.

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`string` `implementation` `sorting`
