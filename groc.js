function items(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           
         var response=JSON.parse(this.responseText);   
        var output="<table><th>Serial Number</th><th>Item Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></table>";
            for(var i=0;i<response.length;i++){
                output+=("<tr><td>"+response[i].serial_number+"</td><td>"+response[i].Item_Name+"</td><td>"+response[i].Quantity+"</td><td>"+response[i].Unit+"</td><td>"+response[i].dep+"</td><td>"+response[i].Notes+"</td></tr>");
                
            } 
            document.getElementById("myTable").innerHTML=output;
        }
    }
  xhttp.open("GET","grocery.json",true);
  xhttp.send();
    }
