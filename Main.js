/* go thru and make on/off classes to clean up code */

$("#nav-sub").hover(function() {
  $("#nav-icon").css("transform","rotate(90deg)");
  $("#nav-icon").css("background","black");
  $("#nav-icon").css("border-top-left-radius","50%");
  $("#nav-icon").css("border-bottom-left-radius","50%");
}, function() {
  $("#nav-icon").css("transform","rotate(0deg)");
  $("#nav-icon").css("background","none");
  $("#nav-icon").css("border-top-left-radius","0%");
  $("#nav-icon").css("border-bottom-left-radius","0%");
});

$("#nav-icon").hover(function() {
  $("#nav-icon").css("background","black");
  $("#nav-icon").css("color","white");
  $("#nav-icon").css("transform","rotate(90deg)");
  $("#nav-icon").css("border-top-left-radius","50%");
  $("#nav-icon").css("border-bottom-left-radius","50%");
  $("#nav-icon").css("transition","0.4s");
}, function() {
  $("#nav-icon").css("background","none");
  $("#nav-icon").css("color","grey");
  $("#nav-icon").css("transform","rotate(0deg)");
  $("#nav-icon").css("border-top-left-radius","0%");
  $("#nav-icon").css("border-bottom-left-radius","0%");
  $("#nav-icon").css("transition","0.4s");
})


/* figure out how to make this work 
$("#nav-icon").hover(function() {
  $(this).addClass("nav-icon-on")
}, function() {
  $(this).addClass("nav-icon-off")
})
*/

/* Copy Email Text */

/* set image easter egg */
function pfpHover() {
  $("#personal-thumbnail").attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1438993/PFPCurve.jpg")
};

function pfpUnHover() {
  $("#personal-thumbnail").attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1438993/PFPHoco.jpg")
};

// EXP --Go back and see if we can make currentSlide a reusable variable so no repeat
var slideCtnr = $("#slideshow-ctnr");
var slideItems = $("#slideshow-ctnr").children(".ss-obj");
var slideLength = slideCtnr.children(".ss-obj").length;

function updateSlide(pos) {
  pos += 1;
  $("#currentSlide").text(pos);
}

function slide_Start() {
  // init slideshow and hide all but first element
  for (let i = 1; i < slideItems.length;i++) {
    slideItems.eq(i).css("display", "none");
  };
  $("#slideAmount").html(slideLength);
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
};

// when running if/else and calc index, used class arg and numerical exp so didnt calc btns, purely for clarity as btns are not a ssElem

function nextSlide() {
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  if (currentSlide.index(".ss-obj")+1 < slideLength) {
    currentSlide.next().show();
    currentSlide.hide();
  }
  else {
    slideItems.first().show();
    currentSlide.hide();
  };
  currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
};

function lastSlide() {
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  if (currentSlide.index(".ss-obj") > 0) {
    currentSlide.prev().show();
    currentSlide.hide();
  }
  else {
    slideItems.last().show();
    currentSlide.hide();
  };
  currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
}

window.onload = slide_Start();
var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "C" && 
    button.textContent != "x" && 
    button.textContent != "÷" && 
    button.textContent != "√" && 
    button.textContent != "x ²" && 
    button.textContent != "%" && 
    button.textContent != "<=" && 
    button.textContent != "±" && 
    button.textContent != "sin" && 
    button.textContent != "cos" && 
    button.textContent != "tan" && 
    button.textContent != "log" && 
    button.textContent != "ln" && 
    button.textContent != "x^" && 
    button.textContent != "x !" && 
    button.textContent != "π" && 
    button.textContent != "e" && 
    button.textContent != "rad" 
    && button.textContent != "∘") {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x ²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x !") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "∘") {
      degrees();
    }
  });
});


function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}


function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    checkLength()
    syntaxError()
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = (display.value * Math.PI);
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}
