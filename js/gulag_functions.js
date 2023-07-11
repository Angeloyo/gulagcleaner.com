
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

  document.querySelector('.progreso').style.display = 'block';
  document.getElementById('removeAdsButton').style.display = 'none';
  document.getElementById('PDFDrop').style.display = 'none';

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

  // if (window.cleaned.length == 0) {
  //     //Error page
  //     change_to_error_page()
  // } else if (window.cleaned.length == 1) {

  //     change_to_progress_bar_page(filearray[0].name)
  // } else if (window.cleaned.length > 1) {
  //     change_to_progress_bar_page_multi()
  // }

  downloadfile();

  document.getElementById('restartProcess').style.display = 'block';
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
  dictDefaultMessage: `Seleccionar archivo PDF`, // message display on drop area
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
  init: function () {
    this.on('addedfile', function() {
      // Agrega la visibilidad al encabezado cuando se agrega el primer archivo
      if (this.files.length === 1) {
        document.getElementById('selectedFilesHeader').style.display = 'block';
        document.getElementById('removeAdsButton').style.display = 'block';
        // document.getElementById('restartProcess').style.display = 'block';
      }
    });
  },
  accept: function(file, done) {
  }
};

  // accept: function(file, done) {
  //     file.previewElement.children[2].remove();
  //     file.previewElement.children[1].children[0].remove();
  //     // file.previewElement.querySelector("img").parentElement.classList = []
  //     // file.previewElement.querySelector("img").src = "./static/assets/img/pdf.png";
  //     // file.previewElement.querySelector("img").width = 120;
  //     // file.previewElement.querySelector("img").height = 120;
  //     add_upper_button()
  // }