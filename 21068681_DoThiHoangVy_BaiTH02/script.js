function bai1(){
    const numbA = document.getElementById("numb-a").value;
    const numbB = document.getElementById("numb-b").value;
    const result = document.getElementById("ketqua")
    result.innerHTML = (numbB/numbA)*-1;

}

function bai2(){
    const name = document.getElementById("bai2-name").value;
    const phone = document.getElementById("bai2-sdt").value;
    const email = document.getElementById("bai2-email").value;
    const option = document.getElementById("input-customer-type");
    const optionText = option.options[option.selectedIndex].text;
    const mathe = document.getElementById("bai2-card").value;   
    const invoiceid = document.getElementById("bai2-invoice").value;
    const textarea = document.getElementById("input-description").value;
    window.alert("Họ và tên" +name +"\n Mã thẻ:" + mathe +"\n Số điện thoại:"+ phone +"Email:" +email +"\n 123"+"\n Loại KH" +optionText +"\n Nội dung góp ý "+ textarea
    );

}

function bai3(){
const hoten = document.getElementById("bai3-name").value;
const email = document.getElementById("bai3-email").value;
const title = document.getElementById("bai3-title").value;
const textarea = document.getElementById("bai3-input-description").value;
const confirmBox = confirm(
    "Họ và tên" +hoten +"Email:" +email  +"\n Nội dung góp ý "+ textarea
);
}

function bai4(){
    const health = [
        {
             loai: '0',
             message: 'Khám định kì'
         },
         {
             loai: '1',
             message: 'Tập thể dục thường xuyên'
         },
         {
             loai: '2',
             message: 'Hạn chế ăn mỡ động vật'
         }
     ]
     const weight = parseFloat(document.getElementById("weight").value);
     const height = parseFloat(document.getElementById("height").value);
     const bai4Select = document.getElementById("bai4-select");
     const bai4Option =  bai4Select.options[bai4Select.selectedIndex].value;
     const BMI = weight/(height*height)
     for(let i =0 ; i< health.length ; i++){
        const loaiVar = health[i].loai
        if(bai4Option===loaiVar){
            console.log(health[i].message)
          document.getElementById("message").innerHTML = health[i].message
        }
       }
    document.getElementById("bai4-number").innerHTML = BMI
    const categories = document.getElementById("categories")
    if(BMI<18.5){
    categories.innerHTML = "Dưới chuẩn"
    }else if(BMI > 18.5 && BMI <24.9){
        categories.innerHTML = "Bình thường"
    }else if(BMI>25 && BMI<29.9){
        categories.innerHTML = "Thừa cân"
    }else if(BMI>30 && BMI<34.9){
        categories.innerHTML = "Béo phì cấp I"
    }else if(BMI>35 && BMI<39.9){
        categories.innerHTML = "Béo phì cấp II"
    }else{
        categories.innerHTML = "Béo phì cấp III"
    }
}
   
function bai5(){
    const tentk = document.getElementById("bai5-name");
    var passWord = document.getElementById("bai5-password");
    const conFirm = confirm("Hiện mật khẩu");
    if(conFirm){
        passWord.type = 'text';
    }
}


