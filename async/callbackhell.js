  
  const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
  const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
  const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

function download(url, callback) {
    setTimeout(() => {
      console.log(`Downloading ${url} ...`);
      callback(url);
    }, 1000);
  }

  
  download(url1, function (url) {
    console.log(`Processing 1 ${url}`);
    download(url2, function (url) {
      console.log(`Processing 2 ${url}`);
      download(url3, function (url) {
        console.log(`Processing 3 ${url}`);
      });
    });
  });




  function download(url) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        resolve(url);
      }, 1000);
    });
  }
  
//   const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
//   const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
//   const url3 = 'https://www.javascripttutorial.net/pic3.jpg';
  
//   download(url1)
//     .then(url => {
//       console.log(`Processing ${url}`);
//       return download(url2);
//     })
//     .then(url => {
//       console.log(`Processing ${url}`);
//       return download(url3);
//     })
//     .then(url => {
//       console.log(`Processing ${url}`);
//     })
//     .catch(error => {
//       console.error(error);
//     });


// async function downloadAsync(url) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log(`Downloading ${url} ...`);
//         resolve(url);
//       }, 1000);
//     });
//   }
  
//   async function processDownloads() {
//     try {
//       const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
//       const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
//       const url3 = 'https://www.javascripttutorial.net/pic3.jpg';
  
//       const processedUrl1 = await downloadAsync(url1);
//       console.log(`Processing ${processedUrl1}`);
  
//       const processedUrl2 = await downloadAsync(url2);
//       console.log(`Processing ${processedUrl2}`);
  
//       const processedUrl3 = await downloadAsync(url3);
//       console.log(`Processing ${processedUrl3}`);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   processDownloads();
  
  