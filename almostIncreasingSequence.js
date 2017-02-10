/*

Given a sequence of integers, check whether it is possible to obtain a strictly increasing sequence by erasing no more than one element from it.

Example

    For sequence = [1, 3, 2, 1], the output should be

    almostIncreasingSequence(sequence) = false;
    For sequence = [1, 3, 2], the output should be

    almostIncreasingSequence(sequence) = true.


*/




function almostIncreasingSequence(sequence) {

  for(var erasedIndex = 0; erasedIndex < sequence.length; erasedIndex++) {
    var increasing = true,
      last = 0,
      start = 1;

    if(!erasedIndex) {
      last = 1;
      start = 2;
    }

    for(var j = start; j < sequence.length; j++) {
      if(j === erasedIndex) {
        continue;
      }
      if(sequence[j] <= sequence[last]) {
        increasing = false;
        break;
      }
      last = j;
    }

    if(increasing) {
      return true;
    }
  }

  return false;
}