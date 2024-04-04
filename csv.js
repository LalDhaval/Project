
     // Select the input element and store it in a variable named "x"
     const x = document.querySelector("input");

     // Add an event listener to the input element that listens for a "change" event
     x.addEventListener("change", () => {
       // Create a new FileReader object
       const fr = new FileReader();
     
       // When the FileReader object has finished loading the file, run the following code
       fr.onloadend = e => {
         // Split the contents of the file into an array of lines, then split each line into an array of values
         let r = fr.result.split("\n").map(e => {
           return e.split(",");
         });
     
         // For each row in the CSV file, create a new tr element and add it to the table element
         r.forEach(e => {
           // Map each value in the row to a string, then join the strings together with no separator
           let m = e.map(e => {
             return `${e}`;
           }).join("");
           // Create a new tr element and set its innerHTML to the string of values
           const ce = document.createElement("tr");
           ce.innerHTML = m;
     
           // Only add the tr element to the table element if it contains any text
           if (ce.innerText !== "") {
             document.querySelector("table").append(ce);
           }
         });
     
         // Uncomment the following line to log the parsed CSV data to the console
         // console.log(r)
       }
     
       // Read the contents of the selected file as text
       fr.readAsText(x.files[0]);
     });

     
// https://www.codewithsundeep.com/2022/04/read-csv-in-html.html