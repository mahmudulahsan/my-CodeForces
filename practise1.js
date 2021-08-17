

var get = document.querySelector('#get');

get.addEventListener('click', (e) => {

    var lo = document.querySelector('#lo').value;
    var hi = document.querySelector('#hi').value;

    fetch('https://codeforces.com/api/problemset.problems?')
    .then(res => res.json())
    .then(data => {

            var arr = data.result.problems;
            var table = document.querySelector('#myTable1');
            var output = [];

            function buildTable(arr){
                var c = 1;  
                var len = arr.length;                   
    
                for(var i = 0; i<len; i++){
                    if(arr[i].rating>=lo && arr[i].rating<=hi){
                          
                        var row =`
                        <tr>
                            <td class="bg-dark text-white">${c}</td>
                            <td class="bg-secondary text-white">${arr[i].name}</td>
                            <td class="bg-secondary text-white">${arr[i].rating}</td>
                            <td class="bg-secondary">${arr[i].tags}</td>
                            <td class="bg-info text-white"><a target="_blank" href="https://codeforces.com/problemset/problem/${arr[i].contestId}/${arr[i].index}">Link</a></td>
                        </tr>
                        `
                          // table.innerHTML +=row;
                          output.push(row);
                          c++;
                        //   if(c>100) break;
                      }
                    }
                   }
                   buildTable(arr);
                   console.log("mahi");
                   table.innerHTML = output.join(' ')
    })
})



