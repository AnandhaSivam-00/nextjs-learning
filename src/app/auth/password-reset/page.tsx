import Link from "next/link"

export default function PasswordResetPage() {
    return (
        <>
            <Link href="/auth/login" className="hover:text-gray-500 mb-5 text-base">
                <p>&lt; Back</p>
            </Link>
            <h1 className="text-5xl font-bold">Password Reset</h1>
            <div className="min-w-sm flex flex-col justify-start items-center gap-y-5 p-5 border-2 border-gray-700 rounded-lg">
                <form method="POST" className="w-full flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-5 w-full">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="email"><p>Email</p></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="p-2 border border-gray-300 rounded-md"
                                placeholder="Enter your email here"
                                required />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-3/5 mt-2 border-2 border-black uppercase p-3 hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-300"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}