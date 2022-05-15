const parent = document.getElementsByClassName("shuffle_display");
var class_number = 10;
var number = new Array(100);

const element = document.getElementsByClassName("ef")[0];

for (let j = 0; j < 2; j++) {
    for (let i = 0; i < class_number / 2; i++) {
      const new_div = document.createElement("div");
      new_div.className = "box_display_"+j+" box";
      parent[j].appendChild(new_div);
      const new_p = document.createElement("p");
      new_p.className = "number_"+j+" number";
      new_p.textContent="xx";
      new_div.appendChild(new_p);
      }
  }

document.getElementsByClassName("shuffle_button")[0].addEventListener("click",() =>{
    if(0 < element.value && element.value <= 100){
       
        let p0 = document.getElementsByClassName('shuffle_display')[0];
        while(p0.lastChild){
            p0.removeChild(p0.lastChild);
        }
        let p1 = document.getElementsByClassName('shuffle_display')[1];
        while(p1.lastChild){
            p1.removeChild(p1.lastChild);
        }


        class_number = element.value;

        for (let j = 0; j < 2; j++) {
          for (let i = 0; i < class_number / 2; i++) {
            const new_div = document.createElement("div");
            new_div.className = "box_display_"+j+" box";
            parent[j].appendChild(new_div);
            const new_p = document.createElement("p");
            new_p.className = "number_"+j+" number";
            new_p.textContent="xx";
            new_div.appendChild(new_p);
            }
        }
        for (let i = 0; i < class_number; i++) {
            number[i] = i + 1;
        }
        Shuffle();
    }

    // console.log(element.value);
});

function Shuffle(){
    arrayShuffle(number);

    let num_element = document.getElementsByClassName("number");
    
    for (let i = 0; i < class_number; i++) {
        if(number[i] < 10)
            num_element[i].textContent = "0"+number[i];
        else
            num_element[i].textContent = number[i];
    }
    
}

function arrayShuffle(array) {
    for(var i = (class_number - 1); 0 < i; i--){
  
      // 0〜(i+1)の範囲で値を取得
      var r = Math.floor(Math.random() * (i + 1));
  
      // 要素の並び替えを実行
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
}