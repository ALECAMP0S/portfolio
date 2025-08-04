import React from "react";

export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <header className="bg-white shadow p-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold">Alejandro Campos</h1>
          <p className="text-lg mt-2 text-gray-600">
            Especialista en Integraciones, Ingeniero de Datos & DevOps. Apasionado por diseñar soluciones reales que conectan sistemas, personas y decisiones.
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto grid gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">💻 Backend Engineer</h2>
          <p className="mb-2">Diseño y desarrollo de soluciones backend orientadas a servicios críticos, con foco en integración, performance y escalabilidad.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Desarrollo de APIs RESTful en Node.js para SAP, VTEX y sistemas internos.</li>
            <li>Automatización de procesos con Bash, Python y backend scripting.</li>
            <li>Manejo avanzado de SQL y lógica de negocio en backend de datos.</li>
            <li>Desarrollo de herramientas propias: traductores de SKU, validadores masivos, extensiones Chrome (Flask + API).</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-3xl font-bold text-green-700 mb-4">📊 Análisis de Datos</h2>
          <p className="mb-2">Modelado y explotación de datos para análisis estratégico, tableros interactivos y soporte a decisiones de negocio.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Consolidación de datos desde SAP, DL, VTEX, MySQL y PostgreSQL.</li>
            <li>Diseño de estructuras para Power BI, con DAX, M y dataflows reutilizables.</li>
            <li>Desarrollo de vistas optimizadas para reporting y KPI funcionales.</li>
            <li>Interpretación de datos para equipos comerciales, logísticos y operativos.</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">🔗 Integraciones, DevOps & Arquitectura de Datos</h2>
          <p className="mb-2">Diseño de flujos críticos de información, conexión entre plataformas y automatización de procesos escalables.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Integraciones SAP S/4HANA: iFlows, IDocs, APIs, SAP Integration Suite.</li>
            <li>Interoperabilidad entre sistemas internos, DL, VTEX, TiendaNube.</li>
            <li>Automatización de infraestructura: Docker, scripting, Prometheus, Azure AD.</li>
            <li>Diseño de arquitecturas de datos unificadas y pipelines analíticos.</li>
            <li>Soporte técnico de nivel 2, monitoreo y trazabilidad operativa.</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 bg-gray-900 text-gray-300 text-sm py-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>📧 danielalejandro.camposr@gmail.com</p>
          <p>
            🌐 <a href="https://linkedin.com/in/dalejandrocampos" className="underline text-blue-400">LinkedIn</a>
          </p>
          <p className="mt-2">Portfolio construido con React + Tailwind CSS. Código ofuscado para producción.</p>
        </div>
      </footer>
    </main>
  );
}
