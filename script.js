function Calculator() {

    let weight = document.querySelector("#WeightInKg").value;
    let height = document.querySelector("#HeightInMetres").value;
    let res = weight/height*height;
    alert(res);

    if(res==18.5||res==24.5)
    {
        alert("your healthy");
    }
    else if(res>24.5)
    {
        alert("your overweight");
    }
    else if(res<18.5)
    {
        alert("your underweight");
    }
}
