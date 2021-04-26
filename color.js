var Body = {
  /* 배경색을 지정(color는 매개변수) */
  SetBackgroundColor:function(color) {
    // var bodyTarget = document.querySelector('body')
    // bodyTarget.style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  },
  /* Body의 글자색을 지정(color는 매개변수) */
  SetColor:function(color) {
    // var bodyTarget = document.querySelector('body')
    // document.querySelector('body').style.color=color;
    $('body').css('color', color);
  }
}
var List = {
  /*
   * <a>태그를 전부 가져와 변수에 저장(배열 형태와 흡사한 값이 나옴)
   * while문을 사용하여 반복
   * 글자의 색상을 매개변수 color를 이용하여 바꿈
   */
   SetAllColor:function(color) {
     var i = 0;
     var aTag = document.querySelectorAll('a')
     while(i < aTag.length) {
       aTag[i].style.color=color;
       i++;
     }
   },
   /*
    * <a>태그를 전부 가져와 변수에 저장(배열 형태와 흡사한 값이 나옴)
    * while문 안에 if문을 사용하여 제목과 목록의 색상의 차이를 줌
    * 인덱스가 0일 때 글자의 색상을 매개변수 head로 바꿈
    * 그 외의 인덱스에서는 글자의 색상을 매개변수 list로 바꿈
    */
    SetColor:function(head, list) {
      i = 0;
      aTag = document.querySelectorAll('a')
      while(i < aTag.length) {
        if(i === 0) {
          aTag[i].style.color=head;
          i++;
        }
        else {
          aTag[i].style.color=list;
          i++;
        }
      }
    }
}
/* 버튼의 value를 변경(self와 mode는 매개변수) */
function ChangeButtonValue(self, mode) {
  self.value=mode;
}
