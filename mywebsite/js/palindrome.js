




<body><h4 Palindrome /h4>
Word;  <input type="text" name="word1"><br>


<button id="calcBtn" >Calculate</button>
<div id="result4"></div>


<script>
$('#calcBtn').click(function(){

    function checkPalindrome(word) {    
        var l = word.length;
        for (var i = 0; i < l / 2; i++) {
            if (word.charAt(i) !== word.charAt(l - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    if (checkPalindrome("1122332211")) {
        document.write("The word is a palindrome");
    } else {
        document.write("The word is NOT a palindrome");
    }
})
/script>
/body>
/html>