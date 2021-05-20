function rowSum(n)
{var sum=0;
for(var i = 1; i <= n; i++){
if (i % 2 == 1) sum += i}
return sum;}          
module.exports = rowSum;
