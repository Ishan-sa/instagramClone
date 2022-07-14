import { getProviders, signIn as SignIntoProvider } from "next-auth/react"

export default function signIn({ providers }) {
    console.log(providers);
    return (
        <>
            {/* {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={
                        () => SignIntoProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))} */}
        </>
    )
}

export async function getServerSideProps(context) {

    const providers = await getProviders();
    return {
        props: { providers },
    }
}