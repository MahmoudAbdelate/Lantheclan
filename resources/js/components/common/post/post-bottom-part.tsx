import { Heart, MessageCircle, Repeat } from "lucide-react";

export default function PostBottomPart() {
    return (
        <div className="mt-[13px] grid place-items-center">
            <div className="flex gap-[82px]">
                <Heart />
                <MessageCircle />
                <Repeat />
            </div>
        </div>
    );
}
