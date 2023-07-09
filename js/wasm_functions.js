// Load and init qpdf, used for decryption
import Module from "./qpdf.mjs";
window.qpdf = await Module();
window.qpdf.FS.mkdir("/working");

// We define the decrypt_pdf function
window.decrypt_pdf = async function(pdffilearray) {
    await window.qpdf.FS.writeFile("/working/encrypted.pdf", pdffilearray);
    const exitStatus = await window.qpdf.callMain(["--password=",
        "--decrypt",
        "/working/encrypted.pdf",
        "/working/decrypted.pdf"
    ]);

    // 0 = success, 3 = success with warnings. If it is not one of these, we return null
    if (exitStatus == 0 || exitStatus == 3) {
        var data = await window.qpdf.FS.readFile("/working/decrypted.pdf");
        return data;
    } else {
        return null;
    }
}

// We load the wasm module of gulagcleaner and define the clean_pdf function
import init, {
    process_pdf
} from "./gulagcleaner_rust.js";
init().then(() => {
    window.clean_pdf = async function(data) {
        try {
            var cleaned_pdf = await process_pdf(data);
            return cleaned_pdf
        } catch (e) {
            console.log(e);
            return null;
        }
    };
});