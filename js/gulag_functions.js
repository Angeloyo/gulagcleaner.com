
//Function that downloads all of the files in the window.cleaned array, either as a zip or as a single file.
async function downloadfile() {
  if (window.cleaned.length == 1) {
      bytes = window.cleaned[0][0]
      var blob = new Blob([bytes], {
          type: "application/pdf"
      });
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = window.cleaned[0][1].slice(0, -4) + "-gulag-free.pdf";
      link.click();
  } else if (window.cleaned.length > 1) {
      var zip = new JSZip();
      for (i in window.cleaned) {
          bytes = window.cleaned[i][0]
          zip.file(window.cleaned[i][1].slice(0, -4) + "-gulag-free.pdf", bytes);
      }
      zip.generateAsync({
              type: "blob"
          })
          .then(function(content) {
              var link = document.createElement('a');
              link.href = window.URL.createObjectURL(content);
              link.download = "PDFs-gulag-free.zip";
              link.click();
          });
  }
}

//Function to update the progrss bar to a given percentage (0 to 100)
function update_percentage(prc) {
  let percentage = document.querySelector('.percentage');
  let percentageValue = Math.round(prc)
  let progress = document.querySelector('.progress');

  percentage.textContent = percentageValue + "%";
  progress.setAttribute('style', `width:${percentageValue}%`);
}

//Function that is called when the user clicks the clean button
async function process_upload() {
  //We load all the files in the Dropzone
  filearray = Dropzone.instances[0].getAddedFiles()

  document.querySelector('.progreso').classList.remove('d-none');
  document.getElementById('PDFDrop').style.display = 'none';
  document.getElementById('panel-derecho').classList.add('d-none');
  document.getElementById('selectedFilesHeader').classList.add('d-none');
  document.getElementById('filePreviews').classList.add('d-none');
  document.getElementById('removeAdsButton-phone').classList.add('d-none');

  //This is the array where we will store the cleaned pdfs
  window.cleaned = []

  //We initialize the progress bar
  update_percentage(1)
  chunk = 100 / (filearray.length * 3)
  progress = 0

  //We iterate over all the files decrypting and cleaning them
  for (file_number_w in filearray) {

      //We load the file into memory and update the progress bar
      const reader = new FileReader();
      const fileLoaded = new Promise((resolve) => {
          reader.onload = resolve;
      });
      reader.readAsArrayBuffer(filearray[file_number_w]);
      await fileLoaded;
      data = new Uint8Array(reader.result)
      progress += chunk
      update_percentage(progress)

      //We decrypt the pdf and update the progress bar
      decrypted_pdf = await window.decrypt_pdf(data)
      if (decrypt_pdf == null) {
          change_to_error_page()
          return
      }
      progress += chunk
      update_percentage(progress)

      //We clean the pdf and update the progress bar
      cleaned_pdf = await window.clean_pdf(decrypted_pdf)
      if (cleaned_pdf == null) {
          change_to_error_page()
          return
      }
      progress += chunk
      update_percentage(progress)

      //We add the cleaned pdf to the array
      window.cleaned.push([cleaned_pdf, filearray[file_number_w].name])
  }

  if (window.cleaned.length == 0) {
      //Error page
      document.getElementById('error-page').classList.remove('d-none');
  } 

  downloadfile();
  
  document.getElementById('descarga-y-mensaje').classList.remove('d-none');
  document.getElementById('help-sharing').classList.remove('d-none');
  document.querySelector('.progreso').classList.add('d-none');

}

//Dropzone configuration
Dropzone.options.PDFDrop = {
  // click upload options
  uploadMultiple: true,
  parallelUploads: 100,
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 500, // MB
  acceptedFiles: ".pdf",
  maxFiles: 100,
  dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
  dictInvalidFileType: "Por favor, selecciona un archivo tipo PDF",
  dictFileTooBig: "PDF demasiado grande.",
  dictResponseError: "Server error: {{statusCode}}",
  dictMaxFilesExceeded: "Máximo 100 archivos!",
  dictCancelUpload: "Cancel upload",
  dictRemoveFile: "Remove file",
  dictCancelUploadConfirmation: "You really want to delete this file?",
  dictUploadCanceled: "Upload canceled",
  
  previewTemplate: `<div class="file-preview ">
    <span data-dz-name></span>
  </div>`,
  previewsContainer: "#filePreviews",

  init: function() {
    this.on('addedfile', (file) => {

      document.getElementById('selectedFilesHeader').classList.remove('d-none');
      document.getElementById('iconos-y-texto').classList.add('hidden');
      document.getElementById('iconos-y-texto').classList.add('md:hidden');
      document.getElementById('lenin-y-objetivo').classList.add('hidden');
      document.getElementById('lenin-y-objetivo').classList.add('md:hidden');
      document.getElementById('ayudanos-y-rrss').classList.add('hidden');
      document.getElementById('ayudanos-y-rrss').classList.add('md:hidden');
      document.getElementById('footer').classList.add('d-none');
      document.getElementById('eliminarpubli-text').style.display = 'none';
      document.getElementById('panel-derecho').classList.remove('d-none');
      document.getElementById('removeAdsButton').classList.remove('d-none');
      document.getElementById('removeAdsButton-phone').classList.remove('d-none');
      document.getElementById('PDFDrop').innerText = "Seleccionar más archivos PDF";

      let reader = new FileReader();

      reader.readAsArrayBuffer(file);

      reader.onload = function(event) {
        let typedArray = new Uint8Array(this.result);

        pdfjsLib.getDocument({data: typedArray}).promise.then(function(pdf) {
          return pdf.getPage(1); 
        }).then(function(page) {
          let desiredMaxDim = 200; 
          let scale = Math.min(desiredMaxDim / page.getViewport({scale: 1.0}).width, desiredMaxDim / page.getViewport({scale: 1.0}).height);
          let scaledViewport = page.getViewport({scale: scale});
          let canvas = document.createElement('canvas');
          let context = canvas.getContext('2d');
          canvas.height = scaledViewport.height;
          canvas.width = scaledViewport.width;

          let renderContext = {
            canvasContext: context,
            viewport: scaledViewport
          };

          let renderTask = page.render(renderContext);

          renderTask.promise.then(function () {
            let previewElement = file.previewElement;
            
            // Crear un div para centrar el canvas
            let canvasContainer = document.createElement('div');
            canvasContainer.style.display = 'flex';
            canvasContainer.style.justifyContent = 'center';
            canvasContainer.style.alignItems = 'center';
            canvasContainer.style.margin = 'auto';
            canvasContainer.appendChild(canvas);

            previewElement.appendChild(canvasContainer);
          });
        });
      };
    });
  },
  
  accept: function(file, done) {
  }
  
};