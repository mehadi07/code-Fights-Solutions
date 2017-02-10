//solution 1

function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
};

makeArrayConsecutive2([1,2,3]); //0

//solution 2

function makeArrayConsecutive2(statues) {
    statues=statues.sort(function(a, b) {
  return a - b;
});
    var s=statues[0];
    var b=statues[statues.length-1];
    return (b-s-1)-statues.length+2;
};

makeArrayConsecutive2([1,2,3]); //0

