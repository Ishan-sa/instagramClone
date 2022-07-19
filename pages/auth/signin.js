import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

export default function signIn({ providers }) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img
                    className="w-80"
                    src="https://links.papareact.com/ocw"
                    alt=""
                />
                <p className="font-xs italic">This is not a real app. It's just built for fun!</p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name} className=" flex items-center gap-3 py-3 px-4 bg-gray-800 rounded-xl text-white transition duration-300 hover:scale-125"
                        >
                            <img
                                src="/googleLogo.svg"
                                className="w-6 cursor-pointer"
                                alt=""
                            />
                            <button
                                onClick={
                                    () => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {

    const providers = await getProviders();
    return {
        props: { providers },
    }
}