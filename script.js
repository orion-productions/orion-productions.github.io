// Translations object
const translations = {
    en: {
        welcome: "Welcome to Orion Productions",
        tagline: "Advancing the Creative Industries on Technology, Production and Education"
    },
    fr: {
        welcome: "Bienvenue chez Orion Productions",
        tagline: "Faire progresser les industries créatives en technologie, production et éducation"
    },
    es: {
        welcome: "Bienvenido a Orion Productions",
        tagline: "Impulsando las industrias creativas en tecnología, producción y educación"
    },
    pt: {
        welcome: "Bem-vindo à Orion Productions",
        tagline: "Impulsionando as indústrias criativas em tecnologia, produção e educação"
    },
    it: {
        welcome: "Benvenuto a Orion Productions",
        tagline: "Promuovendo le industrie creative in tecnologia, produzione ed educazione"
    },
    de: {
        welcome: "Willkommen bei Orion Productions",
        tagline: "Förderung der kreativen Industrien in Technologie, Produktion und Bildung"
    },
    ja: {
        welcome: "Orion Productionsへようこそ",
        tagline: "テクノロジー、制作、教育におけるクリエイティブ産業の推進"
    },
    zh: {
        welcome: "欢迎来到猎户座制作",
        tagline: "推动创意产业在技术、制作和教育方面的发展"
    },
    ko: {
        welcome: "Orion Productions에 오신 것을 환영합니다",
        tagline: "기술, 제작 및 교육 분야의 창의적 산업 발전"
    },
    ar: {
        welcome: "مرحباً بكم في أوريون للإنتاج",
        tagline: "تطوير الصناعات الإبداعية في التكنولوجيا والإنتاج والتعليم"
    }
};

// Language direction mapping
const languageDirections = {
    en: 'ltr',
    fr: 'ltr',
    es: 'ltr',
    pt: 'ltr',
    it: 'ltr',
    de: 'ltr',
    ja: 'ltr',
    zh: 'ltr',
    ko: 'ltr',
    ar: 'rtl'
};

// DOM elements
let languageSelect;
let elementsToTranslate;

// Initialize the application
function init() {
    languageSelect = document.getElementById('languageSelect');
    elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    // Set up event listeners
    languageSelect.addEventListener('change', handleLanguageChange);
    
    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem('orion-language') || 'en';
    languageSelect.value = savedLanguage;
    
    // Apply the language
    changeLanguage(savedLanguage);
    
    // Add loading animation
    document.body.classList.add('loaded');
}

// Handle language change
function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
    
    // Save preference to localStorage
    localStorage.setItem('orion-language', selectedLanguage);
}

// Change the language of the page
function changeLanguage(language) {
    const translation = translations[language];
    const direction = languageDirections[language];
    
    if (!translation) {
        console.error('Translation not found for language:', language);
        return;
    }
    
    // Update document direction
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', language);
    
    // Update all translatable elements
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Add smooth transition effect
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}

// Handle logo loading
function handleLogoLoad() {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('load', () => {
            logo.style.opacity = '1';
        });
        
        logo.addEventListener('error', () => {
            // If logo fails to load, create a placeholder
            createLogoPlaceholder();
        });
    }
}

// Create a placeholder if logo is missing
function createLogoPlaceholder() {
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.getElementById('logo');
    
    if (logo && logoContainer) {
        logo.style.display = 'none';
        
        const placeholder = document.createElement('div');
        placeholder.className = 'logo-placeholder';
        placeholder.innerHTML = `
            <div style="
                width: 300px;
                height: 150px;
                border: 2px dashed rgba(255, 255, 255, 0.3);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgba(255, 255, 255, 0.5);
                font-size: 14px;
                margin: 0 auto;
            ">
                <div style="text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 10px;">🪐</div>
                    <div>Orion Productions Logo</div>
                    <div style="font-size: 12px; margin-top: 5px;">Place your logo.png file in the assets folder</div>
                </div>
            </div>
        `;
        
        logoContainer.appendChild(placeholder);
    }
}

// Add smooth transitions to body
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            transition: opacity 0.3s ease;
        }
        .logo {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addSmoothTransitions();
    init();
    handleLogoLoad();
});

// Handle window resize for responsive design
window.addEventListener('resize', () => {
    // Add any responsive adjustments here if needed
});

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
    // Allow users to navigate language selector with keyboard
    if (event.key === 'Tab' && document.activeElement === languageSelect) {
        languageSelect.focus();
    }
}); 