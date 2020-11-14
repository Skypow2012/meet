function debounce(fn, wait = 200) {
  var timeId = null;
  function helper() {
    console.log(helper);
    if (timeId) {
      clearTimeout(timeId);
      timeId = null;
    } else {
      timeId = setTimeout(function () {
        fn();
      }, wait)
    }
    console.log(!!timeId == true, 'timeId')
  }
  return helper;
}

function calc() {
  // 高频率的复杂计算
  console.log("calc trigger");
}

// calc();
// calc();
// calc();
// calc();
// calc();

const debounceCalc = debounce(calc);

debounceCalc();
debounceCalc();
debounceCalc();
debounceCalc();
debounceCalc();