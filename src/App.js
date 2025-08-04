import React, { useState } from "react";

const techImages = [
  { name: "AnyDesk", url: "https://anydesk.com/_static/img/logos/anydesk-logo-c0861c.png" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Fedora", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg" },
  { name: "Interbanking", url: "https://prodocmsp-interbanking2020.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTDEC70A27B66842708AB20A442F3A823B/Large/LogoHeader.png?format=webp&type=responsiveimage&channelToken=d3257b803a0441b6adc933fa025459d5" },
  { name: "Laravel", url: "https://partners.laravel.com/assets/images/laravel-logo-trademark.svg" },
  { name: "Magento", url: "https://magento-opensource.com/wp-content/uploads/2024/06/Logo-Magento-Open-Source-Color-1.png" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Office 365", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/512px-Microsoft_365_%282022%29.svg.png" },
  { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Power BI", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redmine", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Redmine_logo.svg" },
  { name: "RustDesk", url: "https://rustdesk.com/_astro/logo.BKb61-he.svg" },
  { name: "SAP", url: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "TeamViewer", url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/TeamViewer_Icon.svg" },
  { name: "Ubuntu", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
  { name: "VSCode", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "VTEX", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/VTEX_logo.png" },
  { name: "Windows Server", url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" },
  { name: "Wise", url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/TransferWise_Logo_2021.svg" },
  { name: "Zabbix", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Zabbix_logo_square.svg" },
  { name: "Zenvia", url: "https://www.zenvia.com/wp-content/uploads/2025/02/logo_zenvia.svg" }
];

export default function App() {
  const [language, setLanguage] = useState("es");
  const tr = {
    es: {
      title: "Alejandro Campos",
      subtitle: "Especialista en Integraciones, Ingeniero de Datos & DevOps. Apasionado por diseñar soluciones reales que conectan sistemas, personas y decisiones.",
      stack: "🚀 Stack tecnológico",
      backendTitle: "💻 Backend Engineer",
      backendPoints: [
        "Desarrollo de APIs RESTful en Node.js para SAP, VTEX y otros sistemas.",
        "Diseño y mantenimiento de endpoints para la comunicación entre ERP y plataformas externas.",
        "Automatización de procesos con Bash, Python y scripting backend.",
        "Manejo avanzado de SQL y lógica de negocio en backend de datos.",
        "Construcción y despliegue de microservicios internos para validación y traducción masiva de datos."
      ],
      dataTitle: "📊 Análisis de Datos",
      dataPoints: [
        "Tableros comerciales (SAP SD), de categorías y stock (SAP MM), y financieros/bancarios (SAP FICO).",
        "Consolidación de datos desde SAP, DL, VTEX, MySQL y PostgreSQL.",
        "Diseño de estructuras para Power BI: DAX, M, dataflows reutilizables.",
        "Optimización de vistas SQL, lógica funcional e indicadores clave (KPIs)."
      ],
      integrationTitle: "🔗 Integraciones, DevOps & Arquitectura de Datos",
      integrationPoints: [
        "Integraciones SAP S/4HANA: iFlows, IDocs, APIs, SAP Integration Suite.",
        "Integraciones con VTEX, Magento, Zenvia, Wise, Interbanking, TiendaNube.",
        "Automatización de infraestructura: Docker, scripting, Prometheus, Azure AD.",
        "Diseño de arquitectura de datos y orquestación de pipelines analíticos.",
        "Soporte técnico nivel 2, monitoreo, trazabilidad y gobernanza de integraciones."
      ],
      footerNote: "Portfolio construido con React + Tailwind CSS. Código ofuscado para producción."
    },
    en: {
      title: "Alejandro Campos",
      subtitle: "Integration Specialist, Data Engineer & DevOps. Passionate about designing real solutions that connect systems, people, and decisions.",
      stack: "🚀 Tech Stack",
      backendTitle: "💻 Backend Engineer",
      backendPoints: [
        "RESTful API development in Node.js for SAP, VTEX, and other systems.",
        "Design and maintenance of endpoints for ERP and external platform communication.",
        "Automation of processes using Bash, Python, and backend scripting.",
        "Advanced SQL handling and backend business logic.",
        "Building and deploying internal microservices for validation and massive data translation."
      ],
      dataTitle: "📊 Data Analysis",
      dataPoints: [
        "Business dashboards (SAP SD), category/stock dashboards (SAP MM), and financial/banking dashboards (SAP FICO).",
        "Data consolidation from SAP, DL, VTEX, MySQL, and PostgreSQL.",
        "Power BI structure design: DAX, M, reusable dataflows.",
        "SQL view optimization, functional logic, and KPI definition."
      ],
      integrationTitle: "🔗 Integrations, DevOps & Data Architecture",
      integrationPoints: [
        "SAP S/4HANA Integrations: iFlows, IDocs, APIs, SAP Integration Suite.",
        "Integrations with VTEX, Magento, Zenvia, Wise, Interbanking, TiendaNube.",
        "Infrastructure automation: Docker, scripting, Prometheus, Azure AD.",
        "Data architecture design and orchestration of analytics pipelines.",
        "Level 2 technical support, monitoring, traceability, and integration governance."
      ],
      footerNote: "Portfolio built with React + Tailwind CSS. Code obfuscated for production."
    }
  };

  const t = tr[language];
  const isDark = language === "en";

  return (
    <main className={`transition-all duration-500 ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"} min-h-screen font-sans`}>
      <header className={`transition-all duration-500 ${isDark ? "bg-gray-800" : "bg-white"} shadow p-6 mb-8`}>
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold">{t.title}</h1>
            <p className="text-lg mt-2 text-gray-500">{t.subtitle}</p>
          </div>
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {language === "es" ? "English" : "Español"}
          </button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto grid gap-8">
        <div className={`transition-all duration-500 ${isDark ? "bg-gray-800" : "bg-white"} overflow-x-auto py-4 px-2 shadow rounded-xl`}>
          <h2 className="text-2xl font-semibold mb-4 text-center">{t.stack}</h2>
          <div className="flex gap-6 items-center justify-start animate-scroll overflow-x-auto">
            {techImages.map((tech, index) => (
              <div key={index} className="flex-shrink-0 w-24 h-24 flex flex-col items-center">
                <img src={tech.url} alt={tech.name} className="w-16 h-16 object-contain" />
                <span className="text-sm mt-1 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-500 ${isDark ? "bg-gray-800" : "bg-white"} rounded-xl shadow p-6`}>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">{t.backendTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.backendPoints.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>

        <div className={`transition-all duration-500 ${isDark ? "bg-gray-800" : "bg-white"} rounded-xl shadow p-6`}>
          <h2 className="text-3xl font-bold text-green-700 mb-4">{t.dataTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.dataPoints.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>

        <div className={`transition-all duration-500 ${isDark ? "bg-gray-800" : "bg-white"} rounded-xl shadow p-6`}>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">{t.integrationTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.integrationPoints.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </section>

      <footer className={`transition-all duration-500 ${isDark ? "bg-gray-950 text-gray-400" : "bg-gray-900 text-gray-300"} text-sm py-6 mt-12`}>
        <div className="max-w-4xl mx-auto text-center">
          <p>📧 danielalejandro.camposr@gmail.com</p>
          <p>
            🌐 <a href="https://linkedin.com/in/dalejandrocampos" className="underline text-blue-400">LinkedIn</a>
          </p>
          <p className="mt-2">{t.footerNote}</p>
        </div>
      </footer>
    </main>
  );
}
