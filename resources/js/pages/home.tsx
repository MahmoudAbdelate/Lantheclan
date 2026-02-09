export default function Home() {
    return (
        <div className="h-full min-h-screen bg-[#222831] px-[7px] py-[33px]">
            <h1 className="text-[32px] font-snippet-regular text-center">Lantheclan</h1>
            <div className="mt-[25px]">
                <div className="bg-[#303841] rounded-[20px] px-[15px] py-[15px]">
                    <div className="grid grid-cols-[53px_1fr_34px]">
                        {/* Change this with avatar */}
                        <div className="rounded-full w-[40px] h-[40px] bg-[#D9D9D9]"></div>
                        <h3 className="my-auto text-[16px]">Mahmoud Shalaby</h3>
                        <div className="flex gap-[5px] my-auto">
                            <div className="rounded-full w-[6px] h-[6px] bg-[#D9D9D9]"></div>
                            <div className="rounded-full w-[6px] h-[6px] bg-[#D9D9D9]"></div>
                            <div className="rounded-full w-[6px] h-[6px] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                    <div className="mx-[13px] py-[13px]">
                        Hi, I am Flan from clan.
                    </div>
                </div>
            </div>
        </div>
    )
}
