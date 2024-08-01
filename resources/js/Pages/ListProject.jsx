import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ListProject({ auth }) {
    return (
        <>
            <Head title="List Project" />
            <Authenticated user={auth.user}
                header={
                    <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                        List Project
                    </h2>
                }>


            </Authenticated>
        </>
    )
}