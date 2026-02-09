import PostBottomPart from "./post-bottom-part";
import PostContent from "./post-content";
import PostTopPart from "./post-top-part/post-top-part";

export default function Post() {
    return (
        // 'relative' class for menu absolute position
        <div className="rounded-[20px] bg-[#303841] px-[15px] py-[15px] relative">
            <PostTopPart />
            <PostContent />
            <PostBottomPart />
        </div>
    );
}
