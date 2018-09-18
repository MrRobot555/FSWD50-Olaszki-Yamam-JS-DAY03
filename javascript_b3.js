function product(a = array) { 
    var n = a.length-1;
    var product = a[0]*a[1];

        for (var i=2; i < n+1; i++)
        {

          product = product*a[i];
        }
      return product;

}


var b = product([1, 3, 7, 10, 2]);

document.write(b);



