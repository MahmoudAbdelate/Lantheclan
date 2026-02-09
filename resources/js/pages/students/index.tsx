import { usePage } from "@inertiajs/react";

export default function Students() {
    const { props } = usePage();
    return (
        <div>
            <h1>Students</h1>
            <h2>{props.hi as string}</h2>
        </div>
    );
}
