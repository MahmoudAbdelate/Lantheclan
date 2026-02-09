import Post from "@/components/common/post/post";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
    return (
        <div className="h-full min-h-screen bg-[#222831] px-[7px] py-[33px]">
            <h1 className="text-[32px] font-snippet-regular text-center">Lantheclan</h1>
            <div className="mt-[25px] flex flex-col gap-[9px] mb-[50px]">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <Navbar />
        </div>
    )
}
