const models = [
    { title: "Tam giác trước cổ", url: "https://facourse.com/giai-phau-3d/tam-giac-truoc-co" },
    { title: "Hệ thần kinh mạch máu vùng lưng", url: "https://facourse.com/giai-phau-3d/he-than-kinh-mach-mau-vung-lung" },
    { title: "Hệ tiêu hóa", url: "https://facourse.com/giai-phau-3d/he-tieu-hoa" },
    { title: "Hô hấp với tim đang đập", url: "https://facourse.com/giai-phau-3d/ho-hap-voi-tim-dang-dap" },
    { title: "Tổng quan hệ tiết niệu", url: "https://facourse.com/giai-phau-3d/tong-quan-he-tiet-nieu" },
    { title: "Giải phẫu bụng", url: "https://facourse.com/giai-phau-3d/giai-phau-bung" },
    { title: "Thiết đồ ngang tủy sống tại mức L1", url: "https://facourse.com/giai-phau-3d/thiet-do-ngang-tuy-song-tai-muc-l1" },
    { title: "MRI não có tổn thương", url: "https://facourse.com/giai-phau-3d/mri-nao-co-ton-thuong" },
    { title: "Hội chứng ống cổ tay", url: "https://facourse.com/giai-phau-3d/hoi-chung-ong-co-tay" },
    { title: "Đám rối thần kinh cánh tay", url: "https://facourse.com/giai-phau-3d/dam-roi-than-kinh-canh-tay" },
    { title: "Lỗ khẩu cái bướm khẩu và Hố khẩu cái", url: "https://facourse.com/giai-phau-3d/lo-khau-cai-buom-khau-va-ho-khau-cai" },
    { title: "Đường dẫn thị giác bình thường", url: "https://facourse.com/giai-phau-3d/duong-dan-thi-giac-binh-thuong-kem-theo-chuyen-dong-mat" },
    { title: "Thụ thể Endocannabinoid", url: "https://facourse.com/giai-phau-3d/thu-the-endocannabinoid" },
    { title: "Thành bụng trước – bên: Khung chậu", url: "https://facourse.com/giai-phau-3d/thanh-bung-truoc-ben-khung-chau" },
    { title: "Xương đòn", url: "https://facourse.com/giai-phau-3d/xuong-don" },
    { title: "Đốt sống cổ và xương móng", url: "https://facourse.com/giai-phau-3d/giai-phau-xuong-dot-song-co-va-xuong-mong" },
    { title: "Giải phẫu mắt", url: "https://facourse.com/giai-phau-3d/giai-phau-mat" },
    { title: "Giải phẫu tuyến tụy", url: "https://facourse.com/giai-phau-3d/giai-phau-tuyen-tuy" },
    { title: "Mô tuyến thượng thận", url: "https://facourse.com/giai-phau-3d/mo-tuyen-thuong-than" },
    { title: "Mặt cắt ngang tuyến thượng thận", url: "https://facourse.com/giai-phau-3d/mat-cat-ngang-tuyen-thuong-than" },
    { title: "Não: mặt phảng đứng ngang", url: "https://facourse.com/giai-phau-3d/nao-mat-phang-dung-ngang-truoc-sau" },
    { title: "Giải phẫu khung chậu nữ", url: "https://facourse.com/giai-phau-3d/giai-phau-khung-chau-nu" },
    { title: "Thiết đồ cắt ngang của ngực", url: "https://facourse.com/giai-phau-3d/thiet-do-cat-ngang-cua-nguc" },
    { title: "Viêm ruột thừa", url: "https://facourse.com/giai-phau-3d/viem-ruot-thua" },
    { title: "Giải phẫu gan", url: "https://facourse.com/giai-phau-3d/giai-phau-gan" },
    { title: "Xơ nang tuyến tụy", url: "https://facourse.com/giai-phau-3d/xo-nang-tuyen-tuy" },
    { title: "Cấu trúc của nephron", url: "https://facourse.com/giai-phau-3d/cau-truc-cua-nephron" },
    { title: "Thận: Mặt cắt đứng dọc", url: "https://facourse.com/giai-phau-3d/than-mat-cat-dung-doc" },
    { title: "Cơ quan sinh dục nam", url: "https://facourse.com/giai-phau-3d/co-quan-sinh-duc-nam-mat-cat-ngang" },
    { title: "Rốn phổi", url: "https://facourse.com/giai-phau-3d/ron-phoi" },
    { title: "Xương bàn tay", url: "https://facourse.com/giai-phau-3d/xuong-ban-tay" },
    { title: "Xương cánh tay", url: "https://facourse.com/giai-phau-3d/xuong-canh-tay" },
    { title: "Xương vai", url: "https://facourse.com/giai-phau-3d/xuong-vai" },
    { title: "Cơ xoay vai", url: "https://facourse.com/giai-phau-3d/co-xoay-vai" },
    { title: "Vòng tròn Willis", url: "https://facourse.com/giai-phau-3d/vong-tron-willis" },
    { title: "Phình động mạch chủ bụng", url: "https://facourse.com/giai-phau-3d/phinh-dong-mach-chu-bung" },
    { title: "Tim", url: "https://facourse.com/giai-phau-3d/tim" },
    { title: "Nhịp tim bình thường", url: "https://facourse.com/giai-phau-3d/nhip-tim-binh-thuong" },
    { title: "Thiết đồ cắt ngang của răng", url: "https://facourse.com/giai-phau-3d/thiet-do-cat-ngang-cua-rang" },
    { title: "Sinh lý thăng bằng", url: "https://facourse.com/giai-phau-3d/sinh-ly-thang-bang" },
    { title: "Đau bụng kinh", url: "https://facourse.com/giai-phau-3d/dau-bung-kinh" },
    { title: "Chi dưới", url: "https://facourse.com/giai-phau-3d/chi-duoi" },
    { title: "Bệnh thận mạn", url: "https://facourse.com/giai-phau-3d/benh-than-man" },
    { title: "Cơ biểu hiện nét mặt", url: "https://facourse.com/giai-phau-3d/co-bieu-hien-net-mat" },
    { title: "Cơ mông", url: "https://facourse.com/giai-phau-3d/co-mong" },
    { title: "Cơ đùi trước", url: "https://facourse.com/giai-phau-3d/co-dui-truoc" },
    { title: "Cơ đáy chậu", url: "https://facourse.com/giai-phau-3d/co-day-chau" },
    { title: "Cơ dựng sống", url: "https://facourse.com/giai-phau-3d/co-dung-song" },
];

const listContainer = document.getElementById('models-list');
const searchInput = document.getElementById('search-input');
const wrapper = document.getElementById('viewer-wrapper');
const iframeCacheContainer = document.getElementById('iframe-cache-container');
const viewerTitle = document.getElementById('viewer-title');
const placeholder = document.getElementById('viewer-placeholder');

const iframeCache = {};
let currentIframe = null;
let activeItem = null;
let isFirstLoad = true;

// Hàm renderModels
function renderModels(filter = "") {
    listContainer.innerHTML = "";
    
    // Tìm kiếm không phân biệt chữ hoa, chữ thường và dấu
    const normalizedFilter = filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const filtered = models.filter(m => {
        const normalizedTitle = m.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalizedTitle.includes(normalizedFilter);
    });
    
    if(filtered.length === 0) {
        listContainer.innerHTML = "<p style='color: var(--text-muted); text-align: center; padding: 20px;'>Không tìm kiếm thấy mô hình phù hợp.</p>";
        return;
    }

    filtered.forEach((model) => {
        const div = document.createElement('div');
        div.className = 'model-item';
        div.innerHTML = `<span class="title-text">${model.title}</span>`;
        
        div.addEventListener('click', () => {
            selectModel(model, div);
        });
        
        listContainer.appendChild(div);
    });

    if (isFirstLoad && filtered.length > 0) {
        // Tự động vào sẵn mô hình đầu tiên khi mở web
        selectModel(filtered[0], listContainer.firstChild);
        isFirstLoad = false;
    }
}

function selectModel(model, element) {
    if (activeItem) {
        activeItem.classList.remove('active');
    }
    
    element.classList.add('active');
    activeItem = element;

    viewerTitle.innerText = model.title;
    
    placeholder.style.display = 'none';
    
    // Bật Wrapper
    wrapper.style.display = 'block';

    // Ẩn Iframe cũ
    if (currentIframe) {
        currentIframe.style.display = 'none';
        currentIframe.style.opacity = '0';
    }

    // Nếu iframe đã được mở trước đó, lấy ra dùng lại luôn (Không hiện Loading nữa)
    if (iframeCache[model.url]) {
        currentIframe = iframeCache[model.url];
        currentIframe.style.display = 'block';
        setTimeout(() => currentIframe.style.opacity = '1', 50);
    } else {
        const newIframe = document.createElement('iframe');
        // Xét xem link có phải từ Facourse hay không để áp dụng dao mổ bằng class CSS
        if (model.url.includes('facourse.com')) {
            newIframe.classList.add('facourse-mode');
        } else if (model.url.includes('studio/edit')) {
            // Chế độ "Khéo léo" cho Studio: Chỉ giữ lại phần 3D, cắt bỏ các thanh công cụ chỉnh sửa
            newIframe.classList.add('studio-mode');
        }
        newIframe.src = model.url;
        newIframe.frameBorder = "0";
        newIframe.allow = "autoplay; fullscreen; vr";
        newIframe.allowFullscreen = true;
        newIframe.setAttribute('scrolling', 'no');
        newIframe.style.opacity = '0'; // Hiệu ứng fade in

        iframeCacheContainer.appendChild(newIframe);
        
        currentIframe = newIframe;
        currentIframe.style.display = 'block';
        setTimeout(() => currentIframe.style.opacity = '1', 50);

        iframeCache[model.url] = currentIframe;
    }
}

searchInput.addEventListener('input', (e) => {
    renderModels(e.target.value);
});

// Khởi tạo hiển thị danh sách lần đầu
renderModels();
