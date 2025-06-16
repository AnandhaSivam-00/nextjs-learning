import { fetchModelById } from "@/lib/fetchModelData";
import Image from "next/image";
import Link from "next/link";

import LikeSymbol from "@/public/Like.svg"

interface ModelProps {
    params: {
        id: string;
    },
    
}

export default async function Model({ params }: ModelProps) {
    const { id } = await params;
    const model = await fetchModelById(id);

    return (
        <section className="w-full h-full grid md:grid-cols-2 gap-2 p-3">
            <div className="w-full h-full">
                <Image
                    src={model?.image || '/placeholder-image.jpg'}
                    alt={model?.name || 'Model image'}
                    width={700}
                    height={700}
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-col justify-start items-start gap-y-5">
                <Link href='/models' className="text-sm text-gray-500 uppercase hover:text-orange-600">
                    Back to overview
                </Link>
                <div className="w-full h-full flex flex-col justify-center items-start gap-y-6 mt-5">
                    <div className="flex flex-row justify-between items-center gap-x-1">
                        <Image
                            src={LikeSymbol}
                            alt="Like Symbol"
                            width={18}
                            height={18}
                        />
                        <p className="text-base">{model?.likes}</p>
                    </div>
                    <h3 className="text-xl font-bold">{model?.name}</h3>
                    <p className="text-base">{model?.description}</p>
                    <div className="flex flex-row justify-center items-start">
                        {model?.category.split('-').map((tag, index) => (
                            <div key={index} className="px-3 py-1 border-1 border-gray-300 rounded-full me-3">
                                <p className="text-base capitalize">{tag}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm mb-8">Added on {new Date(model?.dateAdded || '').toLocaleDateString()}</p>
                </div>
            </div>
        </section>
    )
}