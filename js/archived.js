// init: function () {
  //   this.on('addedfile', function() {
  //     // Agrega la visibilidad al encabezado cuando se agrega el primer archivo
  //     if (this.files.length === 1) {
  //       document.getElementById('selectedFilesHeader').style.display = 'block';
  //       document.getElementById('removeAdsButton').style.display = 'block';
  //       // document.getElementById('restartProcess').style.display = 'block';
  //     }

  //     // Crea un nuevo FileReader
  //     let reader = new FileReader();

  //     // Lee el archivo como un ArrayBuffer
  //     reader.readAsArrayBuffer(file);

  //     reader.onload = function(event) {
  //       // Crea un TypedArray del ArrayBuffer
  //       let typedArray = new Uint8Array(this.result);

  //       // Usa PDF.js para obtener el primer lienzo de página
  //       pdfjsLib.getDocument({data: typedArray}).promise.then(function(pdf) {
  //         return pdf.getPage(1);  // Primera página
  //       }).then(function(page) {
  //         // Dimensiones para el lienzo
  //         let viewport = page.getViewport({scale: 1.0});
  //         let canvas = document.createElement('canvas');
  //         let context = canvas.getContext('2d');
  //         canvas.height = viewport.height;
  //         canvas.width = viewport.width;

  //         // Renderiza la página en el lienzo
  //         let renderContext = {
  //           canvasContext: context,
  //           viewport: viewport
  //         };
  //         let renderTask = page.render(renderContext);

  //         renderTask.promise.then(function () {
  //           // Agrega el lienzo al elemento de vista previa
  //           let previewElement = file.previewElement;
  //           previewElement.appendChild(canvas);
  //         });
  //       });
  //     };  
      
  //   });
  // },


  // let canvas = document.createElement('canvas');
          // let context = canvas.getContext('2d');
          // canvas.height = viewport.height;
          // canvas.width = viewport.width;

          // // Renderiza la página en el lienzo
          // let renderContext = {
          //   canvasContext: context,
          //   viewport: viewport
          // };



// init: function() {
// // Aquí cambiamos 'function()' por '() =>'
// this.on('addedfile', (file) => {
//     // El resto de tu código se mantiene igual
//     if (this.files.length === 1) {
//     document.getElementById('selectedFilesHeader').style.display = 'block';
//     document.getElementById('removeAdsButton').style.display = 'block';
//     // document.getElementById('restartProcess').style.display = 'block';
//     }
    
//     // Crea un nuevo FileReader
//     let reader = new FileReader();

//     // Lee el archivo como un ArrayBuffer
//     reader.readAsArrayBuffer(file);

//     reader.onload = function(event) {
//     // Crea un TypedArray del ArrayBuffer
//     let typedArray = new Uint8Array(this.result);

//     // Usa PDF.js para obtener el primer lienzo de página
//     pdfjsLib.getDocument({data: typedArray}).promise.then(function(pdf) {
//         return pdf.getPage(1);  // Primera página
//     }).then(function(page) {
//         // Dimensiones para el lienzo
//         let viewport = page.getViewport({scale: 1.0});

//         let desiredMaxDim = 200; // Tamaño máximo en píxeles para la vista previa
//         let scale = Math.min(desiredMaxDim / viewport.width, desiredMaxDim / viewport.height);
//         let scaledViewport = page.getViewport({scale: scale});
//         let canvas = document.createElement('canvas');
//         let context = canvas.getContext('2d');
//         canvas.height = scaledViewport.height;
//         canvas.width = scaledViewport.width;

//         // Renderiza la página en el lienzo
//         let renderContext = {
//         canvasContext: context,
//         viewport: scaledViewport
//         };


//         let renderTask = page.render(renderContext);

//         renderTask.promise.then(function () {
//         // Agrega el lienzo al elemento de vista previa
//         let previewElement = file.previewElement;
//         previewElement.appendChild(canvas);
//         });
//     });
//     };
// });
// },