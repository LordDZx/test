document.addEventListener('DOMContentLoaded', function() {
    // تنشيط القائمة المتنقلة
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.querySelector('nav.md\\:block');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('mobile-menu');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // حماية من XSS في شريط البحث
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            // تنظيف المدخلات من أي أكواد ضارة
            let value = e.target.value;
            value = value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            e.target.value = value;
        });
    }
    
    // تحميل التعريبات عبر AJAX مع حماية XSS
    function loadPatches() {
        // هنا يمكنك إضافة كود لجلب البيانات من الخادم
        // مع التأكد من تنظيف أي بيانات قبل عرضها
    }
    
    // تنشيط تأثيرات التمرير
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
    
    // تنبيه عند مغادرة الصفحة إذا كان هناك تنزيل جارٍ
    window.addEventListener('beforeunload', function(e) {
        // يمكنك تعديل هذا بناءً على حالة التحميل
        if (document.querySelector('.downloading')) {
            e.preventDefault();
            e.returnValue = 'لديك تنزيل قيد التقدم، هل تريد المغادرة؟';
        }
    });
    
    // حماية جميع الروابط الخارجية
    document.querySelectorAll('a').forEach(link => {
        if (link.href && !link.href.startsWith(window.location.origin) && !link.href.startsWith('/')) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
        }
    });
});
