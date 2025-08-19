# 005. Team (Codeforces)

> ### 🔗 Link: [Codeforces - Team](https://codeforces.com/problemset/problem/231/A)

## ❓ Problem

You are given a list of n problems, where each problem has a certain number of friends who are sure about the solution of the problem. Your task is to find the number of problems for which the friends will write a solution.

### ✅ Input:

-   The first line contains an integer n (1 ≤ n ≤ 1000), the number of problems.
-   The second line contains n space-separated integers a1, a2, ..., an (0 ≤ ai ≤ 2), where ai is the number of friends who are sure about the solution of the i-th problem.

### ✅ Output:

-   Print the number of problems for which the friends will write a solution.

### 🧪 Example

| Input                                | Output |
| ------------------------------------ | :----: |
| n=3, a = ['1 0 1', '1 0 0', '0 1 1'] |   2    |
| n=3, a = ['1 0 0', '1 1 0', '0 0 0'] |   1    |

---

<details>
 <summary> 💡 Solution Approach </summary>

1. **Read Input:** Parse the input to get the number of problems `n` and the list of friends' sureness for each problem `a`.
2. **Count Sureness:** Iterate through the list of sureness values and count how many problems have at least two sureness values.
3. **Output Result:** Print the count of problems with at least two sureness values.

</details>

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

## 🧠 Tags

`brute-force` `greedy`
