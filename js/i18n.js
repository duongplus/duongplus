const i18n = {
  vi: {
    nav_info: 'Thông tin',
    nav_products: 'Sản phẩm',
    nav_contact: 'Liên hệ',
    role: 'Software Developer',
    location: 'Ho Chi Minh, Vietnam',
    summary: 'Software Developer với hơn 5 năm kinh nghiệm xây dựng các ứng dụng có khả năng mở rộng. Luôn tìm cách phát triển bản thân, đón nhận những thử thách mới và đóng góp vượt xa những gì kinh nghiệm của mình cho phép.',
    skills_title: 'Kỹ năng',
    experience_title: 'Kinh nghiệm',
    edu_title: 'Học vấn',
    edu_school: 'Nguyen Tat Thanh University',
    edu_major: 'Công nghệ thông tin',
    edu_year: '2016 - 2020',
    products_title: 'Sản phẩm',
    products_subtitle: 'Dự án tham gia và dự án cá nhân',
    products_contributed: 'Dự án tham gia',
    products_personal: 'Dự án cá nhân',
    contact_title: 'Liên hệ',
    contact_subtitle: 'Kết nối với tôi',
    contact_info_title: 'Thông tin liên hệ',
    contact_name_label: 'Họ tên',
    contact_position_label: 'Vị trí',
    contact_address_label: 'Địa chỉ',
    contact_email_label: 'Email',
    contact_phone_label: 'Điện thoại',
    contact_send_title: 'Gửi tin nhắn',
    contact_label_name: 'Họ tên',
    contact_label_email: 'Email',
    contact_label_message: 'Nội dung',
    contact_name_placeholder: 'Nguyễn Văn A',
    contact_message_placeholder: 'Tin nhắn của bạn...',
    contact_submit: 'Gửi',
    page_title_info: 'Duong Dang | Developer',
    page_title_products: 'Sản phẩm | Duong Dang',
    page_title_contact: 'Liên hệ | Duong Dang',
  },
  en: {
    nav_info: 'About',
    nav_products: 'Products',
    nav_contact: 'Contact',
    role: 'Software Developer',
    location: 'Ho Chi Minh, Vietnam',
    summary: 'Software Developer with 5+ years of experience building scalable applications. Always looking to grow, take on new challenges, and contribute beyond what my experience might suggest.',
    skills_title: 'Skills',
    experience_title: 'Experience',
    edu_title: 'Education',
    edu_school: 'Nguyen Tat Thanh University',
    edu_major: 'Information Technology',
    edu_year: '2016 - 2020',
    products_title: 'Products',
    products_subtitle: 'Projects I contributed to and personal projects',
    products_contributed: 'Projects contributed',
    products_personal: 'Personal projects',
    contact_title: 'Contact',
    contact_subtitle: 'Get in touch',
    contact_info_title: 'Contact info',
    contact_name_label: 'Name',
    contact_position_label: 'Position',
    contact_address_label: 'Address',
    contact_email_label: 'Email',
    contact_phone_label: 'Phone',
    contact_send_title: 'Send message',
    contact_label_name: 'Name',
    contact_label_email: 'Email',
    contact_label_message: 'Message',
    contact_name_placeholder: 'John Doe',
    contact_message_placeholder: 'Your message...',
    contact_submit: 'Send',
    page_title_info: 'Duong Dang | Developer',
    page_title_products: 'Products | Duong Dang',
    page_title_contact: 'Contact | Duong Dang',
  },
};

const LANG_KEY = 'portfolio-lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'vi';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
  applyTranslations(lang);
  updateLangSwitcher(lang);
  updatePageTitle(lang);
  if (typeof renderAll === 'function') renderAll(lang);
}

function applyTranslations(lang) {
  const t = i18n[lang] || i18n.vi;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] != null) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] != null) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] != null) el.placeholder = t[key];
  });
}

function updateLangSwitcher(lang) {
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const l = btn.getAttribute('data-lang-btn');
    if (l === lang) {
      btn.classList.add('font-semibold', 'link-accent');
      btn.classList.remove('text-muted');
    } else {
      btn.classList.remove('font-semibold', 'link-accent');
      btn.classList.add('text-muted');
    }
  });
}

function updatePageTitle(lang) {
  const t = i18n[lang] || i18n.vi;
  const path = window.location.pathname;
  if (path.endsWith('products.html')) document.title = t.page_title_products;
  else if (path.endsWith('contact.html')) document.title = t.page_title_contact;
  else document.title = t.page_title_info;
}

function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
  applyTranslations(lang);
  updateLangSwitcher(lang);
  updatePageTitle(lang);
  if (typeof renderAll === 'function') renderAll(lang);
}

document.addEventListener('DOMContentLoaded', initI18n);
