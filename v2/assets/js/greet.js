var data = [
    [0, 12, "Good morning"],
    [12, 18, "Good afternoon"],
    [18, 20, "Good evening"],
    [20, 24, "Good night"]
],
    hr = new Date().getHours();

for(var i=0; i<data.length;i++){
    if(hr >= data[i][0] && hr <= data[i][1]){
        $("body").html(data[i][2]);
        break;
    }
}
