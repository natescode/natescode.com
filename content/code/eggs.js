const height = 100;
const floor = 72;

function egg(n) {
  let step = 1;
  for (let i = n; i > 0; i -= step) {
    // drop egg
    // if it breaks

    if (i !== 72)
      // try floors (i + 1) to i + step
      for (let j = i + 1; j < i + step; ++j) {
        // drop egg
      }
    // else keep going
    step++;
  }
}

// 100, 99, 97, 94, 90, 85
