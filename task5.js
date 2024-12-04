// const fetchUrl = ( url)=> { console.log(fetching ${url}); }

// const debounce = ()=>{

// }

// const fetching = debounce(fetchUrl, 500)

// fetching(1) fetching(2) fetching(3) fetching(4) fetching(5)

const debounce = (callback, delay) => {
  return (arg) => {
    setTimeout(() => {
      callback(arg);
    }, delay);
  };
};

const fetchUrl = (url) => {
  console.log(`fetching ${url}`);
};

const fetching = debounce(fetchUrl, 5000);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
