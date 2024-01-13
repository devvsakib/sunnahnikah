import AdvancedSearch from "@/components/AdvancedSearch";
import images from "@/config/images";

export default function Home() {
    return (
        <main className="-mt-16 flex min-h-screen flex-col justify-center items-center p-24"
            style={{
                backgroundImage: `url(${images.banner})`,
                backgroundSize: 'cover',
                backgroundPosition: '0 -30rem',
                backgroundRepeat: 'no-repeat',

            }}
        >
            <h1>Welcome to the Matrimonial Website</h1>
            <p className="my-2">Find your perfect match!</p>
            <AdvancedSearch valueOf={["all"]} />
        </main>
    )
}
