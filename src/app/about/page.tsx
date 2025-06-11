import Image from "next/image"
import aboutImage from "@/public/image.png"
import stackImage from "@/public/Stack.svg"
import globeImage from "@/public/GlobeSimple.svg"
import flagImage from "@/public/Flag.svg"
import watermarkImage from "@/public/watermark.svg"

export default function About() {
    return (
        <main className="w-full min-h-screen pb-10">
            <section className="grid md:grid-cols-2 gap-x-5 gap-y-10 px-10">
                <div className="flex justify-center items-center">
                    <Image
                        src={aboutImage}
                        alt="Hero image"
                        className="w-[627px] h-[627px] object-cover rounded-sm"
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-y-10">
                    <h5 className="uppercase text-base">About printforge</h5>
                    <h1 className="text-5xl font-bold">Empowering makers worldwide</h1>
                    <p className="text-2xl">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                    <p className="text-2xl"> Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                </div>
            </section>
            <hr className="text-gray-200 my-10" />
            <section className="grid md:grid-cols-3 gap-y-10 gap-x-5 px-10 lg:px-20">
                <div className="flex flex-col justify-start items-start gap-y-3 lg:border-r-2">
                    <div className="flex flex-row justify-start items-start gap-x-1">
                        <Image
                            src={stackImage}
                            alt="stack svg file"
                            width={23}
                            height={23}
                            className=""
                        />
                        <h3 className="font-bold text-base">100K+ Models</h3>
                    </div>
                    <p className="text-sm">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-3 lg:border-r-2">
                    <div className="flex flex-row justify-start items-start gap-x-1">
                        <Image
                            src={globeImage}
                            alt="globe simple svg file"
                            width={23}
                            height={23}
                            className=""
                        />
                        <h3 className="font-bold text-base">Active Community</h3>
                    </div>
                    <p className="text-sm">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-3">
                    <div className="flex flex-row justify-start items-start gap-x-1">
                        <Image
                            src={flagImage}
                            alt="flag svg file"
                            width={23}
                            height={23}
                            className=""
                        />
                        <h3 className="font-bold text-base">Free to Use</h3>
                    </div>
                    <p className="text-sm">Most models are free to download, with optional premium features for power users.</p>
                </div>
            </section>
            <hr className="text-gray-200 my-10" />
            <section className="flex justify-center items-center px-10 lg:px-20">
                <div className="max-w-190 flex flex-col justify-start items-start gap-y-5">
                    <h2 className="text-5xl font-bold">Our Team</h2>
                    <p className="text-base">At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, 
                        enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.</p>
                    <hr className="text-gray-600 w-50 self-center" />
                    <p className="text-base">Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, 
                        or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
                </div>
            </section>
            <div className="flex justify-center items-center w-full h-30 mt-10">
                <Image 
                    src={watermarkImage}
                    alt="watermark svg file"
                    width={100}
                    height={100}
                />
            </div>
        </main>
    )
}