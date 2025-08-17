# 005. Next Round(Codeforces)

> ### 🔗 Link: [Codeforces - Next Round](https://codeforces.com/problemset/problem/158/A)

## ❓ Problem

Contestant who earns a score equal to or greater than the `k-th` place finisher's score will advance to the next round, as long as the contestant earns a positive score..." — an excerpt from contest rules.

A total of `n` participants took part in the contest `(n ≥ k)`, and you already know their scores. Calculate how many participants will advance to the next round.

### ✅ Input:

-   `n` - the number of participants
-   `k` - the number of the place finisher
-   `a_1, a_2, ..., a_n` - the scores of the participants

### ✅ Output:

-   The number of participants who will advance to the next round

### 🧪 Example

| Input                         | Output |
| ----------------------------- | :----: |
| n=5 , k=3 , a=[1, 2, 3, 4, 5] |   3    |
| n=3 , k=2 , a=[1, 2, 3, 4, 5] |   2    |
| n=4 , k=1 , a=[1, 2, 3, 4, 5] |   4    |

---

<details>
 <summary> 💡 Solution Approach </summary>

-   Count the number of scores that are greater than or equal to `k`.
-   Return the count as the number of participants who will advance to the next round.

</details>

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

## 🧠 Tags

`math` `implementation`
