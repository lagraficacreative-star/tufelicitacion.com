import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tu Postal de Navidad",
    description: "Personaliza tus postales navideñas para empresas y particulares",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <nav className="bg-christmas-red text-white p-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold">🎄 Tu Postal de Navidad</h1>
                        <div className="space-x-4">
                            <a href="/" className="hover:text-christmas-gold">Inicio</a>
                            <a href="/catalogo" className="hover:text-christmas-gold">Catálogo</a>
                        </div>
                    </div>
                </nav>
                <main className="min-h-screen container mx-auto p-4">
                    {children}
                </main>
                <footer className="bg-christmas-green text-white p-8 mt-12 text-center">
                    <p>© 2025 Tu Postal de Navidad. Todos los derechos reservados.</p>
                </footer>
            </body>
        </html>
    );
}
