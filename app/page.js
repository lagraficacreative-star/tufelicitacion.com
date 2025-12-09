import Link from "next/link";
import { getProductsInCollection } from "@/lib/shopify";

// Mock data for fallback if API fails (while waiting for keys)
const MOCK_PRODUCTS = [
    {
        node: {
            id: "1",
            title: "Postal Clásica Navideña",
            handle: "postal-clasica",
            priceRange: { minVariantPrice: { amount: "5.00" } },
            images: { edges: [{ node: { originalSrc: "https://placehold.co/600x400/D42426/FFFFFF?text=Postal+Clasica", altText: "Postal Roja" } }] }
        }
    },
    {
        node: {
            id: "2",
            title: "Postal Corporativa Dorada",
            handle: "postal-corporativa",
            priceRange: { minVariantPrice: { amount: "12.00" } },
            images: { edges: [{ node: { originalSrc: "https://placehold.co/600x400/F8B229/FFFFFF?text=Postal+Corporativa", altText: "Postal Dorada" } }] }
        }
    }
];

export default async function Home() {
    // Try to fetch real products, fallback to mock
    let products = MOCK_PRODUCTS;
    try {
        // products = await getProductsInCollection(); // Uncomment when keys are ready
    } catch (e) {
        console.log("Using mock data");
    }

    return (
        <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <section className="text-center py-20 bg-christmas-red rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Envía Magia esta Navidad</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                        Personaliza postales únicas para tu familia o tu empresa. Diseños exclusivos conectados con la mejor calidad de impresión.
                    </p>
                    <Link href="/catalogo" className="bg-christmas-gold text-christmas-red px-8 py-4 rounded-full text-xl font-bold hover:bg-white transition-colors shadow-lg">
                        Empezar a Diseñar
                    </Link>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-christmas-green opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </section>

            {/* Sectors Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10 text-christmas-green">Elige tu Sector</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg aspect-video">
                        <div className="absolute inset-0 bg-christmas-green/80 group-hover:bg-christmas-green/70 transition-colors flex items-center justify-center">
                            <h3 className="text-4xl font-bold text-white">Particulares</h3>
                        </div>
                    </div>
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg aspect-video">
                        <div className="absolute inset-0 bg-christmas-red/80 group-hover:bg-christmas-red/70 transition-colors flex items-center justify-center">
                            <h3 className="text-4xl font-bold text-white">Empresas</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10 text-christmas-green">Postales Destacadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map(({ node }) => (
                        <div key={node.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-christmas-cream">
                            <div className="aspect-square relative bg-gray-100">
                                <img
                                    src={node.images.edges[0]?.node.originalSrc}
                                    alt={node.images.edges[0]?.node.altText}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{node.title}</h3>
                                <p className="text-christmas-red font-bold text-lg">{node.priceRange.minVariantPrice.amount} €</p>
                                <Link href={`/producto/${node.handle}`} className="block mt-4 text-center w-full border-2 border-christmas-green text-christmas-green py-2 rounded-lg font-semibold hover:bg-christmas-green hover:text-white transition-colors">
                                    Personalizar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
