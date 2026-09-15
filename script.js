```javascript
/* ========================================
   MY PORTFOLIO
   สถาบันบัณฑิตพัฒนศิลป์
   คณะศิลปศึกษา
   สาขานาฏศิลป์ศึกษา
======================================== */


/* ==============================
   จำนวนผลงาน
============================== */

const totalWorks = 11;


/* ==============================
   ข้อมูลผลงาน
==============================

   เปลี่ยนชื่อและคำอธิบายตรงนี้ได้เลย

============================== */

const artworks = [

    {
        title: "01 | ผลงานนาฏศิลป์ไทย",
        desc: "ผลงานด้านนาฏศิลป์ไทยและการแสดง"
    },

    {
        title: "02 | การแข่งขันนาฏศิลป์",
        desc: "ประสบการณ์จากการแข่งขันด้านนาฏศิลป์"
    },

    {
        title: "03 | การแสดง",
        desc: "ผลงานการแสดงและกิจกรรมบนเวที"
    },

    {
        title: "04 | กิจกรรมในโรงเรียน",
        desc: "กิจกรรมและประสบการณ์ในโรงเรียน"
    },

    {
        title: "05 | ผลงานสร้างสรรค์",
        desc: "ผลงานสร้างสรรค์ด้านศิลปะและการแสดง"
    },

    {
        title: "06 | เกียรติบัตร",
        desc: "เกียรติบัตรและรางวัลที่ได้รับ"
    },

    {
        title: "07 | กิจกรรมจิตอาสา",
        desc: "กิจกรรมจิตอาสาและการทำประโยชน์เพื่อสังคม"
    },

    {
        title: "08 | ศิลปวัฒนธรรมไทย",
        desc: "กิจกรรมส่งเสริมและอนุรักษ์ศิลปวัฒนธรรมไทย"
    },

    {
        title: "09 | ประสบการณ์ด้านนาฏศิลป์",
        desc: "ประสบการณ์และการฝึกฝนด้านนาฏศิลป์"
    },

    {
        title: "10 | ผลงานที่ภาคภูมิใจ",
        desc: "ผลงานที่แสดงถึงความสามารถและความตั้งใจ"
    },

    {
        title: "11 | เป้าหมายในอนาคต",
        desc: "เป้าหมายในการศึกษาต่อสาขานาฏศิลป์ศึกษา"
    }

];


/* ==============================
   สร้าง Gallery
============================== */

function renderGallery() {

    const grid =
        document.getElementById("portfolio-grid");


    if (!grid) {
        return;
    }


    let html = "";


    for (let i = 1; i <= totalWorks; i++) {

        const data = artworks[i - 1];

        const imageUrl = `images/${i}.jpg`;


        html += `

            <div
                class="polaroid-card cursor-pointer"
                onclick="openModal(
                    '${imageUrl}',
                    '${escapeHTML(data.title)}',
                    '${escapeHTML(data.desc)}'
                )"
            >

                <!-- รูป -->
                <div
                    class="w-full aspect-a4
                    rounded-xl
                    overflow-hidden
                    mb-3
                    border border-dance-light
                    flex items-center
                    justify-center
                    bg-[#EAF5F3]
                    relative"
                >

                    <img
                        src="${imageUrl}"
                        alt="${escapeHTML(data.title)}"
                        class="portfolio-image absolute inset-0"
                        onerror="imageError(this)"
                    >

                    <div class="image-placeholder">

                        <span class="text-4xl text-dance mb-2">
                            🎭
                        </span>

                        <p class="text-dance font-bold text-xs">
                            ผลงานชิ้นที่ ${i}
                        </p>

                        <p class="text-gray-400 text-[10px] mt-1">
                            ใส่รูป ${i}.jpg
                        </p>

                    </div>

                </div>


                <!-- ข้อมูล -->
                <div class="space-y-1">

                    <h3
                        class="font-bold text-dance-dark text-sm leading-snug"
                    >
                        ${data.title}
                    </h3>

                    <p
                        class="text-gray-500 text-xs"
                    >
                        ${data.desc}
                    </p>

                </div>


                <!-- ปุ่ม -->
                <div class="text-right mt-3">

                    <span
                        class="text-[10px]
                        text-white
                        bg-dance
                        font-bold
                        px-2.5
                        py-1
                        rounded-full"
                    >

                        🔍 กดเพื่อดูรูป

                    </span>

                </div>

            </div>

        `;

    }


    grid.innerHTML = html;

}


/* ==============================
   ถ้าหารูปไม่เจอ
============================== */

function imageError(image) {

    image.style.display = "none";

}


/* ==============================
   เปิด Modal
============================== */

function openModal(imageSrc, title, description) {

    const modal =
        document.getElementById("art-modal");

    const modalImg =
        document.getElementById("modal-img");

    const modalTitle =
        document.getElementById("modal-title");

    const modalDesc =
        document.getElementById("modal-desc");


    if (!modal) {
        return;
    }


    modalImg.src = imageSrc;

    modalImg.alt = title;

    modalTitle.innerText = title;

    modalDesc.innerText = description;


    modal.classList.remove("hidden");


    setTimeout(() => {

        modal.classList.add("opacity-100");

    }, 10);


    document.body.style.overflow = "hidden";

}


/* ==============================
   ปิด Modal
============================== */

function closeModal() {

    const modal =
        document.getElementById("art-modal");


    if (!modal) {
        return;
    }


    modal.classList.remove("opacity-100");


    setTimeout(() => {

        modal.classList.add("hidden");

    }, 300);


    document.body.style.overflow = "";

}


/* ==============================
   กด ESC เพื่อปิด
============================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* ==============================
   ป้องกัน HTML แปลก ๆ
============================== */

function escapeHTML(text) {

    return String(text)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* ==============================
   เมื่อเปิดเว็บไซต์
============================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderGallery();

    }
);
```

