import { Bell, CircleUserRound, House, Settings } from "lucide-react";

export default function Navbar() {
    return (
        <div className="fixed bottom-[17px] grid h-[55px] w-screen place-items-center">
            <div className="flex h-[45px] w-[220px] items-center justify-center gap-[29px] rounded-[20px] bg-[#393E46]">
                <House />
                <Bell />
                <CircleUserRound />
                <Settings />
            </div>
        </div>
    );
}
