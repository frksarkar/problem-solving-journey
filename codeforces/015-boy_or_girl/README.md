# 005. Boy or Girl (Codeforces)

> ### 🔗 Link: [Codeforces - Boy or Girl ](https://codeforces.com/problemset/problem/236/A)

## ❓ Problem

You are given a string of lowercase English letters. If the number of distinct characters in the string is odd, it is called a **boy name**, otherwise it is called a **girl name**.

### ✅ Input:

- The first line contains a non-empty string, consisting of lowercase English letters, that denotes the user name.
- The string's length does not exceed 100 characters.

### ✅ Output:

- Print "CHAT WITH HER!" if the user is a girl or "IGNORE HIM!" if the user is a boy.

### 🧪 Example

| Input         | Output           |
| ------------- | ---------------- |
| `sevenkplus`  | `CHAT WITH HER!` |
| `sevenkplus_` | `IGNORE HIM!`    |
| `wjmzbmr`     | `CHAT WITH HER!` |

---

<details>
 <summary> 💡 Solution Approach </summary>

- Count the number of distinct characters in the user name.
- If the number of distinct characters is odd, the user is a boy, otherwise the user is a girl.
- Print "CHAT WITH HER!" if the user is a girl or "IGNORE HIM!" if the user is a boy.

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`string` `implementation` `brute force`
