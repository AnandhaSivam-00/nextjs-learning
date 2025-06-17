import { fetchModelData } from "@/lib/fetchModelData";
import CardLayout from "../components/Card";

export default async function Models({ params }: {params: Promise<{}>}) {
    console.log(await params);

    const modelData = await fetchModelData();

    return (
        <main className="h-screen">
            <section className="grid md:auto-cols-auto md:grid-flow-col gap-x-4">
                <div 
                    className="px-4 py-2 md:p-4 sticky top-0 overflow-x-auto"
                    style={{ scrollbarWidth: 'none' }}
                >
                    <div className="flex flex-row md:flex-col justify-start items-start gap-y-3 gap-x-5 md:gap-x-0 uppercase text-sm text-gray-500">
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer">All</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer whitespace-nowrap">3D Printer</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer">Art</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer">Education</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer">Fashion</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer whitespace-nowrap">Hobby & Diy</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer">Household</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer">Miniatures</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer">Tools</p>
                        <p className="px-2 hover:border-b-2 md:hover:border-b-0 md:hover:border-s-2 border-orange-500 hover:text-orange-500 cursor-pointer whitespace-nowrap">Toys & Games</p>
                    </div>
                </div>
                <div 
                    className="h-screen flex flex-col justify-start items-start gap-y-5 overflow-y-auto px-3 py-6"
                    style={{ scrollbarWidth: 'none' }}
                >
                    <h2 className="text-2xl">3D Models</h2>
                    <div className="flex flex-row justify-start items-start gap-x-5 gap-y-10 flex-wrap">
                        { modelData.map((data, index) => (
                            <CardLayout 
                                key={index}
                                data={data}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}