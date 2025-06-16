import Image from "next/image"
import Link from "next/link";

import LikeSymbol from "@/public/Like.svg"

interface CardLayoutProps {
    data: {
        id: number;
        image: string;
        description: string;
        name: string;
        category: string;
        likes: number;
    };
}

export default function CardLayout({ data }: CardLayoutProps) {
    return (
        <Link 
            href={`/models/${data.id}`} 
            className="flex flex-col justify-start items-start gap-y-3 max-w-48 md:max-w-50 border-1 border-gray-300 rounded-sm hover:shadow-lg hover:scale-102 transition-all duration-300"
        >
            <Image
                src={data.image}
                alt={data.description}
                width={300}
                height={200}
                className="rounded-t-sm"
            />
            <div className="flex flex-col justify-start items-start gap-y-3 p-2">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p className="text-base">{data.description}</p>
                <div className="px-2 py-1 border-1 border-gray-300 rounded-full">
                    <p className="text-base">{data.category}</p>
                </div>
                <div className="flex flex-row justify-between items-center gap-x-1">
                    <Image
                        src={LikeSymbol}
                        alt="Like Symbol"
                        width={18}
                        height={18}
                    />
                    <p className="text-base">{data.likes}</p>
                </div>
            </div>
        </Link>
    )
}