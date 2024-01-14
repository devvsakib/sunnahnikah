import AdvancedSearch from "@/components/AdvancedSearch";
import PublicLayout from "@/components/Layouts/PublicLayout";
import Testimonial from "@/components/Testimonial";
import images from "@/config/images";

export default function Home() {
    return (
        <main className="-mt-16"
        >
            <section
                style={{
                    backgroundImage: `url(${images.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '0 -30rem',
                    backgroundRepeat: 'no-repeat',

                }}
                className="flex flex-col justify-center items-center p-24 min-h-screen">
                <h1>Welcome to the Matrimonial Website</h1>
                <p className="my-2">Find your perfect match!</p>
                <AdvancedSearch valueOf={["all"]} />
            </section>
            <PublicLayout>
                <section className="py-40 mt-10">
                    <div>
                        <h3 className="text-4xl text-heading font-semibold">
                            We bringing people together <br />
                            with our platform in very easy way
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-10 items-center mt-20">
                        <div className="rounded-2xl w-3/4 bg-gradient-to-b hover:from-white from-[#FA4A6F] to-[#532B79]">
                            <div className="bg-white m-[.1rem] p-5 border-red border-2 rounded-2xl">
                                <div>
                                    <img src={images.signup} />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-lg mt-4">Sing Up</h3>
                                    <p className="text-sm font-light">Register for free & put up your Matrimony Profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-2xl w-3/4  bg-gradient-to-b hover:from-white from-[#FA4A6F] to-[#532B79]">
                            <div className="bg-white m-[.1rem] p-5 border-red border-2 rounded-2xl">
                                <div>
                                    <img src={images.connect} />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-lg mt-4">Connect</h3>
                                    <p className="text-sm font-light">Select & Connect with Matches you like</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl w-3/4 bg-gradient-to-b hover:from-white from-[#FA4A6F] to-[#532B79]">
                            <div className="bg-white m-[.1rem] p-5 border-red border-2 rounded-2xl">
                                <div>
                                    <img src={images.interact} />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-lg mt-4">Interact</h3>
                                    <p className="text-sm font-light">Become a Premium Member & Start a Conversation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-40">
                    <Testimonial />
                </section>
            </PublicLayout>
        </main>
    )
}
