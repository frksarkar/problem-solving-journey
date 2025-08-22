# 005. Tram (Codeforces)

> ### 🔗 Link: [Codeforces - Tram](https://codeforces.com/problemset/problem/116/A)

## ❓ Problem

The tram has n stops on the route. At the i-th stop, there are ai passengers who exit and bi passengers who enter the tram. Determine the minimum capacity of the tram.

### ✅ Input:

-   The first line contains a single integer n (2 ≤ n ≤ 1000) — the number of stops.
-   The next n lines contain two integers ai and bi (0 ≤ ai, bi ≤ 1000) — the number of passengers who exit and enter the tram at the i-th stop.

### ✅ Output:

-   Print a single integer — the minimum capacity of the tram.

### 🧪 Example

| Input                                | Output |
| ------------------------------------ | :----: |
| n=3, a = ['1 0 1', '1 0 0', '0 1 1'] |   2    |
| n=3, a = ['1 0 0', '1 1 0', '0 0 0'] |   1    |

---

<details>
 <summary> 💡 Solution Approach </summary>
 -   Calculate the total number of passengers at each stop and find the minimum capacity of the tram.
 -   Print the minimum capacity of the tram.
</details>

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

## 🧠 Tags

`brute-force` `greedy`
