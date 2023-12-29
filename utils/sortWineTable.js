//---------------------------------------------//
//- Sort wines in asending order on page load -//
//---------------------------------------------//

function sortWinesOnLoad() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("wine-vintage-table-container"); //
    switching = true;
    /* Make a loop that will continue until no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI"); // This taarget's the parent LI element
        // Loop through all list items:
        for (i = 0; i < (b.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;

        x = b[i].getElementsByTagName("h2")[0].textContent.toLowerCase().trim()
        y = b[i+1].getElementsByTagName("h2")[0].textContent.toLowerCase().trim()

        /* Check if the next item should switch place with the current item: */
        if (x > y) {
            /* If next item is alphabetically lower than current item, mark as a switch and break the loop: */
            shouldSwitch = true;
            break;
        }
        }
        if (shouldSwitch) {
        /* If a switch has been marked, make the switch and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        }
    };
    list.style.display = "block" //"wine-vintage-table-container" is hidden by defauilt and it set to display once sort is complete
};

//-----------------------------------------------//
//- Sort Vintage in asending order on page load -//
//-----------------------------------------------//

// Has artefact code for descending order as well - good exercise to remove it and clean it up //

function sortVintageOnLoad() {
    const vintageTableEls = document.querySelectorAll('.vintage-table') // Select all elements with class "Vintage-table"
    vintageTableEls.forEach((element) => {                              // for each element in this array, carry out the enclosed function:

        var table, rows, switching, i, x, y, n, shouldSwitch, dir, switchcount = 0;
        table = element
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /* Loop through all table rows (except the first, which contains table headers): */
            for (i = 1; i < (rows.length - 2); i++) { // Minus 2 because we have a header row and a "footer" row (+ brand and total bottles)
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare, one from current row and one from the next: */
            x = Number(rows[i].getElementsByTagName("A")[0].innerHTML.trim())
            
            y = Number(rows[i + 1].getElementsByTagName("A")[0].innerHTML.trim())
            
            /* Check if the two rows should switch place, based on the direction, asc or desc: */
            if (dir == "asc") {
                if ( x > y) {
                // If so, mark as a switch and break the loop:
                
                shouldSwitch = true;
                // console.log(`dir: ${dir}, X: ${x}, Y: ${y} - Should Switch: ${shouldSwitch}`)
                break;
                }
            } else if (dir == "desc") {
                if (x < y) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                // console.log(`dir: ${dir}, X: ${x}, Y: ${y} - Should Switch: ${shouldSwitch}`)
                break;
                }
            }
            }
            if (shouldSwitch) {
            /* If a switch has been marked, make the switch and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
            }

            // [HL] Comment out what I think to be the part of the code that does sort "desc" if nothing happened with "asc"
            // else {
            //     /* If no switching has been done AND the direction is "asc",
            //     set the direction to "desc" and run the while loop again. */
            //     if (switchcount == 0 && dir == "asc") {
            //         dir = "desc";
            //         switching = true;
            //     }
            // }
        }
        
    });
};

sortVintageOnLoad()
sortWinesOnLoad()