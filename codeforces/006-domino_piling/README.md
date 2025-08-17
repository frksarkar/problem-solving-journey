# 005. Domino Piling(Codeforces)

> ### 🔗 Link: [Codeforces - Domino Piling](https://codeforces.com/problemset/problem/50/A)

## ❓ Problem

You are given a rectangular board of M × N squares. Also you are given an unlimited number of standard domino pieces of 2 × 1 squares. You are allowed to rotate the pieces. You are asked to place as many dominoes as possible on the board so as to meet the following conditions:

1. Each domino completely covers two squares.

2. No two dominoes overlap.

3. Each domino lies entirely inside the board. It is allowed to touch the edges of the board.

Find the maximum number of dominoes, which can be placed under these restrictions.

### ✅ Input:

-   The first line of the input contains two integers M and N (1 ≤ M ≤N ≤ 100).

### ✅ Output:

-   Print a single integer — the maximum number of dominoes, which can be placed.

### 🧪 Example

| Input | Output |
| ----- | :----: |
| 3, 4  |   6    |
| 5, 3  |   7    |

---

<details>
 <summary> 💡 Solution Approach </summary>

1. Calculate the total number of squares on the board.
2. Calculate the maximum number of dominoes that can be placed by dividing the total number of squares by 2.
3. Return the maximum number of dominoes.

</details>

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

## 🧠 Tags

`math` `implementation`
