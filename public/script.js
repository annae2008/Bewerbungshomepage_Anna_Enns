/* -- ----------------------------- */

/* -- BKSD - Remove Active          */
/* -- ----------------------------- */
function active_remove() {
        $('.active').each(function(index) {
         $(this).removeClass('active');
       });
    }
/* -- ------------------------------ */
/* -- BKSD - Set Active Menü         */
/* -- ------------------------------ */
 function setActiveMenu(id) {
       /* Entferne Active-Markierung */
       active_remove();
       /* Füge Klasse Active hinzu */
       jQuery(id).addClass('active');
    }
/* ------------------------------------------ */
/* -- Inhalte laden                           */
/* -- ---------------- ---------------------- */
   function load_content(bereich, page) {
       let obj1 = document.getElementById(bereich);
       $(obj1).load('/' + page, function () {
      });
    }

/* ------------------------------------------ */
/* -- Funktion für das Versenden der Mail     */
/* -- ---------------- ---------------------- */
const sendMail = (mail) => {
  // Bei Versendung werden alle Formularinformationen hiermit übertragen
  fetch("/send", {
    method: "post", 
    body: mail,

  }).then((response) => {
    return response.json();
  });
};