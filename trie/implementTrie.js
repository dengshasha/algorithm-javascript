// 解法1
// class Trie {
//     constructor() {
//         this.obj = {}
//     }
//
//     insert(word) {
//         this.obj[word] = word;
//         return null;
//     }
//
//     search(word) {
//         return !!this.obj[word]
//     }
//     startsWith(prefix) {
//         let len = prefix.length;
//         for(let key of Object.keys(this.obj)) {
//             if(key.slice(0, len) === prefix) return true
//         }
//         return false
//     }
// }

// 解法2
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.link = new TrieNode()
    }

    insert(word) {
        let current = this.link;
        for(let c of word) {
            if(!current.children[c]) {
                current.children[c] = new TrieNode();
            }
            current = current.children[c];
        }
        current.isEnd = true
    }

    contains(prefix) {
        let current = this.link;
        for(let c of prefix) {
            if(current.children[c]) {
                current = current.children[c]
            } else {
                return null;
            }
        }
        return current;
    }

    search(word) {
        let node = this.contains(word)
        return node !== null && node.isEnd === true;
    }
    startsWith(prefix) {
        return this.contains(prefix) !== null;
    }
}

var t = new Trie()
t.insert('abc')