let formset = (button) => {
  document.getElementById("textform").value = `>>${button.id}\n`;
  //  console.log(button.id);
};

let getfocus = function () {
  const focusobj = document.getElementById("textform");
  focusobj.focus();
  let len = focusobj.value.length;
  focusobj.setSelectionRange(len, len);
  //  console.log(focusid);
  // console.log(document.getElementById("textform"));
};

let delayfocus = function () {
  setTimeout("getfocus();", 300);
};

let pswitch = function () {
  var p = document.getElementById("down-menu");
  if (p.style.position == "sticky" || p.style.position == "") {
    p.style.position = "relative";
    textswitch.innerHTML = "表示";
  } else {
    p.style.position = "sticky";
    textswitch.innerHTML = "隠す";
  }
};

var c = "none";
var jqfadein = function (el) {
        if (c == "none") {
            $(el).fadeIn(150);
            c = el;
        } else if(c == el) {
            $(el).fadeOut(100);
              c = "none";
        } else if (c != el) {
            $(c).fadeOut(100);
            $(el).delay(100).fadeIn(150);
            c = el;
        }
      
        console.log(c);
};

