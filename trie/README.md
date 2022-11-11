### Trie: 前缀树或字典树

Function: an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings.

Each trie has an empty root node, with links (or references) to other nodes — one for each possible alphabetic value. The shape and the structure of a trie is always a set of linked nodes, connecting back to an empty root node.

Thus, the size of a trie is directly correlated to the size of all the possible values that the trie could represent.

前缀树的3个基本性质：

1. 根节点不包含字符，除根节点外每一个节点都只包含一个字符。
2. 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串。
3. 每个节点的所有子节点包含的字符都不相同。
