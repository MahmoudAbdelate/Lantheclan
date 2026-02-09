export default function PostOptionsMenu({ clicked }: { clicked: boolean }) {
    return (
        <div className={`absolute right-[50px] top-[45px] w-[140px] h-[85px] bg-[#3A4750] rounded-[20px] transition ease-out ${clicked ? 'opacity-100' : 'opacity-0'}`}></div>
    )
}
