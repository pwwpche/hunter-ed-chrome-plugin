setInterval(() => {
  const timer = document.querySelector('a[rel=next]');
  console.log('timer element: ', timer);
  if(timer) {
    timer.click();
  }
}, 1000);
