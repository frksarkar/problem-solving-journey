# 005. Word Capitalization (Codeforces)

> ### 🔗 Link: [Codeforces - Word Capitalization](https://codeforces.com/problemset/problem/281/A)

## ❓ Problem

Capitalization is writing a word with its first letter as a capital letter. Your task is to capitalize the given word.

Note, that during capitalization all the letters except the first one remains unchanged.

### ✅ Input:

- A single line contains a non-empty word. This word consists of lowercase and uppercase English letters. The length of the word will not exceed 10^3.

### ✅ Output:

- Print the given word after capitalization.

### 🧪 Example

| Input        |    Output    |
| ------------ | :----------: |
| `abc`        |    `Abc`     |
| `codeforces` | `Codeforces` |
| `petya`      |   `Petya`    |

---

<details>
 <summary> 💡 Solution Approach </summary>

- Iterate over the string and capitalize the first letter.
- Return the modified string.

</details>

## 🕒 Time and Space Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧠 Tags

`string` `implementation`
