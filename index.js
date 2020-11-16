const fs = require('fs');
const pdftoimage = require('pdftoimage');

const pdfPath = __dirname + '/pdf/form.pdf';
const outputPath = __dirname + '/out/';

fs.existsSync(pdfPath);

if (!fs.existsSync(pdfPath)) {
    console.log('pds path not valid');
    return;
}

if (!fs.existsSync(outputPath)) {
    console.log('out path is not valid')
    return;
}

const main = function(pdfPath, outputPath) {
    pdftoimage(pdfPath, {
        format: 'tiff',
        prefix: 'tiff',
        outdir: outputPath,
    }).then(() => {
        console.log("TiFFs generated.");
    }).catch(error => console.log(error));
}


main(pdfPath, outputPath);
