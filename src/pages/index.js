import AdvancedSearch from "@/components/AdvancedSearch";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Welcome to the Matrimonial Website</h1>
            <p>Find your perfect match!</p>
            <AdvancedSearch />
        </main>
    )
}
