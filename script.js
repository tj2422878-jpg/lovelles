/* =========================================
   LOVELLES - JAVASCRIPT
   ========================================= */


   document.addEventListener("DOMContentLoaded", function () {

    /* ================= FORM PESANAN ================= */

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();


            const nama =
                document.getElementById("nama").value;

            const jenis =
                document.getElementById("jenis").value;

            const pesan =
                document.getElementById("pesanText").value;


            const nomorWhatsApp =
                "6285601184390";


            const text =
                "Dear MiLovs,%0A%0A" +
                "Nama: " +
                encodeURIComponent(nama) +
                "%0A" +
                "Jenis desain: " +
                encodeURIComponent(jenis) +
                "%0A" +
                "Kebutuhan desain: " +
                encodeURIComponent(pesan);


            const whatsappURL =
                "https://wa.me/" +
                nomorWhatsApp +
                "?text=" +
                text;


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }

});