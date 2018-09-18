function product(a = array) { 
    var n = a.length-1;
    var product = a[0]*a[1];

        for (var i=2; i < n+1; i++)
        {

          product = product*a[i];
        }
      return product;

}


var b = product([5, 5, 5, 5, 5]);

document.write(b);



