function inputCheck(){
  if(document.frm1.lastname.value == ""){
    alert("姓を入力してください");
  } else if(document.frm1.firstname.value == ""){
    alert("名を入力してください");
  } else if(!document.frm1.gender[0].checked
    && !document.frm1.gender[1].checked){
    alert("性別を入力してください");
  } else if(document.frm1.bornyear.value == ""
  || document.frm1.bornmonth.value == ""
  || document.frm1.bornday.value == "") {
    alert("生年月日を入力してください");
  }
  confirm(
    document.frm1.lastname.value
    +document.frm1.firstname.value
  );
}
