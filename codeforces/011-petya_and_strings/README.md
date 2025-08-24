# 005. Tram (Codeforces)

> ### 🔗 Link: [Codeforces - Tram](https://codeforces.com/problemset/problem/116/A)

## ❓ Problem

Little Petya loves presents. His mum bought him two strings of the same size for his birthday. The strings consist of uppercase and lowercase Latin letters. Now Petya wants to compare those two strings lexicographically. The letters' case does not matter, that is an uppercase letter is considered equivalent to the corresponding lowercase letter. Help Petya perform the comparison.

### ✅ Input:

- The first line contains two strings `s1` and `s2` (`1 ≤ |s1|, |s2| ≤ 100`).
- The strings consist of uppercase and lowercase Latin letters.
- It is guaranteed that `s1` and `s2` are equal in length.
- The letters' case does not matter, that is an uppercase letter is considered equivalent to the corresponding lowercase letter.

### ✅ Output:

- If the first string is less than the second one, print `-1`.
- If the first string is greater than the second one, print `1`.
- If the strings are equal, print `0`.

### 🧪 Example

| Input       | Output |
| ----------- | :----: |
| `abc` `Abc` |  `0`   |
| `aA` `bB`   |  `1`   |
| `abs` `Abz` |  `-1`  |

---

<details>
 <summary> 💡 Solution Approach </summary>

- Compare the strings lexicographically.
- If the first string is less than the second one, print "-1".
- If the first string is greater than the second one, print "1".
- If the strings are equal, print "0".

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`string` `implementation`
