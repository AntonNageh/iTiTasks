// bool isValid(String s) {
//   if (s.length < 2) {
//     return false;
//   }
//   for (int i = 0; i < s.length - 1; i++) {
//     String pair = s.substring(i, i + 2);
//     if (pair == '()' || pair == '[]' || pair == '{}') {
//       return true;
//     }
//   }
//   return false;
// }
bool isValid(String s) {
  while (s.contains('()') || s.contains('[]') || s.contains('{}')) {
    s = s.replaceAll('()', '')
         .replaceAll('[]', '')
         .replaceAll('{}', '');
  }
  return s.isEmpty;
}
String toLowerCase(String s){
String lowercaseString = s.toLowerCase();
return lowercaseString;
}

int oneNumberOnly(List<int> a) {
  for (int num in a) {
    if (a.where((x) => x == num).length == 1 || a.where((x) => x == num).length == 3) {
      return num;
    }
  }
  return -1;
}
// XOR solution 
// int oneNumberOnly(List<int> a) {
//   int result = 0;
//   for (int num in a) {
//     result ^= num;
//   }
//   return result;
// }
String lastWord (String s){
  List<String> words = s.split(' ');
  String result = words.last;
  if(result.isEmpty){
    result = words.lastWhere((s)=>s.isNotEmpty);
  }
  return result;
}

//better solution
// class Solution {
//   int lengthOfLastWord(String s) {
//    List<String>  word = s.trim().split(' ');
//     return word.last.length;
//   }
// }

String palindrome (String s){
  String string = s.replaceAll(RegExp(r'[^a-zA-Z0-9]'), '').trim().toLowerCase();
  String reversedString = string.split('').reversed.join();
  print("$string $reversedString");
  for(int i = 0; i < string.length - 1; i++){
    if(string[i] != reversedString[i]){
      return 'false';
    }
    else if (string.isEmpty || string.length == 1) return "false";
  }
  return "true";
}

//Better solution
// bool isPalindrome(String s) {
  // String cleaned = s.replaceAll(RegExp(r'[^a-zA-Z]'), '').toLowerCase();
  // String reversed = cleaned.split('').reversed.join();
  // return cleaned == reversed;
// }


  List<int> plusOne(List<int> digits) {
    int number = int.parse(digits.join(''));
    number+=1;
    return number.toString().split('').map(int.parse).toList();
  }

  //better solution
//   List<int> plusOne(List<int> digits) {
//   for (int i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   digits.insert(0, 1);
//   return digits;
// }
int removeElement(List<int> nums, int val) {
  int k = 0;
  List newArray = [];
  for (int i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      newArray.add(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
  List<int> twoSum(List<int> nums, int target) {
    List<int> result = [];
    for(int i = 0; i < nums.length; i++){
      for(int j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] == target){
          result.add(i);
          result.add(j);
        }
      }
    }
    return result;
  }
