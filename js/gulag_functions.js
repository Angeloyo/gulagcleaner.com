//Function that resets the page.
function reset_page() {
  window.location.href = "/"
}

//Functions that change the page to the progress bar page.
function change_to_progress_bar_page(filename) {
  document.getElementById("headerino").innerHTML = '<div class="page-header section-height-100"><div class="oblique position-absolute top-49 h-100 d-md-block d-none" style="z-index: 9"><div class="alert alert-primary text-black col-md-7 bg-cover position-absolute fixed-top h-0 z-index-0 ms-n0"><div class="container"><h3 class="text-dark mb-0">¡Ayudanos a expandirnos!</h3><div style="line-height:50%;"><br></div><h5 class="text-light">Necesitamos tu ayuda para difundir la web entre la comunidad de estudiantes. <br><div style="line-height:50%;"><br></div>¡Ayudanos compartiendola con tus compañeros de clase o poniendo un mensaje en tus redes sociales! </h5><!-- Sharingbutton Facebook --><a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on Facebook"><div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg></div>Compartir en Facebook</div></a><!-- Sharingbutton Twitter --><a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!&amp;url=https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on Twitter"><div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg></div>Compartir en Twitter</div></a><!-- Sharingbutton E-Mail --><a class="resp-sharing-button__link" href="mailto:?subject=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!&amp;body=https%3A%2F%2Fgulagcleaner.com" target="_self" rel="noopener" aria-label="Compartir por E-Mail"><div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg></div>Compartir por E-Mail</div></a><!-- Sharingbutton WhatsApp --><a class="resp-sharing-button__link" href="whatsapp://send?text=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!%20https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on WhatsApp"><div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg></div>Compartir en WhatsApp</div></a><!-- Sharingbutton Telegram --><a class="resp-sharing-button__link" href="https://telegram.me/share/url?text=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!&amp;url=https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on Telegram"><div class="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"/></svg></div>Compartir en Telegram</div></a></div></div></div><div class="container"><div class="row"><div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"><h1 class="text-gradient text-primary" style="display: block; margin: auto;text-align: center;">Descarga lista <br> ¡Gracias por usar Gulag Cleaner!</h1><p class="lead pe-1 me-1" style="padding: 25px;display: block; margin: auto;text-align: center;border: 2px dashed #014ffe;min-height: 150px;display: block; margin: 3%;display: flex;justify-content: center;align-items: center;"> ' +
      filename.slice(0, -4) + "-gulag-free.pdf" + '</p><div class="buttons"><button onclick="downloadfile()" type="button" class="btn bg-gradient-primary mt-4" style="display: block; margin: auto;"> <font size="+2">DESCARGAR PDF SIN PUBLICIDAD</font></button><button="" onclick="reset_page()" type="button" class="btn bg-gradient-warning mt-4" style="display: block; margin: auto;"> <font size="+2">HAZ CLICK AQUÍ PARA LIMPIAR OTRO PDF</font></button=""></div></div></div></div></div>'
}

function change_to_progress_bar_page_multi() {
  document.getElementById("headerino").innerHTML = '<div class="page-header section-height-100"><div class="oblique position-absolute top-49 h-100 d-md-block d-none" style="z-index: 9"><div class="alert alert-primary text-black col-md-7 bg-cover position-absolute fixed-top h-0 z-index-0 ms-n0"><div class="container"><h3 class="text-dark mb-0">¡Ayudanos a expandirnos!</h3><div style="line-height:50%;"><br></div><h5 class="text-light">Necesitamos tu ayuda para difundir la web entre la comunidad de estudiantes. <br><div style="line-height:50%;"><br></div>¡Ayudanos compartiendola con tus compañeros de clase o poniendo un mensaje en tus redes sociales! </h5><!-- Sharingbutton Facebook --><a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on Facebook"><div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg></div>Compartir en Facebook</div></a><!-- Sharingbutton Twitter --><a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!&amp;url=https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on Twitter"><div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg></div>Compartir en Twitter</div></a><!-- Sharingbutton E-Mail --><a class="resp-sharing-button__link" href="mailto:?subject=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!&amp;body=https%3A%2F%2Fgulagcleaner.com" target="_self" rel="noopener" aria-label="Compartir por E-Mail"><div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg></div>Compartir por E-Mail</div></a><!-- Sharingbutton WhatsApp --><a class="resp-sharing-button__link" href="whatsapp://send?text=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!%20https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on WhatsApp"><div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg></div>Compartir en WhatsApp</div></a><!-- Sharingbutton Telegram --><a class="resp-sharing-button__link" href="https://telegram.me/share/url?text=%C2%A1Elimina%20los%20anuncios%20de%20tus%20apuntes%20totalmente%20gratis!&amp;url=https%3A%2F%2Fgulagcleaner.com" target="_blank" rel="noopener" aria-label="Share on Telegram"><div class="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"/></svg></div>Compartir en Telegram</div></a></div></div></div><div class="container"><div class="row"><div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"><h1 class="text-gradient text-primary" style="display: block; margin: auto;text-align: center;">Descarga lista <br> ¡Gracias por usar Gulag Cleaner!</h1><p class="lead pe-1 me-1" style="padding: 25px;display: block; margin: auto;text-align: center;border: 2px dashed #014ffe;min-height: 150px;display: block; margin: 3%;display: flex;justify-content: center;align-items: center;"> PDFs-gulag-free.zip </p><div class="buttons"><button onclick="downloadfile()" type="button" class="btn bg-gradient-primary mt-4" style="display: block; margin: auto;"> <font size="+2">DESCARGAR LOS PDF SIN PUBLICIDAD</font></button><button="" onclick="reset_page()" type="button" class="btn bg-gradient-warning mt-4" style="display: block; margin: auto;"> <font size="+2">HAZ CLICK AQUÍ PARA LIMPIAR MÁS PDF</font></button=""></div></div></div></div></div>'
}

//Functions that change the page to the download page.
function change_to_download_page(filename) {
  document.getElementById("headerino").innerHTML = '<div class="page-header section-height-100"><div class="oblique position-absolute top-0 h-100 d-md-block d-none"><div class="bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url(/static/assets/img/curved-images/gulag.jpg)"></div></div><div class="container"><div class="row"><div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"><h1 class="text-gradient text-primary" style="display: block; margin: auto;text-align: center;">Procesando PDF...</h1><div class="bar"><div class="progress bg-gradient-primary"></div></div><div class="percentage"></div><p class="lead pe-1 me-1" style="padding: 25px;display: block; margin: auto;text-align: center;border: 2px dashed #014ffe;min-height: 150px;display: block; margin: 3%;display: flex;justify-content: center;align-items: center;"> ' +
      filename.slice(0, -4) + "-gulag-free.pdf" + '</p></div></div></div></div>'
}

function change_to_download_page_multi() {
  document.getElementById("headerino").innerHTML = '<div class="page-header section-height-100"><div class="oblique position-absolute top-0 h-100 d-md-block d-none"><div class="bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url(/static/assets/img/curved-images/gulag.jpg)"></div></div><div class="container"><div class="row"><div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"><h1 class="text-gradient text-primary" style="display: block; margin: auto;text-align: center;">Procesando PDF...</h1><div class="bar"><div class="progress bg-gradient-primary"></div></div><div class="percentage"></div><p class="lead pe-1 me-1" style="padding: 25px;display: block; margin: auto;text-align: center;border: 2px dashed #014ffe;min-height: 150px;display: block; margin: 3%;display: flex;justify-content: center;align-items: center;"> Procesando varios archivos, puede tardar un poco...</p></div></div></div></div>'
}

//Function that changes the page to the progress bar page.
function change_to_error_page() {
  document.getElementById("headerino").innerHTML = '<div class="page-header section-height-100"><div class="oblique position-absolute top-0 h-100 d-md-block d-none"><div class="bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url(/static/assets/img/curved-images/gulag.jpg)"></div></div><div class="container"><div class="row"><div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"><h1 class="text-gradient text-danger" style="display: block; margin: auto;text-align: center;">Se ha producido un error al eliminar la publicidad</h1><p class="lead pe-1 me-1" style="padding: 5px;display: block; margin: auto;text-align: center;border: 2px dashed #014ffe;min-height: 150px;display: block; margin: 3%;display: flex;justify-content: center;align-items: center;">Envíanos el PDF a gulagcleaner@gmail.com o utilizando el formulario de abajo e investigaremos el problema. ¡Gracias! </p><div class="buttons"><button="" onclick="reset_page()" type="button" class="btn bg-gradient-warning mt-4" style="display: block; margin: auto;"> <font size="+2">HAZ CLICK AQUÍ PARA LIMPIAR OTRO PDF</font></button=""></div></div></div></div></div>'
}

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
  // let percentage = document.querySelector('.percentage');
  let percentageValue = Math.round(prc)
  let progress = document.querySelector('.progress');

  // percentage.textContent = percentageValue + "%";
  // progress.setAttribute('style', `width:${percentageValue}%`);
}

//Function to add an upper button when there are a lot of files in the dropzone
function add_upper_button() {
  // if (Dropzone.instances[0].getAddedFiles().length > 2) {
  //     document.querySelector("#upper-button-add-later").innerHTML ='<div class="buttons"><button type="button" onclick="process_upload()" class="btn bg-gradient-warning mt-4" style="display: block; margin: auto;"> <font size="+2">Haz click aquí para comenzar a limpiar</font></button></div>'
  // }
  document.querySelector("#lower-button-add-later").innerHTML = '<div class="buttons"><button type="button" onclick="process_upload()" class="btn bg-gradient-warning mt-4" style="display: block; margin: auto;"> <font size="+2">Haz click aquí para comenzar a limpiar</font></button></div>'
}

//Function that is called when the user clicks the clean button
async function process_upload() {
  //We load all the files in the Dropzone
  filearray = Dropzone.instances[0].getAddedFiles()
  // if (filearray.length > 1) {
  //     change_to_download_page_multi()
  // } else {
  //     change_to_download_page(filearray[0].name)
  // }

  //This is the array where we will store the cleaned pdfs
  window.cleaned = []

  //We initialize the progress bar
  // update_percentage(1)
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
      // update_percentage(progress)

      //We decrypt the pdf and update the progress bar
      decrypted_pdf = await window.decrypt_pdf(data)
      if (decrypt_pdf == null) {
          change_to_error_page()
          return
      }
      progress += chunk
      // update_percentage(progress)

      //We clean the pdf and update the progress bar
      cleaned_pdf = await window.clean_pdf(decrypted_pdf)
      if (cleaned_pdf == null) {
          change_to_error_page()
          return
      }
      progress += chunk
      // update_percentage(progress)

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
  previewTemplate: `<div class="file-preview text-2xl">
    <span class="dark:text-white" data-dz-name></span>
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