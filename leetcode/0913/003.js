/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxStr = '', maxLen = 0, currIdx = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        currIdx = maxStr.indexOf(element);
        
        if (currIdx > -1) {
            maxStr = maxStr.substring(currIdx + 1);
        }
        
        maxStr += element;
        maxLen = Math.max(maxLen, maxStr.length);
        console.log(currIdx, maxStr);
    }

    console.log(s, maxLen);
    return maxLen;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew"); // 3 "wke"
lengthOfLongestSubstring("");