import { Link, Head } from "@inertiajs/react";

export default function Welcome({ data }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen text-white bg-gray-900 sm:items-center sm:pt-0">
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.name}
                            <p>{item.description}</p>
                            {item.stacks?.map(({ id, name, path }) => (
                                <li key={id}>
                                    {name}-{path}
                                </li>
                            ))}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
