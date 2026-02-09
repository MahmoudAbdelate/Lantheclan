export default function Options({
    clicked,
    toggleClicked
}: {
    clicked: boolean;
    toggleClicked: () => void;
}) {
    return (
        <div className="grid place-items-center">
            <div
                className={`my-auto flex gap-[4px] rounded-[20px] px-[10px] py-[10px] ${clicked ? 'bg-[#3A4750]' : 'bg-transparent'} transition ease-out`}
                onClick={toggleClicked}
            >
                <div className="h-[5px] w-[5px] rounded-full bg-[#D9D9D9]"></div>
                <div className="h-[5px] w-[5px] rounded-full bg-[#D9D9D9]"></div>
                <div className="h-[5px] w-[5px] rounded-full bg-[#D9D9D9]"></div>
            </div>
        </div>
    );
}
