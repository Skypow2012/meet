// const promise1 = new Promise(resolve => setTimeout(resolve, 5000));

// const promise2 = Promise.resolve(200);

// Promise.all([promise1, promise2])
  // .then(() => {
  //   console.log('已完成');
  // })
  // .catch(() => {
  //   console.log('已拒绝');
  // })

let a = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log('123')
    resolve();
  }, 2000)
})

let b = async function() {
  return await a;
}

async function main() {
  await a;
  console.log('1')
  await b();
  console.log('1243')
}

main()