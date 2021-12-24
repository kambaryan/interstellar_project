function listchange(index){
  let arrayindex=["672", "44736", "59504", "5870", "83708", "49416", "64885", "60028", "99147", "20432", "4974", "20405"];
  let url="https://api.tvmaze.com/people/"+arrayindex[index];
  
    $.ajax({
    url: url,
    method: 'get',
    dataType: 'json',

    success:function (data) {  
      let swapphoto=document.querySelector('.header_photo');
      let photo = new Image();
      photo.src= data.image.medium;
      swapphoto.innerHTML="";
      swapphoto.appendChild(photo);
      let swaptext=document.querySelector('.header_info');
      let text=document.createTextNode(data.name+"   " + data.gender +"     "+ data.country.name+"      " +
      data.country.code+ "    "+ data.country.timezone+ "    "+data.birthday);
      swaptext.innerHTML="";
      swaptext.appendChild(text);
    }})
}
window.onload = function() {
    for(let i=1; i<13; i++){
        let per='person'+i;
  let change = document.getElementById(per);
  change.addEventListener("click", function(){
    listchange(i-1);
 })
}
}
