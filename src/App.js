import React from "react";

export default function App() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Alejandro Campos</h1>
        <p className="text-lg text-gray-600">
          Especialista en Integraciones, Ingeniero de Datos & DevOps. Construyo soluciones técnicas que conectan plataformas, personas y decisiones reales.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Backend Engineer</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Desarrollo de APIs RESTful en Node.js para SAP, VTEX y sistemas internos.</li>
          <li>Automatización de procesos de negocio con scripting backend.</li>
          <li>SQL avanzado y lógica de negocio aplicada al backend.</li>
          <li>Herramientas propias: traductores de SKU, validadores automáticos (Flask + Extensiones).</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Análisis de Datos</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Modelado y explotación de datos en Power BI con múltiples fuentes.</li>
          <li>Consolidación de SAP, ERP, MySQL y PostgreSQL.</li>
          <li>Creación de KPIs funcionales para áreas de negocio.</li>
          <li>Optimización de vistas SQL y consultas para reporting.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Integraciones, DevOps y Arquitectura de Datos</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Integraciones SAP S/4HANA: iFlows, IDocs, APIs y SAP Integration Suite.</li>
          <li>Conexión con plataformas: VTEX, DL, TiendaNube.</li>
          <li>Automatización y monitoreo con Docker, Prometheus y scripting.</li>
          <li>Diseño de flujos de datos críticos y estructuras analíticas escalables.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
        <p className="text-gray-600">
          📧 danielalejandro.camposr@gmail.com<br />
          🌐 <a href="https://linkedin.com/in/dalejandrocampos" className="text-blue-600 underline">LinkedIn</a>
        </p>
      </section>

      <footer className="mt-10 border-t pt-4 text-sm text-gray-400">
        <p>Portfolio creado con React.js, Tailwind CSS y construido desde cero.</p>
        <p>Código ofuscado automáticamente al compilar en producción (<code>npm run build</code>).</p>
      </footer>
    </main>
  );
}
