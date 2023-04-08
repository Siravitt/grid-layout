import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Test": "Test",
      "Layout & Style": "Layout & Style",
      "Connect API": "Connect API",
      "Form & Table": "Form & Table",
      "EN": "EN",
      "TH": "TH",
      "Move position": "Move position",
      "Move shape": "Move shape"
    }
  },
  th: {
    translation: {
      "Test": "แบบทดสอบที่",
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Connect API": "การเชื่อมต่อ API",
      "Form & Table": "การจัดการหน้าฟอร์ม",
      "EN": "อังกฤษ",
      "TH": "ไทย",
      "Move position": "เปลี่ยนตำแหน่ง",
      "Move shape": "เลื่อนรูปแบบ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;