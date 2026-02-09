import { useState } from 'react';
import Options from '@/components/icons/options';
import PostOptionsMenu from './post-options-menu';

export default function PostTopPart() {
    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked(!clicked);

    return (
        <div className="grid grid-cols-[53px_1fr_45px]">
            {/* Change this with avatar */}
            <div className="h-[40px] w-[40px] rounded-full bg-[#D9D9D9]"></div>
            <h3 className="my-auto text-[16px]">Mahmoud Shalaby</h3>
            <Options clicked={clicked} toggleClicked={toggleClicked} />
            <PostOptionsMenu clicked={clicked} />
        </div>
    );
}
