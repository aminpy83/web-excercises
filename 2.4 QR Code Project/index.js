/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image'; 
import { writeFile } from 'fs';

inquirer
  .prompt([{
    /* Pass your questions in here */
    type: "input",
    name: "userInput",
    message: "say to me "
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const img = qr.imageSync(answers.userInput, {type: "png"})
    
    writeFile("qr_img.png", img, (err) => {
      if (err) throw err;
      console.log("saved")}); 
    writeFile("URL.txt", answers.userInput, (err) => {
      if (err) throw err;
      console.log("saved")});
  })
;   //  https://youtube.com