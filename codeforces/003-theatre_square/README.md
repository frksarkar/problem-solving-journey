# 003. Theatre Square (Codeforces)

### 🔗 Link: [Codeforces - Watermelon](https://codeforces.com/problemset/problem/1/A)

## ❓ Problem

Theatre Square has a rectangular shape with the size `n x m` meters. to pave the square with square granite flagstones of size `a x a` meters, you need to calculate the minimum number of flagstones needed to pave the entire square.

### ✅ Input:

-   contains three positive integers `n`, `m`, and `a` (1 ≤ n, m, a ≤ 100).

### ✅ Output:

-   number of flagstones needed to pave the entire square.

### 🧪 Example

| n   | m   | a   | Output |
| --- | --- | --- | :----: |
| 6   | 6   | 2   |   9    |
| 3   | 3   | 3   |   1    |

---

<details>
 <summary> 💡 Solution Approach </summary>

-   If `n` is divisible by `a` and `m` is divisible by `a`, then the minimum number of flagstones needed is `(n // a) * (m // a)`.
-   Otherwise, it's not possible to pave the entire square with flagstones of size `a x a` meters.
-   Example: `n = 6`, `m = 6`, `a = 2` → `(6 // 2) * (6 // 2) = 9`.

</details>

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

## 🧠 Tags

`math`
